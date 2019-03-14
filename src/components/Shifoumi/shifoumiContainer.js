import React, { Component } from 'react';
import Shifoumi from './shifoumi';

class shifoumiContainer extends Component {
    state = {
        myself:0,
        computer:0
        

        
        
        
    };


    play(choice){
        if(this.state.myself > this.state.computer && this.state.myself ==3 ){
           alert("Vous avez Gagnez");
            
        }
        else if(this.state.computer > this.state.myself && this.state.computer ==3){
            alert("Vous avez perdu");
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
        if(this.state.myself == 3 || this.state.comput == 3){
            this.setState({
                myself:0,
                computer:0
            })
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
        
      return <Shifoumi  myself={myself} computer={computer} play={this.handleClick}/>;
  }
}

export default shifoumiContainer;
