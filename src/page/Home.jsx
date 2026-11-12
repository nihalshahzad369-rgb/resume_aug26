import { Link } from "react-router-dom"

 
 
 
 function Home() {
  return (
<>
 <section id='part1'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 box border p-5 my-5 rounded" style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
          <h1 className='mt-5 text-center ' style={{fontFamily:'Dancing Script'}}>Desined to get <br /> hired </h1>
          <h4 className="text-center" style={{fontFamily:'Story Script'}} >Your skills, your story your next <br /> job _all in one </h4>
          <Link to={'/steps'} className="btn btn-dark text-light mt-5 d-flex justify-content-center align-items-center">MAKE YOUR RESUME</Link>
          

        </div>
        <div className="col-md-4"></div>
      </div>

    </section>

    <section className='p-5'>
      <h1 className='text-center' style={{fontFamily:'Dancing Script'}}>Tools</h1>
      <div className='row align-items-center'> 
      <div className="col-md-6">
        <h4>Resume</h4>
        <p>Create unlimted new resumes and esly edit them afterwrd</p>
        <h4>Cover Letters</h4>
        <p>Easily write professitional cover Letters.</p>
        <h4>Job</h4>
        <p>Automaticaly recived new and relvend job positions </p>
        <h4>Application</h4>
        <p>Efforelessly manage and track your job Application in an Organized Manner</p>

      </div>
      <div className="col-md-6 p-5">
        <img src="https://thumbs.dreamstime.com/b/resume-isolated-white-background-356169075.jpg" alt="" className="img-fluid" />

      </div>
      </div>

    </section>

    <section id="part2">

    </section>

</>
    
     

    
  )
}

export default Home