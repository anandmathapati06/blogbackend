import mongoose from "mongoose";
import dotenv from 'dotenv'


async function Dbconnection(){
    
    dotenv.config()
    const connection = await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connected")
        }).catch(()=>{
            console.log("Error while connecting to mongo DB");
            
        })

    
}

export default Dbconnection