// Controllers for the Game Collection

import 'dotenv/config';
import express from 'express';
import * as games from './games-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/games', (req, res) => {
    games.createGame(
        req.body.title,
        req.body.year,
        req.body.genre,
        req.body.publisher,
        req.body.completionDate
    )
    .then(game => {
        res.status(201).json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Error creating game. Please try again' });
    });
});

// RETRIEVE controller ****************************************************
app.get('/games', (req, res) => {
    games.retrieveGames()
        .then(game => {
            if (game !== null) {
                res.json(game);
            } else {
                res.status(404).json({ Error: 'Games not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Please try again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/games/:_id', (req, res) => {
    games.retrieveGameByID(req.params._id)
    .then(game => {
        if (game !== null) {
            res.json(game);
        } else {
            res.status(404).json({ Error: 'Games not found.' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not retrieve details. An error occured.' });
    });
});


// UPDATE controller ************************************
app.put('/games/:_id', (req, res) => {
    games.updateGame(
        req.params._id,
        req.body.title,
        req.body.year,
        req.body.genre,
        req.body.publisher,
        req.body.completionDate
    )
    .then(game => {
        res.json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Update could not be processed, try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/games/:_id', (req, res) => {
    games.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Game deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Game was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'An error occured when attempting to delete game.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});