import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
  state ={
    scoreJoueur: 0,
    scoreOrdi: 0,
  };

  handleClick = event => {
    const choixJoueur = event.currentTarget.value;
    const tirageOrdi = Math.random();
    var choixOrdi = '';
    if (tirageOrdi <= (1/3)) {
      choixOrdi = 'pierre';
    } else if (tirageOrdi <= (2/3)) {
      choixOrdi = 'feuille';
    } else {
      choixOrdi = 'ciseaux';
    }

    console.log('Joueur a sélectionné ' + choixJoueur);
    console.log('Ordi a sélectionné ' + choixOrdi);

    if (this.state.scoreJoueur < 3 && this.state.scoreOrdi < 3) {
      switch (this.play(choixJoueur, choixOrdi)) {
        case 'joueur' :
          this.setState(prevState => ({
            scoreJoueur: prevState.scoreJoueur + 1,
          }));
          alert('Joueur a gagné !')
          break;
        case 'ordi' :
          this.setState(prevState => ({
            scoreOrdi: prevState.scoreOrdi + 1,
          }));
          alert('Ordinateur a gagné !')
          break;
        case 'egalite' :
          alert('Egalité!')
          break;
        default :
          return;
      }
    } else {
      if (choixJoueur == 'reset') {
        this.setState({
          scoreJoueur: 0,
          scoreOrdi: 0,
        });
      } else {
        alert('Perdu, relance !')
      }
    }
  };

  play(choixJoueur, choixOrdi) { 
    switch (choixJoueur) { 
      case 'pierre' :
        switch (choixOrdi) {
          case 'feuille' :
            return 'ordi';
          case 'ciseaux' :
            return 'joueur';
          default :
            return 'egalite';
        }
      case 'feuille' :
        switch (choixOrdi) {
          case 'ciseaux' :
            return 'ordi';
          case 'pierre' :
            return 'joueur';
          default :
            return 'egalite';
        }
      default :
        switch (choixOrdi) {
          case 'pierre' :
            return 'ordi';
          case 'feuille' :
            return 'joueur';
          default :
            return 'egalite';
        }
    }
  }

  render() {
    const { scoreJoueur, scoreOrdi } = this.state;
    return <Shifumi scoreJoueur={scoreJoueur} scoreOrdi={scoreOrdi} play={this.handleClick} />;
  }
}

export default ShifumiContainer;