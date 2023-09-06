import React from 'react';
import Game from './Game';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function GameList({ games, onDelete, onEdit }) {
    return (
        <table id="games"> {/* Update the ID to match your topic */}
            <caption>Add and Edit Games</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                    <th>Completion Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) => 
                    <Game 
                        game={game}  // Update the prop name to match your Game component.
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GameList;
