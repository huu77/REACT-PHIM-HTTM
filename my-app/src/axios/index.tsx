import axios, { AxiosRequestConfig } from "axios";
import { NavigateFunction, useNavigate } from 'react-router-dom'; // Sử dụng hook useHistory để điều hướng

type MyResponseType = 'json' | undefined
const apiUrl = import.meta.env.VITE_SOME_KEY
async function requestApi(
  endpoint: string,
  method: string,
  body: object | undefined,
  responseType: MyResponseType = 'json'): Promise<unknown> {
  // eslint-disable-next-line no-useless-catch
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Chú ý: Access-Control-Allow-Origin nên được cấu hình trên máy chủ NestJS thay vì trong yêu cầu client.
    };

    const instance = axios.create({ headers });

    instance.interceptors.request.use(
      async function (config: AxiosRequestConfig): Promise<any> {
        // Thực hiện các tác vụ trước khi gửi request
        // Ví dụ: thêm header vào request
        const token = localStorage.getItem("accessToken");

        if (token) {
          // Kiểm tra config.headers có tồn tại không
          if (config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
          } else {
            // Nếu config.headers không tồn tại, tạo một object mới và gán Authorization
            config.headers = {
              'Authorization': `Bearer ${token}`
            };
          }
        }

        return config; // Trả về config đã được cập nhật
      },
      function (error: unknown) {
        // Xử lý lỗi nếu có
        return Promise.reject(error);
      }
    );


    instance.interceptors.response.use(
      async (response) => {
        // Thực hiện các tác vụ với response trước khi trả về
        // Ví dụ: xử lý dữ liệu từ response
        return response;
      },
      async (error:any) => {
        // Xử lý lỗi nếu có
        const originalConfig = error.config;
        if (error.response && error.response.status === 419) {
          try {
            // Thực hiện yêu cầu để làm mới token
            const result = await instance.post(`${apiUrl}/auth/refreshToken`, {}, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
              }
            });
            const { accessToken, refreshToken } = result.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            originalConfig.headers['Authorization'] = `Bearer ${accessToken}`;

            return instance(originalConfig);
          } catch (error:any) {
            if (error.response && (error.response.status === 404 || error.response.status === 400)) {
              // Xóa token và điều hướng đến trang "LoginPage"
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              const navigate: NavigateFunction = useNavigate();
              navigate('/login'); // Điều hướng đến trang "LoginPage"
            }
          }
        }
        return Promise.reject(error);
      }
    );

    const response = await instance.request({
      method,
      url: `${apiUrl}/${endpoint}`,
      data: body,
      responseType
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default requestApi;
