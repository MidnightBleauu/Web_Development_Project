import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {PiGameControllerThin, PiPlusBold} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import GameList from '../components/GameList'; // Make sure you have a GameList component

function GamesPage({ setGame }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [games, setGames] = useState([]);

  // RETRIEVE the entire list of games
  const loadGames = async () => {
    const response = await fetch('/games');
    const games = await response.json();
    setGames(games);
  }

  // UPDATE a single game
  const onEditGame = async game => {
    setGame(game);
    redirect('/update');
  }

  // DELETE a single game
  const onDeleteGame = async _id => {
    const response = await fetch(`/games/${_id}`, { method: 'DELETE' });
    if (response.status === 200) {
      const getResponse = await fetch('/games');
      const games = await getResponse.json();
      setGames(games);
    } else {
      console.error(`Error deleting game: ${_id}, status code: ${response.status}`);
    }
  }

  // LOAD all the games
  useEffect(() => {
    loadGames();
  }, []);

  // DISPLAY the games
  return (
    <div>
      <h2> <i><PiGameControllerThin /></i> List of Games <i><PiGameControllerThin /></i> </h2>
      <p>A collection of recent games I've completed.
        <Link to="/create">
          <button id="addItemButton">
            <PiPlusBold/> 
          </button>
        </Link>
      </p>
      
      <GameList
        games={games}
        onEdit={onEditGame}
        onDelete={onDeleteGame}
        
      />
    
    </div>
  );
}

export default GamesPage;