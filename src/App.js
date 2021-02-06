import React, { Component } from 'react';
import './App.css';
import MyBanner from './MyBanner';

class App extends Component {

  render() {

    const myAddress = {
      street: 'Try',
      city: 'IT',
      state: 'By',
      zip: 'Yourself'
    };

    return (
      <div>
        <MyBanner
          name="CodeBuild Demo"
          address={myAddress}
        />
      </div>
    );
  }
}

export default App;
