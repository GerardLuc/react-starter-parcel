import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
  state = {
    score: 0,
  };

  // Conception développer le jeu pierre feuille ciseau
  // 3 boutons ou bien un select et un bouton Play

  // Afficher un score, premier arrivé à 3 a gagné.
  // ['pierre', 'feuille', 'ciseaux'];
  // Math.random() / index ?

  // play(){}
  handleClick = event => {}

  render() {
    const { score } = this.state;

    // Passer handleClick en props à <Shifumi />
    return <Shifumi score={score} />;
  }
}

export default ShifumiContainer;
