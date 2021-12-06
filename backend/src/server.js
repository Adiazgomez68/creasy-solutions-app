const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {graphqlHTTP}= require('express-graphql');

app.listen(8080,()=> console.log('Escuchando en el puerto 8080'));