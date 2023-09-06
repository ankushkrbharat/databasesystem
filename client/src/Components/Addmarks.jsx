import React, { useState } from 'react'
import Header from '../Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addmarks = () => {

  const [name,setname]=useState(null);
  const [marks,setMarks]=useState(null);
  const Navigate = useNavigate();

  const submitter=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/add",{name,marks})
    .then((result)=>{
      console.log(result)
      Navigate('/marksheet')
    })
    .catch((err)=>{console.log(err)})
  }

  return (
    <div><Header/>
      <div className="items-center flex flex-col p-5 justify-between">
        <form action="" onSubmit={submitter} className="items-center flex flex-col p-5 justify-between">
        <label htmlFor="Name" className="text-6xl mb-6  text-teal-600 pt-20">Name of the Student</label>
        <input type="text" className="mb-6 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setname(e.target.value)} />
        <label htmlFor="Name" className="text-6xl mb-6 text-teal-600 " >Marks Obtained</label>
        <input type="number" className="shadow appearance-none border rounded w-1/2 py-2 px-3 mb-6  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setMarks(e.target.value)} />
        <button type="submit" className=" rounded-full bg-red-600 text-2xl text-white px-5 py-2 w-1/6">Submit </button>
      </form>
      </div>
    </div>
  )
}

export default Addmarks