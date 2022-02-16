import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
    return(
        <div>
            <h1 className="title">World of Warcraft Arena Leaderboards</h1>

            <ul>
            <li><Link className="App-link" to="/">Home</Link></li>
                <li><Link className="App-link" to="/2v2">2v2</Link></li>
                <li><Link className="App-link" to="/3v3">3v3</Link></li>
                <li><Link className="App-link" to="/rbg">Rated Battlegrounds</Link></li>
                <li><Link className="App-link" to="/info">Class Information</Link></li>
            </ul>

            <p className="indexText">This website will display World of Warcraft Player vs. Player leaderboard information using Battle.net Developer APIs. <br></br>The class information page will display information for each 
                player class which may be translated into different languages.
            </p>
        </div>
    );
}

export default Index;
