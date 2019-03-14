import React, { Component } from 'react';
import Shifumi from './Shifumi';

class ShifumiContainer extends Component {
state ={
    score1: 0,
    score2: 0
};

handleClick = event =>{
    this.play(event.currentTarget.value);
}

play(choice){
    const comp = Math.floor(Math.random() * 3);
    if(choice == comp){
        return;
    }
    if(choice == 0 && comp == 1){
        this.setState(prevState => ({
            score2: prevState.score2 + 1,
          }));
    }
    if(choice == 0 && comp == 2){
        this.setState(prevState => ({
            score1: prevState.score1 + 1,
          }));
    }
    if(choice == 1 && comp == 0){
        this.setState(prevState => ({
            score1: prevState.score1 + 1,
          }));
    }
    if(choice == 1 && comp == 2){
        this.setState(prevState => ({
            score2: prevState.score2 + 1,
          }));
    }
    if(choice == 2 && comp == 0){
        this.setState(prevState => ({
            score2: prevState.score2 + 1,
          }));
    }
    if(choice == 2 && comp == 1){
        this.setState(prevState => ({
            score1: prevState.score1 + 1,
          }));
    }
    if(this.state.score1 == 3 || this.state.score2 == 3){
        this.setState ({
            score1 :0,
            score2 :0
          });
    }
}

  render() {
    const { score1, score2 } = this.state;
    return <Shifumi score1={score1} score2={score2} handleClick={this.handleClick} />;
  }
}

export default ShifumiContainer;