 export function isValidEmail(email: string): boolean {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  

  export const isStrongPassword = (password:string) => {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/;

    if (password.length < minLength) {
        return false;
    }

    if (!uppercaseRegex.test(password)) {
        return false;
    }

    if (!lowercaseRegex.test(password)) {
        return false;
    }

    if (!numberRegex.test(password)) {
        return false;
    }

    if (!specialCharRegex.test(password)) {
        return false;
    }

    return true;
};
