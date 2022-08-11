import React from 'react';
import memesData from '../assets/memes/response.json';
import '../index.css';
import { stateBottom, stateTop } from './form';

let memeUrl;
let memeTitle;

function getRandomMeme() {
    let randomNumber = Math.floor(Math.random() * 100);
    memeUrl = memesData.data.memes[randomNumber].url;
    memeTitle = memesData.data.memes[randomNumber].name;
    return;
}

// to initialize a meme once the website started
getRandomMeme()

export default function MemeImage() {
    return (
        <div className='meme-container'>
            <p className='meme-title'>{memeTitle}</p>
            <div className='meme-image-container'>
                {stateTop == '' ? stateTop : <p className='meme-top'>{stateTop}</p>}
                <img src={memeUrl} className='meme-image1' alt='meme image' />
                {stateBottom == '' ? stateBottom : <p className='meme-bottom'>{stateBottom}</p>}
            </div>
        </div>
    )
}

export { getRandomMeme };

