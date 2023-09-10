const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const pool=require("./dbconfig")
const {v4:uuidv4}=require("uuid")

const { JWT_SECRET }=process.env

const findUser=async({id,email})=>{

        const res = await pool.query("SELECT * FROM users WHERE userid=$1 OR WHERE email=$2",[id,email])
        return res.rows
}

const authenticate=async({id,email,password})=>{
    const user = findUser({email})
}

const create =async({name,email,password})=>{

}

module.exports={
    findUser,
    authenticate,
    create
}