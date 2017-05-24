import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import ThingSubmit from './ThingSubmit'

class App extends Component {
  state = {
    things: {},
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThingSubmit addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          saveThing={this.saveThing}
        />
      </div>
    );
  }
}

export default App;