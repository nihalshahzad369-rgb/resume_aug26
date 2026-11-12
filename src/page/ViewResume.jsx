 import Preview from "../componds/Preview";
 import Edit from "../componds/Edit"
import { FaBackward, FaFileDownload, FaHistory, } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { downloadResumeAPI, getResumeApi } from "../services/allApi"
import html2canvas, {html2Canvas} from 'html2canvas'
import jspdf from 'jspdf'
 
 
 
 
function ViewResume() {
  const [resumeDetails,setResumeDetail]=useState({})
  // console.log(resumeDetails);
  const PreviewrRef=useRef()   // {current:}
  //  console.log(PreviewrRef);
  


  const {id}=useParams()
  // console.log(id);
  useEffect(() => {

     getresume()

  }, [])
  
  

  const getresume= async ()=>{
   const res=await getResumeApi(id)
  //  console.log(res);
   if(res.status==200){
    setResumeDetail(res.data)
   }
   

  }
  const downlodeResume=async()=>{
    
 const previewtag=PreviewrRef.current
 const canvas=await html2canvas(previewtag)
 canvas.toBlob(async(blob)=>{
   const formData = new FormData();

  formData.append("file", blob);
  formData.append("upload_preset", 'images');

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/ikf50cxa/image/upload",
    {
      method: "POST",
      body: formData
    }
  );
  const res = await response.json()
  console.log(res);
  const shortUrl=res.secure_url

  gernaratePDF(shortUrl)

 }) 
 }

 const gernaratePDF= async (imageUrl)=>{
 const today=new Date()
 const timestamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
 console.log(timestamp);
 const pdf=new jspdf()
 const imgwidth=pdf.internal.pageSize.getWidth()
 const imghegit=pdf.internal.pageSize.getHeight()

pdf.addImage(imageUrl,"PNG",0,0,imgwidth,imghegit)
 
const downloadDetils={resumeId:id,resumeimage:imageUrl,timestamp}
 const result= await downloadResumeAPI(downloadDetils)
 console.log(result);
 if(result.status==201){
     pdf.save(`${resumeDetails.name}-resume.pdf`)
      

 }




  }
  return (
    <>
       <div className="d-flex align-items-center justify-content-center flex-column m-5">
           <div className="d-flex align-items-center justify-content-center">
            <button onClick={downlodeResume} className="btn  fs-1 text-danger "><FaFileDownload/></button>
            <div className="mx-3 ">
              <Edit resumeData={resumeDetails} setResumeData={setResumeDetail}/>
            </div>
             <Link to={'/history'} className="btn  fs-1 text-success mx-3 "><FaHistory /></Link>
             <Link to={'/view/8'}  className="btn fs-1 text-primary mx-3"><FaBackward /></Link>



             
           </div>
          <div ref={PreviewrRef} className="my-5">
            <Preview resumeData={resumeDetails}/>
          </div>


      </div>
    
    
    </>
    
     
  )
}

export default ViewResume