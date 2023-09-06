import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { PiTrashBold, PiNotePencilLight} from 'react-icons/pi';

function Game({ game, onEdit, onDelete }) {
    return (
        <tr>
            <td>{game.title}</td>
            <td>{game.year}</td>
            <td>{game.genre}</td>
            <td>{game.publisher}</td>
            <td>{game.completionDate}</td>
            <td><PiTrashBold onClick={() => onDelete(game._id)} /></td>
            <td><PiNotePencilLight onClick={() => onEdit(game)} /></td>
        </tr>
    );
}

export default Game;
