const express=require("express")
const app=express()
const connectDb=require("./config/database")
const dotenv=require("dotenv")
const cors=require("cors")
const adminRoutes=require("./routes/admin")
const publicRoutes=require("./routes/public")

// set Port

const PORT=(process.env.PORT || "4000")

// Config Env File

dotenv.config({path:"./config/config.env"});

// Config Cors

app.use(cors())

// Config json fron url

app.use(express.json())


// Connect With Database

connectDb()

// Config Routes

app.use("/admin",adminRoutes);

app.use("/public",publicRoutes);


// Control 404 Error

app.use("/*",(req,res,next)=>{
    return res.redirect(process.env.FRONTEND_URL)
})

// Listen Server

app.listen(PORT,()=>{
    console.log(`Server Listen On Port ${PORT} URL : http://localhost:${PORT}`)
})
