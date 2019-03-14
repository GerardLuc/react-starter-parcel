import React from 'react';
const Shifumi = ({playShifumi, scoreIA, notif, scoreJoueur}) => (
  <div>
    <h2>Let's play JanKenPon</h2>
    <button value="1" onClick={playShifumi}>Pierre</button>
    <button value="2" onClick={playShifumi}>Feuille</button>
    <button value="3" onClick={playShifumi}>Ciseaux</button>
    <div>Joueur</div>
    <div>{scoreJoueur}</div>
    <div>IA</div>
    <div>{scoreIA}</div>
    <div>{notif}</div>
  </div>
);

export default Shifumi;
