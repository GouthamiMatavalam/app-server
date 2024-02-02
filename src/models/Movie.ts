import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Created schema related to the data expected from API.
const MovieSchema = new Schema({
    adult: Boolean,
    backdrop_path: String,
    genre_ids: Array,
    id: Number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: mongoose.Types.Decimal128,
    poster_path: String,
    release_date: String,
    title: String,
    video: String,
    vote_average: mongoose.Types.Decimal128,
    vote_count: mongoose.Types.Decimal128,
});

const MovieModel = mongoose.model('Movie', MovieSchema);

export default MovieModel;