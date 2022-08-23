import React, { useState } from 'react';
import { renderImage, renderText } from '../index';
import '../index.css';

let stateTop = '';
let stateBottom = '';

export default function Form() {

    // To Export a string used to change top text
    function changeTop(event) {
        stateTop = event.target.value;
        // stateTop = document.forms["my-form"]['top-text'].value;
        renderText();
    }

    // To Export a string used to change bottom text
    function changeBottom(event) {
        stateBottom = event.target.value;
        // stateBottom = document.forms["my-form"]['bottom-text'].value;
        renderText();
    }

    return (
        <form className='my-form' name='my-form'>
            <input id='top-text' type="text" placeholder="Upper text"
                name='top-text' onChange={changeTop}
            />
            <input id='bottom-text' type="text" placeholder="Lower text"
                name='bottom-text' onChange={changeBottom}
            />
            <br />
            <button type="button" onClick={renderImage}>Get a new meme</button>
        </form>
    )
}

export { stateTop, stateBottom };


