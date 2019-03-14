import React from 'react';
import PropTypes from 'prop-types';

const Shifumi = ( {handleClick, score1, score2, victory, loose}) => (
    <div className="container">
        <h2>Let's play shifumi</h2>
        <div>
            <span>votre score: {score1}</span>
            <span>score de l'adversaire: {score2}</span>
        </div>
        <button value="0" type="button" onClick={handleClick}>
          Pierre
        </button>
        <button value="1" type="button" onClick={handleClick}>
          Feuille
        </button>
        <button value="2" type="button" onClick={handleClick}>
          Ciseaux
        </button>
        {victory && <div>Vous avez gagné</div>}
        {loose && <div>Vous avez perdu</div>}
    </div>
);

export default Shifumi;