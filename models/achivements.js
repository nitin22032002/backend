const mongoose=require("mongoose")

const achivementsModel=new mongoose.Schema({

    discription:{
        type:String,
        required:true
    },
    platform_link:{
        type:String,
    }
    
});


module.exports=mongoose.model("achivements",achivementsModel);