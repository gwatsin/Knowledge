import express from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import pkg from 'jsonwebtoken';
const { verify } = pkg;

const salt = 10;
const app = express();
app.use(cors({ 
    origin : ["http://localhost:3000"],
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

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Status: "Unauthorized"});
    } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) {
            return res.json({Status: "Incorrect token!"});
        } else {
            req.name = decoded.name;
            next();
        }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success", name: req.name});
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
            return res.json({Error: "User does not exist"});
        }    
    })
})

app.get('/Logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})