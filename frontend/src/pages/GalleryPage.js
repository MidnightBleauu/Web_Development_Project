import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
    const images = [
        {   // Image 1 - SIGN UP PAGE 
            original: 'images/compress_personal-project-signup-page.jpg',
            thumbnail: 'images/compress_personal-project-signup-page.jpg',
            description: "Created a personal HTML, CSS, JS project that creates a user-friendly signup page design for a fake coffee site",
            originalHeight: '450px',
        },
        
        {   // Image 2  - PYTHON ALGORITHM 
            original: 'images/Python-project-compare-algos.png',
            thumbnail: 'images/Python-project-compare-algos.png',
            description: "My programming project that compares sorting algorithms.",
            originalHeight: '450px',
        },
        {   // Image 3 - ETCHA SKETCH 
            original: 'images/html-personal-project-etchasketch.png',
            thumbnail: 'images/html-personal-project-etchasketch.png',
            description: "A personal HTML, JS, CSS project with an interactive etcha-sketch grid with color options",
            originalHeight: '450px',
        },
        {   // Image 4 - homepage-react
            original: 'images/react-homepage.png',
            thumbnail: 'images/react-homepage.png',
            description: "The homepage I've created using the React framework.",
            originalHeight: '450px',
        },
        {   // Image 5 - Product Page Example
            original: 'images/store_product.png',
            thumbnail: 'images/store_product.png',
            description: "A fake store page I created with HTML, CSS, JS, and Node.JS. ",
            originalHeight: '450px',
        },
        {   // Image 6 - Poetry 
            original: 'images/My-Poem-published-literary-magazine_1_.jpg',
            thumbnail: 'images/My-Poem-published-literary-magazine_1_.jpg',
            description: "My poem 'Heritage', that was published in the communit college literary magazine.",
            originalHeight: '450px',
        },
        {   // Image 7  - Nodemailer intergration
            original: 'images/node_mailer_connections.png',
            thumbnail: 'images/node_mailer_connections.png',
            description: "My integration with nodemailer using Node.JS, NPM and express to process the store page. ",
            originalHeight: '450px',
        },
        {   // Image 8 - Frontend Code for CRUD of GamePage
            original: 'images/frontend_page_CRUD.png',
            thumbnail: 'images/frontend_page_CRUD.png',
            description: 'Frontend page that allows for CRUD operations to be perfomed with data creation.',
            originalHeight: '450px',
        },
        {   // Image 9 - Data Collection
            original: 'images/data_collection_mongodb.png',
            thumbnail: 'images/data_collection_mongodb.png',
            description: "A functional collection page that performs CRUD with MongoDB.",
            originalHeight: '450px',
        },
        {   // Image 10 - Astrophotography
            original: 'images/astrophotography-2.jpg',
            thumbnail: 'images/astrophotography-2.jpg',
            description: "Astrophotography of a shooting star streaking across the winter sky. ",
            originalHeight: '450px',
        },


        // Add more image objects as needed
    ];

    return (
        <div>
                    <h2>Gallery of Accomplishments</h2>
                    <article className="Gallery">
                        <ImageGallery items={images} />
                    </article>

            </div>
        );
    };

export default Gallery;