const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const url = 'mongodb+srv://vicky1:U4dYHbyOPyCIx9k3@cluster0.waytbzt.mongodb.net/?retryWrites=true&w=majority'

const router = require('./routers')
var PORT = process.env.PORT || 8000
const app = express()
app.use(express.json())
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected',process.env.PORT);
})

app.use('/',router)

app.listen(PORT,()=>{
    console.log('server');
})