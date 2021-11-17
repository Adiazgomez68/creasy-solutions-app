const express=require('express');
const app=express();
const cors=require('cors');

const routerUsers=require('./routes/users/route.js');

require('dotenv').config()
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use('/',routerUsers);

app.listen(process.env.PORT,console.log(`Listening on port ${process.env.PORT}`));