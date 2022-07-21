const mongoose=require("mongoose")

const adminModel=new mongoose.Schema({

    admin_name:{
        type:String,
        required:true
    },
    admin_emailid:{
        type:String,
        required:true
    },
    admin_contactnumber:{
        type:String,
        required:true
    },
    admin_resume:{
        type:String,
        required:true,
    },
    admin_address:{
        type:String,
        required:true,
    },
    admin_linkdin:{
        type:String,
        required:true
    },
    password:String,
    token:String
    
});


module.exports=mongoose.model("admin",adminModel);