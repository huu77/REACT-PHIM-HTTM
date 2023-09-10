import { ErrForm, Form } from "../features/Login/type";
import { ErrFromRegister, FromRegister } from "../features/Register/type";
//check mail
export function isValidEmail(email: string): boolean {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}


const checkValidate: any = (valueFormData: string, IsValid: boolean, ValueErrors: string, label: string): Promise<{ IsValid: boolean; ValueErrors: string }> => {
    if (!valueFormData || valueFormData.trim() === '') {
        ValueErrors = `Please enter ${label}...`;
        IsValid = false;
    } else {
        if (valueFormData.length < 6) {
            ValueErrors = `${label} must be at least 6 characters long.`;
            IsValid = false;
        }
    }
    return Promise.resolve({ IsValid, ValueErrors })
}
const checkPassword: any = (valueFormData: string, IsValid: boolean, ValueErrors: string, label: string): Promise<{ IsValid: boolean; ValueErrors: string }> => {
    if (!valueFormData || valueFormData.trim() === '') {
        ValueErrors = `Please enter a valid ${label}.`;
        IsValid = false;
    } else {
        if (!isStrongPassword(valueFormData)) {
            ValueErrors =
                `${label} must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.`;
            IsValid = false;
        }
    }
    return Promise.resolve({ IsValid, ValueErrors })
}
const checkConfirmPassword: any = (password: string, confirmpassword: string, IsValid: boolean, ValueErrors: string, label: string): Promise<{ IsValid: boolean; ValueErrors: string }> => {
    if (!password || password.trim() === '') {
        ValueErrors = `Please enter a valid ${label}.`;
        IsValid = false;
    } else {
        if (password !== confirmpassword) {
            ValueErrors =
                `${label} is not match.`;
            IsValid = false;
        }
    }
    return Promise.resolve({ IsValid, ValueErrors })
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


//  that la vai chuong
export const isValidation2 = async (formData: FromRegister): Promise<{ isValid: boolean; errors: ErrFromRegister }> => {

    let isValid = true;
    const errors: ErrFromRegister = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        confirmpassword: '',
        email: ''
    };
    // check email
    const isCheckEmail = await isValidEmail(formData.email)
    const errorEmail= 'Email is not valid...'
    // Check username
    const validationResultUserName = await checkValidate(formData.username, isValid, errors.username, "UserName");
    const isCheckUsername = validationResultUserName.IsValid;
    const errorUserName = validationResultUserName.ValueErrors;

    // check firstname
    const validationResultFirstName = await checkValidate(formData.firstname, isValid, errors.firstname, 'FirstName')
    const isCheckFirstName = validationResultFirstName.IsValid;
    const errorFirstName = validationResultFirstName.ValueErrors;
    // // check lastname
    const validationResultLastName = await checkValidate(formData.lastname, isValid, errors.lastname, 'LastName')
    const isCheckLastName = validationResultLastName.IsValid;
    const errorLastName = validationResultLastName.ValueErrors;
    // // Check password
    const validationResultPassword = await checkPassword(formData.password, isValid, errors.password, 'Password')
    const isCheckPassWord = validationResultPassword.IsValid;
    const errorPassWord = validationResultPassword.ValueErrors;
    // // check confirmpassword
    const validationResultConfirmPassword = await checkConfirmPassword(formData.password, formData.confirmpassword, isValid, errors.confirmpassword, 'ConfirmPassword')
    const isCheckConfirmPassword = validationResultConfirmPassword.IsValid;
    const errorConfirmPassword = validationResultConfirmPassword.ValueErrors;

    // Return a promise with both isValid and errors
    if (!isCheckUsername || !isCheckFirstName || !isCheckLastName || !isCheckPassWord || !isCheckConfirmPassword ||!isCheckEmail) {
        isValid = false;
    }
    errors.username = errorUserName;
    errors.firstname = errorFirstName;
    errors.lastname = errorLastName;
    errors.password = errorPassWord;
    errors.confirmpassword = errorConfirmPassword;
    errors.email=errorEmail
    return Promise.resolve({ isValid, errors });
};
