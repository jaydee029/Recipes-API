const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const pool=require("./dbconfig")
const {v4:uuidv4}=require("uuid")

const { JWT_SECRET }=process.env

const findUser=async({id,email})=>{

        const res = await pool.query("SELECT * FROM users WHERE id=$1 OR email=$2",[id,email])
        if (res.rowCount!==0){
            return res.rows
        }
        return 
       
}

const authenticate=async({id,email,password})=>{
    const user = findUser({email})

    const token=jwt.sign({id:user.id},JWT_SECRET,{
        expiresIn: 24 * 60 * 60, 
    })
    return token
}

const create =async({name,email,password})=>{
    let id=uuidv4()
    let passwd=await bcrypt.hash(password,10)
    let createdat= new Date()
    let updatedat= new Date()
    console.log(createdat,updatedat)
    
    await pool.query("INSERT INTO users VALUES($1,$2,$3,$4,$5,$6)",[id,name,email,passwd,createdat,updatedat])
    const token = jwt.sign({ id: id }, JWT_SECRET, {
        expiresIn: 24 * 60 * 60, 
      });

      return {token}

    
}

module.exports={
    findUser,
    authenticate,
    create
}