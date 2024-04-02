var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {MangoClient} = require('mongodb');
const mongoUri = "mongodb://mongodb://127.0.0.1:27017/VirtualBio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"
client = new MangoClient(mongoUri);
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); 

  
        await client.connect();
        const database = client.db('VirtualBio');
        const collection = database.collection('credentials');
        const query = await collection.insertOne({
            name:'egefortest',
            surname:'egefortest2,'
