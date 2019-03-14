import React, { Component } from 'react';
import Counter from './Counter';

class CounterContainer extends Component {
  state = {
    isReady: false,
    counter: 0,
  };

  componentDidMount() {
    this.setState(
      {
        isReady: true,
      },
      this.removeCover()
    );
  }

  handleClick = event => {
    const { counter } = this.state;
    const operation = parseInt(event.currentTarget.value);
    
    switch (operation) {
      case 1:
        this.setState(prevState => ({
          counter: prevState.counter + 1,
        }));
        break;
      case 2:
        if (counter === 0) return;
        this.setState(prevState => ({
          counter: prevState.counter - 1,
        }));
        break;
      default:

        this.setState({
          counter: 0,
        });
        break;
    }
  };

  removeCover() {
    setTimeout(() => {
      this.setState({
        isReady: false,
      });
    }, 2000);
  }

  render() {
    const { isReady, counter } = this.state;

    return <Counter isReady={isReady} updateCounter={this.handleClick} counter={counter} />;
  }
}

export default CounterContainer;
