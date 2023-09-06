// Models for the Movie Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Unable to connect.' });
    } else  {
        console.log('Successfully connected to mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	title:           { type: String, required: true },
	year:            { type: Number, required: true },
	genre:           { type: String, required: true },
    publisher:       { type: String, required: true },
    completionDate:  { type: Date,   required: true }
});

// Compile the model from the schema 
// by defining the collection name "movies".
const games = mongoose.model('Game', gameSchema);



// CREATE model *****************************************
const createGame = async (title, year, genre, publisher, completionDate) => {
    const game = new games({ 
        title: title, 
        year: year, 
        genre: genre,
        publisher: publisher,
        completionDate: completionDate 
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveGames = async () => { // Change 'retrieveMovies' to 'retrieveGames'
    const query = games.find(); // Change 'movies' to 'Game'
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = games.findById({_id: _id}); // No need for an object here
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await games.deleteOne({_id: _id});
    return result.deletedCount;
};



// UPDATE model *****************************************************
const updateGame = async (_id, title, year, genre, publisher, completionDate) => {
    const result = await games.replaceOne({ _id: _id }, {
        title: title,
        year: year,
        genre: genre,
        publisher: publisher,
        completionDate: completionDate 
    });
    return { 
        _id: _id, 
        title: title,
        year: year,
        genre: genre,
        publisher: publisher,
        completionDate: completionDate 
    };
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGames, retrieveGameByID, updateGame, deleteGameById };