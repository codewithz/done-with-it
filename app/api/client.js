import { create } from "apisauce";

const apiClient=create({
    baseURL:'http://192.168.29.137:9000/api'
});

apiClient
    .get('/listings')
    .then(response=>{
       
    })
