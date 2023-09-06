import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const [name,setname]=useState(null);
  const [marks,setMarks]=useState(null);
  const Navigate = useNavigate();
  const {id}=useParams()


    useEffect(()=>{
        axios.get(`http://localhost:3001/getstudent/${id}`,{name,marks})
    .then((result)=>{
      console.log(result)
      setMarks(result.data.marks)
      setname(result.data.name)
    })
    .catch((err)=>{console.log(err)})
    },[])

  const updater=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/updatestudent/${id}`,{name,marks})
    .then((result)=>{
      console.log(result)
      Navigate('/marksheet')
    })
    .catch((err)=>{console.log(err)})
  }

  return (
    <div><Header/>
      <div className="items-center flex flex-col p-5 justify-between">
        <form action="" onSubmit={updater} className="items-center flex flex-col p-5 justify-between">
        <label htmlFor="Name" className="text-6xl mb-6  text-teal-600 pt-20">Name of the Student</label>
        <input type="text" className="mb-6 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setname(e.target.value)} value={name}/>
        <label htmlFor="Name" className="text-6xl mb-6 text-teal-600 " >Marks Obtained</label>
        <input type="number" className="shadow appearance-none border rounded w-1/2 py-2 px-3 mb-6  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setMarks(e.target.value)} value={marks} />
        <button type="submit" className=" rounded-full bg-red-600 text-2xl text-white px-5 py-2 w-1/6">Update </button>
      </form>
      </div>
    </div>
  )
}

export default Update