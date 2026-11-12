 import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Link } from "react-router-dom";
 import { FaTrash } from "react-icons/fa";
import { dltHistoryAPI, getHistoryAPI } from '../services/allApi';
import { useEffect, useState } from 'react';


  

 
 
 function History() {
  const [history,setHistory]=useState([])
  console.log(history);
  

useEffect(() => {
  getHistory()
}, [])



const getHistory=async ()=>{
  const res=await getHistoryAPI()
  // console.log(res);
  if(res.status==200){
    setHistory(res.data)
  }
  
}
const dltHistory=async(id)=>{
  const res =await dltHistoryAPI(id)
  getHistory()
  // console.log(res);
  
}


  return (
    <>
    <div className="container m-5">
      <h2 className="text-center text-danger">Downloaded Resumes</h2>
      <Link to={'/'} style={{float:'right',marginTop:'-40px'}}>Back</Link>
<div className='row'>
   
   {
    history?.length>0?
    history.map(his=>(
       <div key={his.id} className='col-md-4'>
    <Box className='my-2'>
      <Paper elevation={3} sx={{padding:2}}>
        <div className='d-flex justify-content-center align-items-between'>
          <h6> Review At :{his?.timestamp}</h6>
          <button onClick={()=>dltHistory(his.id)} className='btn text-danger fs-5'><FaTrash /></button>

        </div>
        <img src={his.resumeimage} className='img-fluid' alt="resume image" />

      </Paper>
    </Box>

  </div>

    )):
    <p className='text-center my-5 text-danger'> No resume Donwnloded yet</p>
   }

  
</div>

    </div>
    
    
    </>
  )
}

export default History