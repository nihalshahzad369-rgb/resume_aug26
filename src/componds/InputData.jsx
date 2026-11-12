 import React, { useState } from 'react'
 import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import jobTitle from '../assets/jobRole (1).json'
import skills from '../assets/jobSkills.json'
import jobsummary from '../assets/summaries.json'
import { addresumeAPI } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

 

  

const steps = [' Basic Informations', 'Contact Details', 'Eductions Details','Review & Submit'];

function InputData({resumeData,setResumeData}) {
  
  console.log(resumeData);
  

   const [activeStep, setActiveStep] = React.useState(0);
   const navigate=useNavigate()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

   
   const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const renderstepcound=(stepcout)=>{
    switch(stepcout){
      case 0: return(
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
      )
       case 1: return(
      <div>
           <h3>Contact Detiails</h3>
         <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic" className='w-100' label="Email" variant="standard" />
         <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic" className='w-100' label="Phone" variant="standard" />
         <TextField value={resumeData.linkedin} onChange={(e)=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic" className='w-100' label="linkedin" variant="standard" />
         <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic" className='w-100' label="Github" variant="standard" />
      </div>

       )
       case 2:return(
        <div>
          <h3>Eductions Details</h3>
        <TextField value={resumeData.course} onChange={(e)=>setResumeData({...resumeData,course:e.target.value})} id="standard-basic" className='w-100' label="Course  / Degree" variant="standard" />
         <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic" className='w-100' label="University / collage" variant="standard" />
         <TextField value={resumeData.passout} onChange={(e)=>setResumeData({...resumeData,passout:e.target.value})} id="standard-basic" className='w-100' label="PassOut Year" variant="standard" />

           
        </div>
       )
       case 3: return(
        <div>
          <h3>Skills</h3>
          <p>Our AI will generated skills & Summaey acoording to your job role.click the <span className='fw-bold'>AI Skills & summary </span> botton to proceed  </p>

        </div>
       )
    }
  }

  const generatedskillsum=()=>{
    setResumeData({...resumeData,skills:skills[resumeData.jobTitle],summary:jobsummary[resumeData.jobTitle]})
    handleNext()
  }
  const addrrsume= async ()=>{
    const {name,jobTitle,location,email,phone,github,linkedin,course,university,passout,skills, summary}=resumeData

    if(name&&jobTitle&&location&&email&&phone&&github&&linkedin&&course&&university&&passout&&skills.length>0&&summary){
      const res= await addresumeAPI(resumeData)
      console.log(res);
      
            if(res.status==201){
        alert("resume generate succfully")
        navigate(`/view/${res.data.id}`)
      }

    }
    else{
      alert("fill the filed complted")
    }
  }


  
  return (
     <>
         <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={addrrsume}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
         {/* {view of each stepp} */}
         <Box>

         {renderstepcound(activeStep)}
         </Box>



          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            {/* <Button onClick={handleNext} ref={nextButtonRef}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
            {
              activeStep==steps.length-1?
  
              <button className='btn' onClick={generatedskillsum}>Generate Skills & Summary</button>
              :
              <button className='btn' onClick={handleNext}>Next</button>

            }
          </Box>
        </React.Fragment>
      )}
    </Box>
     
     </>
  )
}

export default InputData