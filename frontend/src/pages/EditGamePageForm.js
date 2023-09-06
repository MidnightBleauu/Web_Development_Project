import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGamePageForm = ({ gameToEdit }) => {
  const [title, setTitle] = useState(gameToEdit.title);
  const [year, setYear] = useState(gameToEdit.year);
  const [genre, setGenre] = useState(gameToEdit.genre);
  const [publisher, setPublisher] = useState(gameToEdit.publisher);
  const [completionDate, setCompletionDate] = useState(gameToEdit.completionDate.slice(0,10));

  const redirect = useNavigate();

  const editGame = async () => {
      const response = await fetch(`/games/${gameToEdit._id}`, {
          method: 'PUT',
          body: JSON.stringify({
              title: title,
              year: year,
              genre: genre,
              publisher: publisher,
              completionDate: completionDate,
          }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
          alert('Game details updated successfully.');
          redirect('/games'); // Redirect to the appropriate Game page
      } else {
          const errorMessage = await response.json();
          alert(`Error updating game details: ${response.status}. ${errorMessage.Error}`);
          redirect('/games'); // Redirect to the appropriate Game page

      }
  };


    return (
      <div>
        <article>
          <h2>Edit a game</h2>
          <p>Edit the details of the game.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Edit game details</legend>
              <label htmlFor="title">Game title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
              />
  
              <label htmlFor="year">Year released</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                id="year"
              />
  
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                id="genre"
              />
  
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                id="publisher"
              />
  
              <label htmlFor="completionDate">Completion Date</label>
              <input
                type="date"
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                id="completionDate"
              />
  
              <label htmlFor="submit">
                <button onClick={editGame} id="submit">
                  Save
                </button>{' '}
                Add updates to the collection!
              </label>
            </fieldset>
          </form>
        </article>
      </div>
    );
  };
  
  export default EditGamePageForm;