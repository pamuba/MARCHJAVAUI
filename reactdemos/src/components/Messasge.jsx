import React, { Component } from 'react'

export class Messasge extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Welcome John"
    }

    this.changeMessage = this.changeMessage.bind(this)
  }
  changeMessage(){
      this.setState({
          message:'Good Morning John!!'
      })
      // console.log(this)
  }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <p><button onClick={()=>this.changeMessage()}>CHNAGE</button></p>
          <p><button onClick={this.changeMessage.bind(this)}>CHNAGE</button></p>
          <p><button onClick={this.changeMessage}>CHNAGE</button></p> */}
          <p><button onClick={this.changeMessage}>CHNAGE</button></p>
      </div>
    )
  }
}

export default Messasge

// bind , call, apply