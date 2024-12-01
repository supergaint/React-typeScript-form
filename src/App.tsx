// import { useState } from 'react'
import Navbar from './Components/Navbar'
import ContactHeader from './Components/ContactHeader'
import ContactForm from './Components/ContactForm'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
  <div className="flex justify-center ">
    <Navbar />
  </div>
  <div>
    <ContactHeader />
  </div>
  <div>
    <ContactForm /> 
  </div>
  </>

  )
}

export default App
