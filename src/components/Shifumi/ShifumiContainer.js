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
    
    if (this.state.scoreJoueur < 3 && this.state.scoreOrdi < 3) { //Si les deux scores sont inférieurs a 3
      switch (this.play(choixJoueur, choixOrdi)) { //Appelle le résultat de play()
        case 'joueur' : //Le joueur gagne
          this.setState(prevState => ({
            scoreJoueur: prevState.scoreJoueur + 1,
          }));
          alert('Player wins!')
          break;
        case 'ordi' : //L'ordi gagne
          this.setState(prevState => ({
            scoreOrdi: prevState.scoreOrdi + 1,
          }));
          alert('Computer wins!')
          break;
        case 'egalite' : //Égalité
          alert('Tie!')
          break;
        default :
          return;
      }
    } else { //Si l'un des deux scores a atteint 3
      if (choixJoueur == 'reset') { //Et que l'utilisateur a cliqué sur reset
        this.setState({
          scoreJoueur: 0,
          scoreOrdi: 0,
        });
      } else { //S'il n'a pas cliqué sur reset
        alert('Game over, please click reset to play again.')
      }
    }
  };

  play(choixJoueur, choixOrdi) { //Comparer les deux choix et retourner le gagnant
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
