require('dotenv').config();
const express = require('express');
const { connect } = require('http2');
const connectDB = require('./database/connect');
const app = express();
const port = process.env.PORT|| 8000;


connectDB()

app.listen(port, ()=>{
  console.log(`application is running on server ${port}`)
})

