import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
 import { Link } from 'react-router-dom'

 

function Preview({ resumeData}) {
  console.log(resumeData);
  
  return (
      <Box component="section"  >
      <Paper elevation={3} sx={{padding:2, textAlign:'center'}}>
        <h3>{resumeData.name}</h3>
        <h4>{resumeData.jobTitle}</h4>
        <p>
          <span>{resumeData.location}</span>||
          <span>{resumeData.email}</span>||
          <span>{resumeData.phone}</span>||

        </p>
        <p>
          <Link>{resumeData.github}</Link>
          <Link>{resumeData.linkedin}</Link>
        </p>
         <Divider>
                  <h2>SUMMAERY</h2>

         </Divider>
        <p>{resumeData.summary}</p>
        
         <Divider> 
           <h2>Skills</h2> 
           </Divider>
           {
            resumeData?.skills?.map(sk=>(
                        <button className='btn border'>{sk}</button>

            ))
           }
         
           
         <Divider>
           <h2>Eduction</h2>
           </Divider>
         <h4>{resumeData.course}</h4>
         <p>
          <span>{resumeData.university}</span>
          <span>{resumeData.passout}</span>
         </p>





        
       </Paper>

    </Box>
  )
}

export default Preview