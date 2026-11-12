import axios from "axios";

 const axiosInsatance=axios.create({
    baseURL:'https://resume-builder-aug26-1.onrender.com',
    timeout:5000
 })
 export default axiosInsatance

 //respomse intercepoter: handling global/ common errors

 axiosInsatance.interceptors.response.use((response)=>{
    return response
 },(error)=>{
    if(error.response){
        const status=error.response.status

        if(status==401){
            console.log("un-Authorised")
        }
        else if(status==404){
            console.log("API NOT FOUND");
            
        }
        else if(status==500){
            console.log("server error");
            
        }
        else if(error.requset){
            console.log("No response from sever");
            
        }
        else{
            console.log("Errors"+error.message);
            
        }
         return Promise.reject(error);
    }
 })