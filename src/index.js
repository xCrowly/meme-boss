import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form';
import MemeImage, { getRandomMeme } from './components/memeImage';
import NavBar from './components/nav';
import './index.css';

const nav = ReactDOM.createRoot(document.getElementById('navbar'));
nav.render(
  <NavBar />
)

const myForm = ReactDOM.createRoot(document.getElementById('my-form'));
myForm.render(
  <Form />
)

const memeImage = ReactDOM.createRoot(document.getElementById('meme-image'));
memeImage.render(<MemeImage />)

//Function used to re render the new image 
function renderImage() {
  getRandomMeme()
  memeImage.render(<MemeImage />)
}

//Function used to re render the new text 
function renderText() {
  memeImage.render(<MemeImage />)
}

// Exporting these fun to be able to rerender the scene on changes
export { renderImage, renderText };

