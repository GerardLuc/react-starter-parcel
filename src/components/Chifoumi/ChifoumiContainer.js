import React, { Component } from 'react';
import Chifoumi from './Chifoumi';

class ChifoumiContainer extends Component {
  state = {
    scoreJoueur: 0,
    scoreOrdi: 0,
    play: true,
    message: "Faites un choix",
    messageFin: "",
  }

  handleClick = (event) => {
    const action = event.currentTarget.value;
    const { scoreJoueur } = this.state;
    const { scoreOrdi } = this.state;
    const { play } = this.state;
    const { message } = this.state;

    //Programmer le choix de l'ordi
    var computerPossibilities = ["pierre", "feuille", "ciseaux"];
    var computerChoice = computerPossibilities[Math.floor(Math.random() * computerPossibilities.length)];
    if (play == false) {
      return;
    }
    this.play(action, computerChoice, scoreJoueur, scoreOrdi, message);
  }

  play(action, computerChoice, scoreJoueur, scoreOrdi){
    // console.log(computerChoice);
    // console.log(action);
    if (action == "reset") {
      this.setState(prevState => ({
        scoreJoueur:  0,
        scoreOrdi: prevState.scoreOrdi = 0,
      }),this.checkScore(scoreJoueur, scoreOrdi));
    } else {
      if(action == computerChoice){
        this.setState({
          message: "Égalité",
        });
    
      } else if(computerChoice == "pierre" && action == "feuille"){
        this.setState(prevState => ({
          scoreJoueur: prevState.scoreJoueur + 1,
        }),this.checkScore(scoreJoueur, scoreOrdi));
        this.setState({
          message: "Gagné",
        });
        
      } else if(computerChoice == "feuille" && action == "ciseaux"){
        this.setState(prevState => ({
          scoreJoueur: prevState.scoreJoueur + 1,
        }), this.checkScore(scoreJoueur, scoreOrdi));
        this.setState({
          message: "Gagné",
        });
       
      } else if(computerChoice == "ciseaux" && action == "pierre"){
        this.setState(prevState => ({
          scoreJoueur: prevState.scoreJoueur + 1,
        }), this.checkScore(scoreJoueur, scoreOrdi));
        this.setState({
          message: "Gagné",
        });
       
      } else{
        this.setState(prevState => ({
          scoreOrdi: prevState.scoreOrdi + 1,
        }), this.checkScore(scoreJoueur, scoreOrdi));
        this.setState({
          message: "Perdu",
        });
      
      };
    };
  }

  checkScore(scoreJoueur, scoreOrdi) {
    if (scoreJoueur == 2) {
      this.setState({
        play: false,
        messageFin: "La partie est fini, le gagnant est... VOUS !",
      });
    } else if (scoreOrdi == 2) {
      this.setState({
        play: false,
        messageFin: "La partie est fini, le gagnant est... l'ORDINATEUR !",
      });
    }
  }

  render() {
    const { scoreJoueur, scoreOrdi, message, messageFin} = this.state;
    return <Chifoumi scoreOrdi={scoreOrdi} scoreJoueur={scoreJoueur} action={this.handleClick} message={message} messageFin={messageFin}/>;
  }
}

export default ChifoumiContainer;
