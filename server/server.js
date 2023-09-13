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
    methods: ["POST", "GET"],
    credentials: true,
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
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error hashing password"});
        const values = [
            req.body.email,
            hash,
            req.body.name
        ];
        console.log(values)
        db.query(sql2, values, (err,result) => {
            if (err) {
                return res.status(500).json({ Error: "Inserting Data errors" });
            }
            return res.status(200).json({ Status: "Success" });
        })
    })
})

app.post('/login', (req, res) =>{
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login error"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) {
                    return res.json({Error: "Password compare error"});
                }
                if(response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"});
                } else {
                    return res.json({Error: "Password incorrect"});
                }
            })
        } else {
            return res.json({Erroe: "User does not exist"});
        }    
    })
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})