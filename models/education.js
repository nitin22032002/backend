const mongoose=require("mongoose")

const educationModel=new mongoose.Schema({

    college_name:{
        type:String,
        required:true
    },
    course_type:{
        type:String,
        required:true
    },
    course_duration:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
    },
    active:{
        type:Boolean,
        required:true,
        default:false
    },
    course:{
        type:String,
        required:true,
    },
    grade:{
        type:String,
        require:true
    }
});


module.exports=mongoose.model("education",educationModel);