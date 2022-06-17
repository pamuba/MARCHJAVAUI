import React, { Component } from 'react'
import UpdateComponent from './withCounter'

export class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props
    return <button onClick={increment}>{this.props.name} Clicked {count} times</button>
  }
}

export default UpdateComponent(ClickCounter)