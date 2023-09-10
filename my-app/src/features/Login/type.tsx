export interface Form {
    username: string,
    password: string
}
export interface ErrForm extends Form {
    loi: string;
}