import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
    state = {
        myself:0,
        computer:0   
        
    };


    play(choice){
        if(this.state.myself > this.state.computer && this.state.myself ==3 ){
           alert("Tu as gagné :)");
            
        }
        else if(this.state.computer > this.state.myself && this.state.computer ==3){
            alert("Malheureusement, tu as perdu :( ");
        }
        
        const comput= Math.floor(Math.random() * 3);
        if(choice == comput){
            return;
        }

        if(choice == 0 && comput == 1){
            this.setState(prevState => ({
                computer: prevState.computer + 1,
        }));
        }
        if(choice == 1 && comput == 2){
            this.setState(prevState => ({
                computer: prevState.computer + 1,
        }));
        }
        if(choice == 1 && comput == 0){
            this.setState(prevState => ({
                myself: prevState.myself + 1,
        }));
        }
        if(choice == 2 && comput == 1){
            this.setState(prevState => ({
                myself: prevState.myself + 1,
        }));
        }
        if(choice == 2 && comput == 0){
            this.setState(prevState => ({
                computer: prevState.computer + 1,
        }));
        }
        if(choice == 0 && comput == 2){
            this.setState(prevState => ({
                myself: prevState.myself + 1,
        }));
        }
       
    }


    handleClick =event =>{
        
        this.play(event.currentTarget.value);
        
        
    };
    
    
    //Conception développer le jeu pierre feuille ciseau
    //Possibilité d'avoir 3 choix sur des boutons
    //afficher un score, premier arrivé à 3 à gagner
    //Math.random();
    //handle.click = event => {}
    
    render() {
        const {myself, computer} =this.state;
        
      return <Shifumi  myself={myself} computer={computer} play={this.handleClick}/>;
  }
}

export default ShifumiContainer;




