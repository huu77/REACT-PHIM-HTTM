import axios, { AxiosRequestConfig } from "axios";
import { NavigateFunction, useNavigate  } from 'react-router-dom'; // Sử dụng hook useHistory để điều hướng
 
interface ResponseData {
    // Định nghĩa cấu trúc dữ liệu của response dựa trên yêu cầu của bạn
}
type MyResponseType =  'json'  | undefined
 
async function requestApi(endpoint: string,
    method: string,
    body: object | undefined,
    responseType:MyResponseType='json'): Promise<any> {
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
            function (error: any) {
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
            async (error) => {
                // Xử lý lỗi nếu có
                const originalConfig = error.config;
                if (error.response && error.response.status === 419) {
                    try {
                        // Thực hiện yêu cầu để làm mới token
                        const result = await instance.post(`http://localhost:3000//api/v1/refresh_token`, {
                            refreshToken: localStorage.getItem('refreshToken')
                        });
                        const { access_token, refresh_token } = result.data;
                        localStorage.setItem('accessToken', access_token);
                        localStorage.setItem('refreshToken', refresh_token);

                        originalConfig.headers['Authorization'] = `Bearer ${access_token}`;

                        return instance(originalConfig);
                    } catch (error: any) {
                        if (error.response && (error.response.status === 404 || error.response.status === 400)) {
                            // Xóa token và điều hướng đến trang "LoginPage"
                            localStorage.removeItem('accessToken');
                            localStorage.removeItem('refreshToken');
                            const navigate: NavigateFunction = useNavigate();
                            navigate('/LoginPage'); // Điều hướng đến trang "LoginPage"
                        }
                    }
                }
                return Promise.reject(error);
            }
        );

        const response = await instance.request<ResponseData>({
            method,
            url: `http://localhost:3000/${endpoint}`,
            data: body,
            responseType
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export default requestApi;
