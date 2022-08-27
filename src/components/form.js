import React, { useState } from 'react';
import { renderImage, renderText } from '../index';
import '../index.css';

let states = {
    'top-text': '',
    'bottom-text': ''
}

export default function Form() {

    // To Export a string used to change top text
    function change(Event) {
        states[Event.target.name] = Event.target.value;
        renderText();
    }

    return (
        <form className='my-form' name='my-form'>
            <input id='top-text' type="text" placeholder="Upper text"
                name='top-text' onChange={change}
            />
            <input id='bottom-text' type="text" placeholder="Lower text"
                name='bottom-text' onChange={change}
            />
            <br />
            <button type="button" onClick={renderImage}>Get a new meme</button>
        </form>
    )
}

export { states };


