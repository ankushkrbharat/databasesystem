const mongoose=require("mongoose")

const StudentSchema = new mongoose.Schema({
    name:String,
    marks:Number
})

const StudentModel=mongoose.model("students",StudentSchema)
module.exports=StudentModel