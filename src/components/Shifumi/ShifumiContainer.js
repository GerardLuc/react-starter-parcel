import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {

  state = {
    scorePlayer: 0,
    scoreOrdi: 0,
    message: 'Shifumi : Player vs Ordi',
    game: true,
  };

  handleClick = (evt) => {

	let choicePlayer;
    switch(parseInt(evt.target.value)){
      case 1:
        choicePlayer = 'pierre';
        break;
      case 2:
        choicePlayer = 'feuille';
        break;
      case 3:
        choicePlayer = 'ciseaux';
        break;
      case 4:
        this.setState(
    {
            scorePlayer: 0,
            scoreOrdi: 0,
            message: 'Shifumi : Player vs Ordi',
            game: true,
          }
        );
        break;
    }

	if(!this.state.game){
      return;
    }
	
    // Generate ordi choice
    let choiceOrdi = Math.random();

    if (choiceOrdi < 0.34) {
      choiceOrdi = 'pierre';
    } else if (choiceOrdi <= 0.67) {
      choiceOrdi = 'feuille';
    } else {
      choiceOrdi = 'ciseaux';
    }

    let result = this.play(choicePlayer, choiceOrdi);
    switch(result){
      case 'player':
        this.setState(prevState => {
          return {scorePlayer : prevState.scorePlayer + 1, message: 'Le joueur à joué: '+choicePlayer+' l\'ordi à joué: '+choiceOrdi+' et le joueur à gagné un point' }
        }, this.checkScore)
        break;
      case 'ordi':
        this.setState(prevState => {
          return {scoreOrdi : prevState.scoreOrdi + 1, message: 'Le joueur à joué: '+choicePlayer+' l\'ordi à joué: '+choiceOrdi+' et l\'ordi à gagné un point'}
        }, this.checkScore)
        break;

      case 'egale':
        this.setState(
    {message: 'Le joueur à joué: '+choicePlayer+' l\'ordi à joué: '+choiceOrdi+' égalité' }
        );
        break;
    }
  }
  
  checkScore(){
	if(this.state.scorePlayer >= 3){
      this.setState(
          {
            message: 'Vous avez gagné !',
            game: false,
          }
      );

    } else if(this.state.scoreOrdi >= 3){
      this.setState(
          {
            message: 'Whoups l\'ordi à gagné !',
            game: false,
          }
      );
    }  
  }

  play(choicePlayer, choiceOrdi){

    // Compare and see who is the winner
    if (choicePlayer === choiceOrdi) {
      return 'egale';
    } else if (choicePlayer === 'pierre') {
      if (choiceOrdi === 'ciseaux') {
        return 'player';
      } else if (choiceOrdi === 'feuille') {
        return 'ordi';
      }
    } else if (choicePlayer === 'feuille') {
      if (choiceOrdi === 'pierre') {
        return 'player';
      } else if (choiceOrdi === 'ciseaux') {
        return 'ordi';
      }
    } else if (choicePlayer === 'ciseaux') {
      if (choiceOrdi === 'pierre') {
        return 'ordi';
      } else if (choiceOrdi === 'feuille') {
        return 'player';
      }
    } else {
      return 'error';
    }
  }


  render() {
    const { scorePlayer, scoreOrdi, message } = this.state;
    return <Shifumi message={message} scorePlayer={scorePlayer} scoreOrdi={scoreOrdi} playShifumi={this.handleClick}/>;
  }
}

export default ShifumiContainer;