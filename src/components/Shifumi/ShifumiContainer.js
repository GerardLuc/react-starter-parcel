import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
    state = {
        myself:0,
        computer:0   
    };


    play(choice){
        const comput= Math.floor(Math.random() * 3);
        if(choice == comput){
            return;
        }

        if(choice == 0 && comput == 1){
            this.setState(prevState => ({
                computer: prevState.computer + 1,
        }));
        }
        if(choice == 0 && comput == 2){
            this.setState(prevState => ({
                myself: prevState.myself + 1,
        }));
        }

        if(choice == 1 && comput == 0){
            this.setState(prevState => ({
                myself: prevState.myself + 1,
        }));
        }
        if(choice == 1 && comput == 2){
          this.setState(prevState => ({
              computer: prevState.computer + 1,
        }));
        }
        if(choice == 2 && comput == 0){
        this.setState(prevState => ({
            computer: prevState.computer + 1,
        }));
        }
        if(choice == 2 && comput == 1){
        this.setState(prevState => ({
            myself: prevState.myself + 1,
        }));
        }
                
    }


    handleClick =event =>{
        this.play(event.currentTarget.value);
        
        
    };
    
    render() {
        const {myself, computer} =this.state;
        
      return <Shifumi  myself={myself} computer={computer} play={this.handleClick}/>;
  }
}

export default ShifumiContainer;