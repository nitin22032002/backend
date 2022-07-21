const mongoose=require("mongoose")

const connectDb=()=>{
    mongoose.connect(process.env.DB_STRING).then((res)=>{
        console.log(`Connect With Database ${res.connections[0].host}`);
    })
}

module.exports=connectDb;