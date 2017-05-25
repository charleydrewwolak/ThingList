import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'

class Thing extends Component {
  componentDidMount() {
    this.nameInput.htmlEl.focus()
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  isCompleted = (ev) => {
    const { thing, saveThing } = this.props
    thing.completed = ev.target.checked
    saveThing(thing)

  }
  dueDate = (ev) => {
    const { thing, saveThing } = this.props
    thing.due = ev.target.value
    saveThing(thing)
  }

 

  render() {
    const { thing, removeThing } = this.props

    return (
      
      <li className="Thing">
        <input 
          type="checkbox" 
          checked={thing.completed}
          onChange={this.isCompleted}
          />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />  
          <input 
              type="date" 
              value={thing.due}
              onChange={this.dueDate}
          />
        </div>
        <div className="delete">
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    )
  }
}


export default Thing