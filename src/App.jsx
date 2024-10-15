import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Common/Footer'
import Navbar from './Components/Common/Navbar'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
