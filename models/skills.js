const mongoose=require("mongoose")

const skillsModel=new mongoose.Schema({

    skill_name:{
        type:String,
        required:true
    },
    skill_type:{
        type:Number,
        required:true
    },
    skill_level:{
        type:Number,
        required:true,
        default:1
    },
    skill_cerificate:{
        type:String
    },
    skills_icon:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model("skills",skillsModel);