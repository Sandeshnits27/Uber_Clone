const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const connectTodb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain.routes.js')

dotenv.config()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

connectTodb()
app.get('/', (req, res) =>{
    res.send('Hello World!')
})
app.use('/users',userRoutes)
app.use('/captains', captainRoutes)
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
module.exports =app;