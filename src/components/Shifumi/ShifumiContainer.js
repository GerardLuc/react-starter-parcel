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
  // fonction pour choix de l'utilisateur


  inputChoice(choice) {

      this.setState(() => {
           return {
        player: choice,
        computer: ["rock", "paper", "scissors"][Math.floor(Math.random()*3)],
        round: this.state.round + 1
      }
    }, () => this.compareChoice())
  
   
  };
  // fonction pour comparer les choix
  
  compareChoice() {
    let computer = this.state.computer
    let player = this.state.player
  
   

   
      if (
        (player === 'rock' && computer === 'scissors')
        || (player === 'paper' && computer === 'rock')
        || (player === 'scissors' && computer === 'paper')
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
      else if ( player === computer) {
        this.setState({
          tie: this.state.tie + 1
        })
      }
    }
    
  
  
  
   render() {
     return (
       <div className="container">
  
         <div className="chooseBox">
           <button onClick={()=>this.inputChoice('rock')}>Pierre</button>
           <button onClick={()=>this.inputChoice('paper')}>Feuille</button>
           <button onClick={()=>this.inputChoice('scissors')}>Ciseaux</button>
         </div>
  
         <div className="scoreBoard">
           <table>
             <tr>
               <th>Player</th>
               <th>Computer</th>
             </tr>
             <tr>
               <td>{this.state.player}</td>
               <td>{this.state.computer}</td>
             </tr>
           </table>
           <table>
             <tr>
               <th>Player Score</th>
               <th>Computer Score</th>
             </tr>
             <tr>
               <td>{this.state.playerScore}</td>
              <td>{this.state.computerScore}</td>
             </tr>
           </table>
        </div>
        <div className="">
          <p> Round: {this.state.round}</p>
          <p> Tie: {this.state.tie}</p>
        </div>
  
       </div>
     );
   }
  
    }




/*class ShifumiContainer extends Component {

    state =  {
        isReady: false,
        score : 0,
    };

   

    handleClick = event => {
      const choixUtilisateur = event.currentTarget.value;
      const tirageOrdi = Math.random();

      var choixOrdi ='';

      if (tirageOrdi <= (1/3)) {
        choixOrdi = 'pierre';
      } else if (tirageOrdi <= (2/3)) {
        choixOrdi = 'feuille';
      } else {
        choixOrdi = 'ciseaux';
      }
     
    

    switch (choixUtilisateur) {
      case 'reset' : 
        this.setState({
          scoreJoueur : 0,
          scoreOrdi : 0,
        });
        break;

        default : 
        if (this.state.scoreJoueur < 3 && this.state.scoreOrdi < 3) {

        }
    }

  }
    

    render() {
        const {score} = this.state;
        const { isReady, counter } = this.state;
        <div>Coucou</div>
      return (<Shifumi isReady={isReady} score={score} play={this.handleClick}/>);
      
    }
  }
  */

export default ShifumiContainer;





