const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('./models/Students')




const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")




app.get("/marksheet",(req,res)=>{
    StudentModel.find({})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
app.delete("/deletestudent/:id",(req,res)=>{
    const id=req.params.id
    StudentModel.findByIdAndDelete({_id:id}).then(resp=>res.json(resp)).
    catch(err=>res.json(err))
})
app.get("/getStudent/:id",(req,res)=>{
    const id=req.params.id
    StudentModel.findById({_id:id})
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
})

app.put("/updatestudent/:id",(req,res)=>{
    const id=req.params.id
    StudentModel.findByIdAndUpdate({_id:id},{name:req.body.name,marks:req.body.marks})
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
})

app.post("/add",(req,res)=>{
        StudentModel.create(req.body).then(
            (students)=>{
               res.json(students)
            }
        ).catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("server is running")
})