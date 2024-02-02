import express from 'express'
import mongoose from 'mongoose'
import MovieModel from './models/Movie'
import { MONGO_DB_URL } from './api_links'
import cors from 'cors';

const app = express()
const PORT = 8085;
const CircularJSON = require('circular-json');

// Implemented cors to resolve cors issue between client and server
// Included express json to use to follow Json standards
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Created Movies API and considered two response codes
app.post("/api/movies", async (req, res) => {

    // Used circular Json considering the types
    const data = JSON.parse(CircularJSON.stringify(req.body));

    //Read movie data from request json through results
    try {
        await MovieModel.insertMany(data.results);
        res.status(201).json("Movie data inserted successfully");
    }
    catch (error) {
        res.status(500).json({ error: "Error saving user data" })
    }
});

//Connecting to Local MongoDb
mongoose.connect(MONGO_DB_URL).then(() => {
    app.listen(PORT);
});
mongoose.connection.on('error', (error: Error) => console.log(error));