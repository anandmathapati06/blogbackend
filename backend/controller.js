import mongoose from "mongoose";
import { blogModel } from "./Models.js";
import { json } from "express";
import uuid from 'react-uuid'
function open(req,res){
    
    res.send("going in");

}

async function createBlog(req,res){
    // console.log(req.params.id)
    const {name,content,title,category,img,mail} = req.body
    

    const search = blogModel.find({name})
    try {
     if(name !="" || content != ""){
        

        
        const  result = await blogModel.create({
            id : uuid(),
            name : name,
            title: title,
            category : category,
            content : content,
            img : img,
            mail : mail,
            createdDate : new Date()
        })

        res.status(200).json({
            msg : "Data saved sucessfully"
        })
    }else{
        res.status(404).json({

            message : "not sending",
            status : "false"
        }
        )
    }
} catch (error) {
    console.log("error",error );
    
}
}

async function fetchBlogs(req,res){

    try {
        
        const result = await blogModel.find()
    
        res.send(result)
    } catch (error) {
      console.log("Error while fetching data",error);
        
    }
}

async function byId(req,res){
    try {
        
        const id = req.params.id
        const result = await blogModel.find({id})
        res.send(result)
    } catch (error) {
        console.log("error while getting details of blog",erroe);
        
    }
}   
export { open  , createBlog ,fetchBlogs ,byId}