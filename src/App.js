import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
          <Route path='/' exact component={List}/>
      </div>
    );
  }
}

export default App;