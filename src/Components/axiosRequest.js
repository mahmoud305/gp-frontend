import axios from "axios";
const Base_URL = "http://baas-gp.herokuapp.com/api/";

// get the token from the local storage.
let org = JSON.parse(localStorage.getItem("organization"));
export var token = org?.token; // the question mark to avoid getting an error when the user is not loggedin
console.log("token is "+token);
 const config = {
    "Authorization": `Bearer ${token}`
}



export const publicRequst = axios.create({ // for requests without tokens -Loggin Register-.
    baseURL: Base_URL,
});
export const privateRequst = axios.create({
    baseURL: Base_URL,
    headers: config,
})

// export const privateRequst = axios.create({
//     baseURL: Base_URL,
//     headers: config,
// })