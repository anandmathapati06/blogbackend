import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
async function Dbconnection()
{
    const connection = await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connected")
        })

    
}

export default Dbconnection