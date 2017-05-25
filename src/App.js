import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import ThingSubmit from './ThingSubmit'
import base from './base'
import SignOut from './SignOut'
import SignIn from './SignIn'

class App extends Component {
  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
    things: {},
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      due: 'null'
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

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  signedIn = () => {
    return true
  }

  renderMain = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div>
        <SignOut />
        <ThingSubmit addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    );
  }
}

export default App;