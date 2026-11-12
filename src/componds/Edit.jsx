import { FaEdit} from "react-icons/fa"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FaXmark } from "react-icons/fa6";
import jobTitle from '../assets/jobRole (1).json'
import { upadateResumeAPI } from "../services/allApi";
 
 
 

 
 
  
 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight:'80vh',
  overflowY:'auto'
   
};

 
function Edit({resumeData,setResumeData}) {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef=useRef()
   


  
 const addSkill=(skill)=>{
  if(skill){
    if (resumeData?.skills?.some(sk => sk.toLowerCase() === skill.toLowerCase())){
      alert('skill alredy added.. plsece add another one')
    }
    else{
      setResumeData({...resumeData,skills:[...resumeData.skills,skill]})
      skillRef.current.value=""
    }

  }
  else{
    alert('enter valid skil')
  }

 }
 const removeSkill=(skill)=>{
  setResumeData({...resumeData,skills:resumeData.skills?.filter(sk=>sk!=skill)})

 }

 const update= async ()=>{
     const {name,jobTitle,location,email,phone,github,linkedin,course,university,passout,skills, summary}=resumeData
 
     if(name&&jobTitle&&location&&email&&phone&&github&&linkedin&&course&&university&&passout&&skills.length>0&&summary){
       const res= await  upadateResumeAPI(resumeData?.id,resumeData)
       console.log(res);
       
             if(res.status==200){
         alert("resume uapdated succssfuly")
         handleClose()
         navigate(`/view/${res.data.id}`)
       }
 
     }
     else{
       alert("fill the filed complted")
     }
   }
   return (
    <>
      <button onClick={handleOpen} className="btn btn-warning"><FaEdit className="fs-2"/></button>

  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Detail

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
          <h3>Personal Detilas</h3>
          <TextField value={resumeData.name} onChange={(e)=>setResumeData({...resumeData,name:e.target.value})} id="standard-basic" className='w-100' label="Full Name" variant="standard" />
          <FormControl variant="standard" className='w-100'>
          <InputLabel   id="demo-simple-select-filled-label">Job Tittle</InputLabel>
          <Select value={resumeData.jobTitle} onChange={(e)=>setResumeData({...resumeData,jobTitle:e.target.value})}  labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">

           {jobTitle.jobRoles.map(job=>(
                      <MenuItem value={job}>{job}</MenuItem>


           ))}
           
           
          </Select>
          </FormControl>
          <TextField value={resumeData.location} onChange={(e)=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic" className='w-100' label="Location" variant="standard" />
         </div>

       <div>
          <h2>Contact Detiails</h2>
          <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic" className='w-100' label="Email" variant="standard" />
          <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic" className='w-100' label="Phone" variant="standard" />
          <TextField value={resumeData.linkedin} onChange={(e)=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic" className='w-100' label="linkedin" variant="standard" />
          <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic" className='w-100' label="Github" variant="standard" />
       </div>

        <div>
           <h3>Eductions Details</h3>
          <TextField value={resumeData.course} onChange={(e)=>setResumeData({...resumeData,course:e.target.value})} id="standard-basic" className='w-100' label="Course  / Degree" variant="standard" />
          <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic" className='w-100' label="University / collage" variant="standard" />
          <TextField value={resumeData.passout} onChange={(e)=>setResumeData({...resumeData,passout:e.target.value})} id="standard-basic" className='w-100' label="PassOut Year" variant="standard" />
                       
         </div>

                    <div>
                      <h2>Skills</h2>
                      <div className="d-flex justify-content-center align-items-center">
                        <input ref={skillRef} type="text" className="form-control"  placeholder="enter skills"/>
                        <buttonc onClick={()=>addSkill(skillRef.current.value)} className="btn btn-primary">Add</buttonc>

                      </div>
                      <h5 className="mt-3">Added Skills:</h5>
                      <div className="d-flex flex-wrap">
                      {
                        resumeData?.skills?.map(sk=>(
                             <button className="btn btn-dark m-1" onClick={()=>removeSkill(sk)}>{sk}<FaXmark /> </button>


                        ))

                      }

 
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3>professional summary </h3>
                      <TextField value={resumeData?.summary} onClick={(e)=>setResumeData({...resumeData,summary:e.target.value})} id="standard-basic" className='w-100' label="Summary" variant="standard" multiline></TextField>

                    </div>
                    <button className=" btn btn-primary my-3 w-100" onClick={update} >Update</button>

          </Typography>

          
        </Box>
      </Modal>


     
       
  </>
  )
}

export default Edit