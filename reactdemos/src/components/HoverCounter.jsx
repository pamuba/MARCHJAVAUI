import React, { Component } from 'react'
import UpdateComponent from './withCounter'

export class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props
    return <h1 onMouseOver={increment}>{this.props.name} Hovered {count} times</h1>
  }
}

export default UpdateComponent(HoverCounter)