import React from 'react';
import { NavLink } from 'react-router-dom';
import {PiHouseSimpleLight, PiBooksFill, PiGameControllerFill, PiPresentationChartFill} from 'react-icons/pi'

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav className="App-nav">
      <NavLink to="/"><i><PiHouseSimpleLight/></i>Home</NavLink>
      <NavLink to="/TopicsPage"><i><PiBooksFill/></i>Topics</NavLink>
      <NavLink to="/Games"><i><PiGameControllerFill/></i>Game Collection</NavLink>
      <NavLink to="/GalleryPage"><i><PiPresentationChartFill/></i>Gallery</NavLink>
    </nav>
  );
}

export default Nav;
