const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const pool=require("./dbconfig")
const {v4:uuidv4}=require("uuid")

const { JWT_SECRET }=process.env

const findUser=async({id,email})=>{

}

const authenticate=async({id,email,password})=>{

}

const create =async({name,email,password})=>{

}

module.exports={
    findUser,
    authenticate,
    create
}