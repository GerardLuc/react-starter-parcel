import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      computer: null,
      round: 0,
      tie: 0,
      playerScore: 0,
      computerScore: 0
    }
  }

  // choix de l'utilisateur
  inputChoice(choice) {
    this.setState(() => {
      return {
        player: choice,
        computer: ["pierre", "feuille", "ciseaux"][Math.floor(Math.random()*3)],
        round: this.state.round + 1
      }
    }, () => this.compareChoice())
  };

  // comparer les choix
  compareChoice() {
    let computer = this.state.computer
    let player = this.state.player
  
    if (
        (player === 'pierre' && computer === 'ciseaux')
        || (player === 'ciseaux' && computer === 'feuille')
        || (player === 'feuille' && computer === 'pierre')
      ) {
        this.setState({
          playerScore: this.state.playerScore + 1
        }, () => console.log(this.state.playerScore))
      }
      else if ( player !== computer) {
        this.setState({
          computerScore : this.state.computerScore + 1
        }, () => console.log(this.state.computerScore))
      }
      else if (this.state.playerScore >= '2'){
        alert('Joueur Gagne')
      }
      else if (this.state.computerScore >= '2'){
        alert('Ordinateur Gagne')
      }
    }

   render() {
     return (
       <div className="container">
          <div>
            <h2>Let's play Shifumi</h2>
          </div>
         <div className="chooseBox">
           <button onClick={()=>this.inputChoice('pierre')}>Pierre</button>
           <button onClick={()=>this.inputChoice('papier')}>Feuille</button>
           <button onClick={()=>this.inputChoice('ciseaux')}>Ciseaux</button>
           <br></br>
         </div>
  
         <div className="scoreBoard">
           <div>Joueur : {this.state.player}</div>
           <div>Ordinateur : {this.state.computer}</div>
            <br></br>
           <div>Joueur Score : {this.state.playerScore}</div>
           <div>Ordinateur Score : {this.state.computerScore}</div> 
        </div>
        <div className="">
          <p> Tour : {this.state.round}</p>
        </div>
       </div>
     );
   }  
  }
export default ShifumiContainer;
