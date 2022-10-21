const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://vicky1:XuP4pp9oXvMTPQGB@cluster0.waytbzt.mongodb.net/?retryWrites=true&w=majority'

const router = require('./routers')

const app = express()
app.use(express.json())
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected');
})

app.use('/',router)

app.listen(9000,()=>{
    console.log('server');
})