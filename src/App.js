import React from 'react';
import CardList from './components/TodoComponents/CardList'
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      cards: [1],
      
    }
  }

  
  addCard = (e) => {
    e.preventDefault();
    this.setState({
      cards: [...this.state.cards, this.state.cards + 1]
    })
  }

  
  render() {
    return (
      <div className="background">
        <div>
          <h2 className="title">Welcome to your Todo App!</h2>
          <CardList addCard={this.addCard}cards={this.state.cards}/>
        </div>
          
      </div>
    );
  }
}

export default App;
