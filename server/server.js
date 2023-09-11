import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const salt = 10;
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'knowledge'
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?);";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"});
        const values = [
            req.body.name,
            req.body.email,
            hash
        ] 
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Inserting Data errors"});
            return res.json({Status: "User Registered"});
        })
    })
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})