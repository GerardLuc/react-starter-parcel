import React from 'react';
import PropTypes from 'prop-types';

const Shifumi = ({ play, scoreJoueur, scoreOrdi }) => ( 
    <div className = "container">
    <h1>Welcome to shifumi !</h1>
    <p>Player : {scoreJoueur} Computer : {scoreOrdi}</p>
    <button value="pierre" type="button" onClick={play}>
      Rock
    </button>
    <button value="feuille" type="button" onClick={play}>
      Paper
    </button>
    <button value="ciseaux" type="button" onClick={play}>
      Scissors
    </button>
    <br />
    <button value="reset" type="button" onClick={play}>
      Reset
    </button>
    </div>
);

Shifumi.propTypes = {
    scoreJoueur: PropTypes.number.isRequired,
    scoreOrdi: PropTypes.number.isRequired,
  };

export default Shifumi;
