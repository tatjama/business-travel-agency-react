const defaultUser = {
    id: 5,
    status: 0,
    email: "primer@primer.com",
    password: "PrimerPrimer1"
}
export default function login (values) {
if(values.email === defaultUser.email && values.password === defaultUser.password){
    console.log(defaultUser)
    return defaultUser
}else{
    return {}
}
}