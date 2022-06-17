import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
    //   this.state.count = this.state.count + 1
    this.setState({
        count: this.state.count + 1
    }, ()=> {console.log('Callback Value:',this.state.count)})
    console.log(this.state.count)
  }
  render() {
    const { name, heroName } = this.props
    return (
      <>
        <h2>{name} aka {heroName}</h2>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
      </>
    )
  }
}

export default Counter