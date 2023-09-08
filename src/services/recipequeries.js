const pool=require("./dbconfig")
const {v4:uuidv4}=require("uuid")


const getRecipes=async()=>{
    const res=await pool.query("SELECT * FROM recipes")
    return res.rows
}

const get =async(id)=>{
    const res= await pool.query("SELECT * FORM recipes WHERE id=$1",[id])
    return res.rows
}

const save =async(recipe)=>{
    const {name,ingredients,healthlabels,cooktimemin,userid}=recipe
    const res=await pool.query("INSERT INTO recipes VALUES($1,$2,$3,$4,$5) RETURNING *",[name,ingredients,healthlabels,cooktimemin,userid])
    return res.rows
}

const update=async(id,updated)=>{
    const {name,ingredients,healthlabels,cooktimeminemin}=updated
    const res= await pool.query("UPDATE recipes SET name=$1, ingredients=$2, healthlabels=$3,cooktimemin=$4 WHERE id=$5",[name,ingredients,healthlabels,cooktimeminemin])
    return res.rows
}

const remove=async(id)=>{
    const res=await pool.query("DELETE FROM recipes WHERE id=$1",[id])
}


module.exports={
    get,
    getRecipes,
    save,
    update,
    remove
}