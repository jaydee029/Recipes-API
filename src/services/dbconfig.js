const path=require("path");
require("dotenv").config({path:path.join(__dirname,"../../.env")});
const { Pool } = require("pg")

const {DATABASE_PORT}=process.env
const {PASSWD}=process.env
const pool =new Pool({
    host:"localhost",
    user:"dhruv",
    password:PASSWD,
    database:"api",
    port:DATABASE_PORT,
})

module.exports=pool;