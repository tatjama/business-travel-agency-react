export default function validateSignUp(values) {
    let errors = {};
    if(!values.email){
        errors.email = "E-mail address is required!";
    }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = "E-mail address is invalid!";
    }
    if(!values.password){
        errors.password = "Password is required!";        
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
        errors.password = "Password is invalid!";
    }
    return errors;
}