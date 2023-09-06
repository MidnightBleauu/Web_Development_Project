import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddGamePageForm = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [publisher, setPublisher] = useState('');
    const [completionDate, setCompletionDate] = useState('');

    const redirect = useNavigate();

    const addGame = async () => {
        const newGame = { title, year, genre, publisher, completionDate };
        const response = await fetch('/games', { // Update the API endpoint
            method: 'post',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`Game added successfully.`);
            redirect("/games"); // Redirect to the appropriate route
        } else {
            alert(`Failed to add game. Status: ${response.status}`);
            redirect("/games");
        }
    };

    return (
        <div>
            <article>
                <h2>Recent Game</h2>
                <h3>Log of recent games completed.</h3>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which game are you adding?</legend>
                        <label htmlFor="title">Game title</label>
                        <input
                            type="text"
                            placeholder="Title of the game"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            id="title" />

                        <label htmlFor="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of the game"
                            onChange={e => setYear(e.target.value)}
                            id="year" />

                        <label htmlFor="genre">Genre</label>
                        <input
                            type="text"
                            placeholder="Genre of the game"
                            value={genre}
                            onChange={e => setGenre(e.target.value)}
                            id="genre" />

                        <label htmlFor="publisher">Publisher</label>
                        <input
                            type="text"
                            placeholder="Publisher of the game"
                            value={publisher}
                            onChange={e => setPublisher(e.target.value)}
                            id="publisher" />

                        <label htmlFor="completionDate">Completion Date</label>
                        <input
                            type="date"
                            value={completionDate}
                            onChange={e => setCompletionDate(e.target.value)}
                            id="completionDate" />

                        <label htmlFor="submit">
                            <button
                                type="submit"
                                onClick={addGame}
                                id="submit"
                            >Add</button> Add the game to the collection.</label>
                    </fieldset>
                </form>
            </article>
        </div>
    );
}

export default AddGamePageForm;