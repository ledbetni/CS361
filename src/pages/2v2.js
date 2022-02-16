import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Twos({ setTwosToEdit }) {
    
    return(
        <div>
            <h1 className="title">2v2 Arena</h1>

            <ul>
            <li><Link className="App-link" to="/">Home</Link></li>
                <li><Link className="App-link" to="/2v2">2v2 Arena</Link></li>
                <li><Link className="App-link" to="/3v3">3v3 Arena</Link></li>
                <li><Link className="App-link" to="/rbg">Rated Battlegrounds</Link></li>
                <li><Link className="App-link" to="/info">Class Information</Link></li>
            </ul>

            <p>This website will serve as a World of Warcraft Player vs. Player Arena Leaderboard</p>
            <p>This page will display information for 2v2 arena</p>

            <fieldset>
                <h2>2v2 Arena Leaderboards</h2>
                <div> This is the area in which Battle.net API 2v2 leaderboard information will be displayed.
                    <p>For instance: Blightcubzy, Druid class, Tichondrius Server, 2770 rating</p>
                    <p></p>
                </div>
                
            </fieldset>

            <fieldset>
                <h2>Search by Class</h2>
                <div> This is the area in which an end user may search by specific player class and information will be displayed only for that class
                    <p>For instance: Blightcubzy, Druid class, Tichondrius Server, 2770 rating</p>
                    <p>LoremIpsum, Druid class, Stormrage Server, 1880 rating</p>
                    <p>IpsumLorem, Druid class, Dalaran Server, 1500 rating</p>
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
                <button onClick={()=>{alert('Are you sure you want to clear?'); }}>Clear</button>
            </fieldset>

            




        </div>
    );
}

export default Twos;
