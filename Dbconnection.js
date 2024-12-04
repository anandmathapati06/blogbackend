import mongoose from "mongoose";




async function Dbconnection(){
    // const mongouri = process.env.MONGO_URI
    const connection = await mongoose.connect("mongodb+srv://Anand:Anand123@anand.f2ix40i.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Anand").then(()=>{
        console.log("DB connected")
        }).catch(()=>{
            console.log("Error while connecting to mongo DB");
            
        })

    
}

export default Dbconnection