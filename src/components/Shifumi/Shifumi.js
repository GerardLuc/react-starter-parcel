import React from 'react';
import PropTypes from 'prop-types';

const Shifumi = ({ play, scoreJoueur, scoreOrdi }) => ( 
    <div className = "container">
    <h1>PIERRE PAPIER CISEAUX !</h1>
        <br/>
            <p> Jouez maintenant ci-dessous ! </p>
    <p>Joueur : {scoreJoueur} Ordinateur : {scoreOrdi}</p>
    <button value="Pierre" type="button" onClick={play}>
      Pierre
    </button>
        <br/>
    <button value="Papier" type="button" onClick={play}>
      Papier
    </button>
        <br/>
    <button value="Ciseaux" type="button" onClick={play}>
      Ciseaux
    </button>
    <br />
    <button value="reset" type="button" onClick={play}>
      REJOUER !
    </button>
    </div>
);

Shifumi.propTypes = {
    scoreJoueur: PropTypes.number.isRequired,
    scoreOrdi: PropTypes.number.isRequired,
  };

export default Shifumi;
