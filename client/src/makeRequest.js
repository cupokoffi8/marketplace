import axios from "axios"; 

export const makeRequest = axios.create({
    baseURL: `http://${process.env.REACT_APP_API_URL}`, 
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    },
    withCredentials: true,
});