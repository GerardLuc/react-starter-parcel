import React from 'react';

const Shifumi = ({playShifumi, scorePlayer, scoreOrdi, message}) => (
    <div>
        <h1>{message}</h1>
        <button value="1" onClick={playShifumi}>Pierre</button>
        <button value="2" onClick={playShifumi}>Feuille</button>
        <button value="3" onClick={playShifumi}>Ciseaux</button><br/>
        <button value="4" onClick={playShifumi}>Nouvelle partie</button>
        <h2>Player</h2>
        <h2>{scorePlayer}</h2>
        <h2>Ordi</h2>
        <h2>{scoreOrdi}</h2>
    </div>
);

export default Shifumi;