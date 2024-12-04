import mongoose from "mongoose";


const blogSchema = mongoose.Schema({
    id: String,
    name: String,
    content : String,
    title : String,
    category : String,
    img : String,
    mail : String,
    createdDate : Date
})

const blogModel = new mongoose.model("blogs",blogSchema)

export { blogModel }