import { Link } from 'react-router-dom'
import { IoDocumentTextOutline } from 'react-icons/io5' 


 function Steps() {
  return (
      <>
      <section className='container-fluid'>
        <h1 className='text-center mt-3'>Create a job Winning Resume In Minnutes</h1>
        <div className="row  justify-content-center align-items-center my-5">
          <div className="col-md-4 shadow p-5 text-center">
            <IoDocumentTextOutline  className='text-danger fs-1'/>
            <h3 className='mt-3'>Add your  information</h3>
            <p>Add pre-writter examples to each section</p>
            <h5>STEP1</h5>
           </div>
          <div className="col-md-1"></div>
          <div className='col-md-4 shadow p-5 text-center'>
             <IoDocumentTextOutline  className='text-danger fs-1'/>
            <h3 className='mt-3'>Downloded Resume</h3>
            <p>Dowloded and start applying</p>
            <h5>STEP2</h5>

          </div>

        </div>
        <div className='text-center my-3'>
          <Link to={'/userform'} className="btn btn-dark"> Lets start</Link>

        </div>
        

      </section>
      
      
      </>
  )
}

export default Steps