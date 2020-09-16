import {users} from '../data/users.json';

export default function login (values) {
    let user = {};
    console.log(values)
    let usersArray = users.concat(JSON.parse(localStorage.getItem('usersInLocalStorage')))
    console.log(usersArray)
    for(let i = 0; i < users.length; i++){       
        if(users[i].email === values.email && users[i].password === values.password){
            user = users[i]; 
            return user
        }        
    }
    return user

}