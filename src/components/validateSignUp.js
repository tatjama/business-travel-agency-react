export default function validateSignUp(values) {
    let errors = {};
    if(!values.firstName){
        errors.firstName = "First name is required!";
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.firstName)){
        errors.firstName = "First name is invalid!";
    }
    if(!values.lastName){
        errors.lastName = "Last name is required!";
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.lastName)){
        errors.lastName = "Last name is invalid!";
    }
    if(!values.email){
        errors.email = "E-mail address is required!";
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "E-mail address is invalid!";
    }
    if(!values.password){
        errors.password = "Password is required!";        
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
        errors.password = "Password is invalid!";
    }
    if(!values.address){
        errors.address = "Address is required!";        
    }else if(!/[A-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$/.test(values.address)){
        errors.address = "Address is invalid!";
    }
    if(!values.phone){
        errors.phone = "Phone number is required!";        
    }else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(values.phone)){
        errors.phone = "Phone number is invalid!";
    }
    return errors;
}