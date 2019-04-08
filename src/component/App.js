import React, { Component } from 'react';
import './App.css';

const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda similique sit qui suscipit. Recusandae ipsa quae impedit molestiae pariatur nam autem saepe voluptate fugiat? Tempora cumque fuga ab illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda similique sit qui suscipit. Recusandae ipsa quae impedit molestiae pariatur nam autem saepe voluptate fugiat? Tempora cumque fuga ab illo?'

class App extends Component {
  state = {
    isTextShown: true
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isTextShown: !prevState.isTextShown,
    }))
  }

  render() {
    return (
      <div className="app">
        <h1>Show text app</h1>
        <button onClick={this.handleClick}>{this.state.isTextShown ? 'Hide' : 'Show'}</button>
        {this.state.isTextShown && <p>{loremText}</p>}
      </div>
    );
  }
}

export default App;
