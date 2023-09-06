// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Nav';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage'; // Import the GamesPage component
import AddGamePageForm from './pages/AddGamePageForm'; // Import the AddGamePageForm component
import EditGamePageForm from './pages/EditGamePageForm'; // Import the EditGamePageForm component
import GalleryPage from './pages/GalleryPage'; 

function App() {
  const [game, setGameToEdit] = useState([]); 

  return (
    <div className="App">
      <BrowserRouter>
        <header>
        <h1>
            Pramit Patel
            <i><img src="android-chrome-192x192.png" alt="Favicon" class="favicon"></img></i>
        </h1>
        </header>

        <Navigation/>

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/TopicsPage" element={<TopicsPage />} />
              <Route path="/games" element={<GamePage setGame={setGameToEdit} />} /> {/* Use the GamesPage component */}
              <Route path="/create" element={<AddGamePageForm />} /> {/* Use the AddGamePageForm component */}
              <Route path="/update" element={<EditGamePageForm gameToEdit={game} />} /> {/* Use the EditGamePageForm component */}
              <Route path="/GalleryPage" element={<GalleryPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&#169; 2023 Pramit Patel</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;