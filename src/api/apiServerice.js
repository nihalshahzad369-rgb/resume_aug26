import axiosInsatance from "./axiosInstance";
 const apiService= async (httpmethod,url,reqbody)=>{

    const reqConfig={
        method:httpmethod,
        url,
        data:reqbody
    }
     try{
        const res=await axiosInsatance(reqConfig)
        return res
     }catch(err){
        return err

     }


 }
 export default apiService