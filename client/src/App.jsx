
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Report from './Components/Report'
import Addmarks from './Components/Addmarks'
import Marksheet from './Components/Marksheet'
import Update from './Components/Update'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/add" element={<Addmarks/>}/>
        <Route path="/marksheet" element={<Marksheet/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
