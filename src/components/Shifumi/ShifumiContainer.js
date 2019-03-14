import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {

  // Conception développer le jeu pierre feuille ciseau
  // 3 boutons ou bien un select et un bouton Play

  // Afficher un score, premier arrivé à 3 a gagné.
  // ['pierre', 'feuille', 'ciseaux'];
  // Math.random() / index ?

  // handleClick = event => {}

  state ={
    scoreJoueur: 0,
    scoreIA: 0,
    game: true,
    notif: "Les dés sont lancés !!!"
  };

handleClick = (evt) => {
    if(!this.state.game){
      return;
    }

    let choiceJoueur;
    switch(parseInt(evt.target.value)) {
      case 1:
      choiceJoueur = 'Pierre';
      break;

      case 2:
      choiceJoueur = 'Feuille';
      break;

      case 3:
      choiceJoueur = 'Ciseaux';
      break;
    }
    console.log(choiceJoueur);

    let choiceIA;
    let min=1;
    let max=3;
    let nb =Math.floor(Math.random() * (+max - +min)) + +min;
    switch(nb) {
      case 1:
      choiceIA = 'Pierre';
      break;

      case 2:
      choiceIA = 'Feuille';
      break;

      case 3:
      choiceIA = 'Ciseaux';
      break;
    }
    console.log(choiceIA);
    let resultat = this.jeu(choiceIA, choiceJoueur);
    if (resultat == "Joueur") {
      this.setState(
        {
          notif: "+1 point pour Joueur",
        }
      );
      this.setState(
        prevState => {
          return {
            scoreJoueur: prevState.scoreJoueur + 1,
          }
        }
      )
    } else if (resultat == 'IA') {
      this.setState(
        {
          notif: "+1 point pour IA",
        }
      );
      this.setState(
        prevState => {
          return {
            scoreIA: prevState.scoreIA + 1,
          }
        }
      )
    } else if (resultat == "egalite") {
      this.setState(
        {
          notif: "egalite",
        }
      );
    }

    if(this.state.scoreJoueur >= 3){
      this.setState(
        {
          game: false,
          notif: "Fin du jeu, joueur remporte la partie",
        }
      );
    } else if (this.state.scoreIA >= 3) {
      this.setState(
        {
          game: false,
          notif: "Fin du jeu, IA remporte la partie",
        }
      );
    }
  }

  jeu(choiceIA, choiceJoueur){
    if(choiceIA === choiceJoueur) {
      return 'egalite';
    } else if (choiceJoueur === "Feuille") {
      if (choiceIA === "Ciseaux") {
        return "IA";
      } else if (choiceIA === "Pierre") {
        return "Joueur";
      }
    } else if (choiceJoueur === "Pierre") {
      if (choiceIA === "Feuille") {
        return "IA";
      } else if (choiceIA === "Ciseaux") {
        return "Joueur";
      }
    } else if (choiceJoueur === "Ciseaux") {
        if (choiceIA === "Feuille") {
          return "Joueur";
        } else if (choiceIA === "Pierre") {
          return "IA";
        }
    }
  }



  render() {
    const { scoreIA, scoreJoueur, notif } = this.state;

    // Passer handleClick en props à <Shifumi />
    return <Shifumi scoreIA={scoreIA} scoreJoueur={scoreJoueur} notif={notif} playShifumi={this.handleClick} />;
  }
}

export default ShifumiContainer;
