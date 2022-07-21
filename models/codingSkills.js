const mongoose=require("mongoose")

const codingSkillsModel=new mongoose.Schema({

    platform_name:{
        type:String,
        required:true
    },
    platform_link:{
        type:String,
        required:true
    },
    platform_icon_url:{
        type:String,
        required:true
    }
    
});


module.exports=mongoose.model("codingSkills",codingSkillsModel);