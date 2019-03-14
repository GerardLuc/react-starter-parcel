import React from 'react';
import PropTypes from 'prop-types';

const Shifumi = ({ play, scoreJoueur, scoreOrdi }) => ( 
    <div className = "container">
    <h1>Bienvenue dans le pierre papier ciseaux !</h1>
    <p>Joueur : {scoreJoueur} Ordinateur : {scoreOrdi}</p>
    <button value="pierre" type="button" onClick={play}>
      Pierre
    </button>
    <button value="feuille" type="button" onClick={play}>
      Papier
    </button>
    <button value="ciseaux" type="button" onClick={play}>
      Ciseaux
    </button>
    <br />
    <button value="reset" type="button" onClick={play}>
      Réinitialiser
    </button>
    </div>
);

Shifumi.propTypes = {
    scoreJoueur: PropTypes.number.isRequired,
    scoreOrdi: PropTypes.number.isRequired,
  };

export default Shifumi;

//inspiré du code de Jacques Airey