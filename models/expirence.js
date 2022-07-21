const mongoose=require("mongoose")

const expirenceModel=new mongoose.Schema({

    job_title:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    company_link:{
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
    job_discription:{
        type:String,
        required:true
    },
    skills_gain:{
        type:Array,
        required:true,
        default:[]
    },
    cover_letter:{
        type:String,
    }
});


module.exports=mongoose.model("expirence",expirenceModel);