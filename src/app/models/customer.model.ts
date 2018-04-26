export class CustomerModel {

    constructor(firstname?: string, lastname?: string, gender?: string, email?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
    }
    
    public firstname: string;
    public lastname: string;
    public gender: string;
    public email: string;
}
