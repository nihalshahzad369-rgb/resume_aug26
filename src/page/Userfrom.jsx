import { useState } from "react"
import InputData from "../componds/InputData"
import Preview from "../componds/Preview"
 
  

function Userfrom() {
   const [resumeData,setResumeData]=useState({
  
      name:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      github:"",
      linkedin:"",
      course:"",
      university:"",
      passout:"",
      skills:[],
      summary:""
  
    })
  return (
    <div className='row p-5'>
      <div className="col-md-6">
<InputData resumeData={resumeData} setResumeData={setResumeData}/>
      </div>
      <div className="col-md-6">
    {
resumeData?.name &&
<Preview resumeData={resumeData} />
    }  
      </div>
    </div>
  )
}

export default Userfrom