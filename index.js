import express from 'express'
import Dbconnection from './Dbconnection.js'
import dotenv from 'dotenv'
import { open ,createBlog ,fetchBlogs ,byId} from './controller.js'
import cors from 'cors'


const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json({limit : '5mb'}))
dotenv.config()



app.get("/",open)
app.post("/posts",createBlog)
app.get("/blogs",fetchBlogs)
app.get("/blogs/:id",byId)


app.listen(process.env.PORT || 9000,async ()=>{
    console.log("listining...");
    await Dbconnection();
    
})