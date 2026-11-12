
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componds/Footer'
import Header from './componds/Header'
import Home from './page/Home'
import Steps from './page/Steps'
import Userfrom from './page/Userfrom'
import ViewResume from './page/ViewResume'
import History from './page/History'
import Pnf from './page/Pnf'
 
function App() {
 
  return (
    <>
    <Header/>
     
     
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/steps' element={<Steps/>} />
     <Route path='/userform' element={<Userfrom/>} />
       <Route path='/history' element={<History/>} />
       <Route path='/view/:id' element={<ViewResume />} />
      <Route path='/*' element={<Pnf/>} />
    </Routes>



    <Footer/>
       
    </>
  )
}

export default App
