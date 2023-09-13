import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const salt = 10;
const app = express();
app.use(cors({ 
    origin : [ "http://localhost:3000"],
    credentials:true,
}));
app.use(express.json());
app.use(cookieParser());

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'knowledge',
})

app.post('/Register', (req, res) => {
    let sql2 = "INSERT INTO `users` (email, password, name) VALUES (?, ?, ?)";
    var values = [
        req.body.email,
        req.body.password,
        req.body.name
    ];
    console.log(values)
    db.query(sql2, values, (err,result) => {
        if (err) {
            return res.status(500).json({ Error: "Inserting Data errors" });
        }
        return res.status(200).json({ Status: "User Registered" });
    })
    
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})