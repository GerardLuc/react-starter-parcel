import React from 'react';
import PropTypes from 'prop-types';

const Chifoumi = ({ action, scoreJoueur, scoreOrdi, message, messageFin }) => (
  <div className="container">
    <div>
      <h2>Let's play Chifoumi</h2>
    </div>
    <div>
      <button value="pierre" type="button" onClick={action}>Pierre</button>
      <button value="feuille" type="button" onClick={action}>Feuille</button>
      <button value="ciseaux" type="button" onClick={action}>Ciseaux</button>
      <button value="reset" type="button" onClick={action}>Reset</button>
      <p id="result">{message}</p>
      <h1 id="resultat">{messageFin}</h1>
      <p>Score Ordi: {scoreOrdi}</p>
      <p>Score Joueur: {scoreJoueur}</p>
    </div>
  </div>
);

export default Chifoumi;
