import { ErrForm, Form } from "../features/Login/type";
export function isValidEmail(email: string): boolean {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}


export const isStrongPassword = (password: string): Boolean => {
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

export const isValidation = (formData: Form): Promise<{ isValid: boolean; errors: ErrForm }> => {

    let isValid = true;
    const errors: ErrForm = {
        username: '',
        password: '',
        loi: ''
    };

    // Check username
    if (!formData.username || formData.username.trim() === '') {
        errors.username = "Please enter username...";
        isValid = false;
    } else {
        if (formData.username.length < 6) {
            errors.username = "Username must be at least 6 characters long.";
            isValid = false;
        }
    }

    // Check password
    if (!formData.password || formData.password.trim() === '') {
        errors.password = "Please enter a valid password.";
        isValid = false;
    } else {
        if (!isStrongPassword(formData.password)) {
            errors.password =
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
            isValid = false;
        }
    }

    // Return a promise with both isValid and errors
    return Promise.resolve({ isValid, errors });
};

