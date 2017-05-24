import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import ThingSubmit from './ThingSubmit'

class App extends Component {

  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    }
  }
  addThing = () => {
    const things = {...this.state.things} 
    const thing = {
      id: `thing-${Date.now()}`,
      name: '',
    }
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThingSubmit  addThing={this.addThing}/>
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
