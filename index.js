import express from 'express'
import Dbconnection from './Dbconnection.js'
import dotenv from 'dotenv'
import { open ,createBlog ,fetchBlogs ,byId} from './controller.js'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json({limit : '5mb'}))
dotenv.config()

Dbconnection()
// app.use(express.static("./frontend/blogsite/dist"))

// app.get("*", (req,res)=>{
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
// })

app.get("/",open)
app.post("/posts",createBlog)
app.get("/blogs",fetchBlogs)
app.get("/blogs/:id",byId)


app.listen(8000,()=>{
    console.log("listining...");
    
})