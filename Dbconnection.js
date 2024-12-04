import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
async function Dbconnection()

{
    const mongouri = process.env.MONGO_URI
    const connection = await mongoose.connect(mongouri).then(()=>{
        console.log("DB connected")
        }).catch(()=>{
            console.log("Error while connecting to mongo DB");
            
        })

    
}

export default Dbconnection