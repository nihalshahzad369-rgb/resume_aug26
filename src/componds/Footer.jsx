import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { MdAttachEmail } from 'react-icons/md';

 
function Footer() {
  return (
    <>
     <div style={{height:'400px',backgroundColor:'black'}} className='d-flex justify-content-center align-items-center flex-column text-light'>
         <h1>Contact US</h1>
         <h5 className='mt-3'><MdAttachEmail className="mx-2 fs-2 text-light" /> resumebuilder@gamil.com</h5>
         <h5> <FaPhoneAlt/> 879654122</h5>
         <h4>Connect With Us</h4>
         <div className='d-flex justify-content-center align-items-center flex-row'>
              <FaWhatsapp className="mx-3 fs-3"/>
              <FaFacebook className="mx-3 fs-3" />
              <FaInstagram  className="mx-3 fs-3" />
         </div>
         <p>Us Designed & Built with React❤️</p>

     </div>

    </>
  )
}

export default Footer