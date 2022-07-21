const mongoose=require("mongoose")

const projectsModel=new mongoose.Schema({

    project_title:{
        type:String,
        required:true
    },
    project_link:{
        type:String,
    },
    directory_link:{
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
    project_image:{
        type:String,
        required:true,
    },
    project_discription:{
        type:String,
        required:true
    },
    skills_used:{
        type:Array,
        required:true,
        default:[]
    },
    project_type:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model("projects",projectsModel);