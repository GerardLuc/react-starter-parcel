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

    console.log('Joueur a choisi ' + choixJoueur);
    console.log('Ordi a choisi ' + choixOrdi);
    
    switch (choixJoueur) {
      case 'reset': //Si l'utilisateur clique sur reset
        this.setState({
          scoreJoueur: 0,
          scoreOrdi: 0,
        });
        break;
      default: //Si l'utilisateur fait un autre choix
        if (this.state.scoreJoueur < 3 && this.state.scoreOrdi < 3) {
          if (choixJoueur == choixOrdi) {
            alert('Tie!')
            break;
          } else if (this.play(choixJoueur, choixOrdi) == 'gagnantJoueur') {
            this.setState(prevState => ({
              scoreJoueur: prevState.scoreJoueur + 1,
            }));
            alert('Player wins!')
            break;
          } else if (this.play(choixJoueur, choixOrdi) == 'gagnantOrdi') {
            this.setState(prevState => ({
              scoreOrdi: prevState.scoreOrdi + 1,
            }));
            alert('Computer wins!')
            break;
          }
        } else {
          alert('Game over, please click reset to play again.')
        }
    }
  };

  play(choixJoueur, choixOrdi) {
    if (choixJoueur == 'pierre'){
      if (choixOrdi == 'feuille') {
        return 'gagnantOrdi';
      } else {
        return 'gagnantJoueur';
      }
    } else if (choixJoueur == 'feuille'){
      if (choixOrdi == 'pierre') {
        return 'gagnantJoueur';
      } else {
        return 'gagnantOrdi';
      }
    } else {
      if (choixOrdi == 'pierre') {
        return 'gagnantOrdi';
      } else {
        return 'gagnantJoueur';
      }
    }
  }

  render() {
    const { scoreJoueur, scoreOrdi } = this.state;
    return <Shifumi scoreJoueur={scoreJoueur} scoreOrdi={scoreOrdi} play={this.handleClick} />;
  }
}

export default ShifumiContainer;
