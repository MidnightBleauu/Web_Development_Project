import React from 'react';
import { FaReact, FaNode, FaHtml5, FaGit } from 'react-icons/fa';

function HomePage() {
  return (
    <div>
      <h2>Welcome to my Web Development Portfolio</h2>
      <article>
        <h3>My Career Goals</h3>
        <p>
        As a passionate computer science student and experienced full-time Technical Support professional, I am dedicated to transitioning into the field of software development. 
        My primary objective is to evolve into a skilled software engineer capable of creating innovative and creative solutions that enhance people's quality of life through technology.
        </p>
        <ul>
          <li>
          <strong>React:</strong> I used React to build interactive user interfaces and manage state efficiently.
          </li>
          <li>
         <strong>Node.js:</strong> I leveraged Node.js to develop server-side applications and utilize its extensive package ecosystem for enhanced functionality.
          </li>
          <li>
            <strong>Express:</strong>  used Express.js to create robust APIs that handle HTTP requests and responses, ensuring a smooth client-server interaction.
          </li>
          <li>
            <strong>HTML & CSS:</strong> I crafted a well-structured HTML and styled it with CSS to create visually appealing and responsive web designs.
          </li>
          <li>
            <strong>RESTful APIs:</strong> I designed and implemented RESTful APIs to enable seamless communication between front-end and back-end components.
          </li>
        </ul>
      </article>
    <FaHtml5>  </FaHtml5>  <FaNode>  </FaNode>  <FaReact>  </FaReact> <FaGit>   </FaGit>
      {/* You can add embellishments, icons, and optimized images here */}
    </div>
  );
}

export default HomePage;

