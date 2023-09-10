import { Form,ErrForm } from "../Login/type";

export interface FromRegister extends Form {
    firstname:string,
    lastname:string,
    confirmpassword:string,
    email:string
}
export interface ErrFromRegister extends ErrForm{
    firstname:string,
    lastname:string,
    confirmpassword:string,
    email:string
}

// 
type Register = {
    // Các thuộc tính khác...
    setFormData: (callback: (prevData: FromRegister) => FromRegister) => void;
  };
  
export type NameTitle='username' | 'firstname' |'lastname' | 'password' | 'confirmpassword'|'email'
export type Autocomplete= 'text' |'password'
export interface TypeOfRegister {
    labelTitle:NameTitle,
    nameTitle:NameTitle,
    err:ErrFromRegister,
    autoComplete:Autocomplete
}