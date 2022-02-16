import React from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Info({ setInfoToEdit }) {
    



    return(
        <div>
            <h1 className="title">Class Information</h1>

            <ul>
            <li><Link className="App-link" to="/">Home</Link></li>
                <li><Link className="App-link" to="/2v2">2v2 Arena</Link></li>
                <li><Link className="App-link" to="/3v3">3v3 Arena</Link></li>
                <li><Link className="App-link" to="/rbg">Rated Battlegrounds</Link></li>
                <li><Link className="App-link" to="/info">Class Information</Link></li>
            </ul>

            <p>This website will serve as a World of Warcraft Player vs. Player Leaderboard</p>
            <p>This page will display information for each of the World of Warcraft Player classes.</p>
            <p>A Wikipedia scraper will return information about the player class, and this test may be translated into a new language using a teammates translation microservice</p>
            <p>A function will be triggered upon clicking the "translate" button which will call my teammates translation service</p>



            <fieldset>
                <h2>Search by Class</h2>
                <div> This is the area in which an end user may search by specific player class and information will be displayed about that class using a Wikipedia scraper
                    <p>For instance when selecting "Mage" class:</p>
                    <p>A magician, also known as an enchanter/enchantress, mage, magic-user, sorcerer/sorceress, spell-caster, warlock, witch, or wizard, is someone who uses or practices magic derived from supernatural, occult, or arcane sources. 
                        Magicians are common figures in works of fantasy, such as fantasy literature and role-playing games, and enjoy a rich history in mythology, legends, fiction, and folklore.</p>
                    <p>Spanish translation: Un mago, también conocido como encantador/hechicera, mago, usuario de magia, hechicero/hechicera, lanzador de hechizos, brujo, bruja o mago, es alguien que usa o practica magia derivada de fuentes sobrenaturales, ocultas o arcanas. 
                        Los magos son figuras comunes en las obras de fantasía, como la literatura fantástica y los juegos de rol, y disfrutan de una rica historia en mitología, leyendas, ficción y folclore.</p>
                    
                </div>

                <label for="class">Choose a class: </label>

                <select name="class" id="class">
                <option value="Mage">Mage</option>
                <option value="Druid">Druid</option>
                <option value="Warrior">Warrior</option>
                <option value="Paladin">Paladin</option>
                <option value="Hunter">Hunter</option>
                <option value="Rogue">Rogue</option>
                <option value="Priest">Priest</option>
                <option value="Shaman">Shaman</option>
                <option value="Warlock">Warlock</option>
                <option value="Monk">Monk</option>
                <option value="Demon Hunter">Demon Hunter</option>
                <option value="Death Knight">Death Knight</option>
                </select>
                

                <button onClick={()=>{alert('Are you sure you want to search?'); }}>Search</button>
                <button onClick={()=>{alert('Are you sure you want to translate?'); }}>Translate</button>
                <button onClick={()=>{alert('Are you sure you want to clear?'); }}>Clear</button>
            </fieldset>



        </div>
    );
}

export default Info;
