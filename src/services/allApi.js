import apiService from "../api/apiServerice";

 /// add resume api
 export const addresumeAPI=async(reqBody)=>{
   return await apiService("POST",'/resumes',reqBody)
  }

  // get sigle resume
 export const getResumeApi=async (resumeid)=>{
   return await apiService("GET",`/resumes/${resumeid}`,{})
  }

  // post donwlode resume
 export const downloadResumeAPI=async(reqBody)=>{
    return await apiService("POST",'/history',reqBody)
  }

  // get history
    export const getHistoryAPI= async()=>{
     return await apiService("GET",'/history',{})

   }
   // history delet
   export const dltHistoryAPI=(id)=>{
    return apiService("DELETE",`/history/${id}`,{})
   }
   // resume update
  export const upadateResumeAPI= async(id,rebody)=>{
     return  await apiService("PUT",`/resumes/${id}`,rebody)
   }