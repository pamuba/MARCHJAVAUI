import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       usersname:'',
       comments: ''
    }
  }
  handleUsernameChange = (event) => {
        this.setState({
            usersname:event.target.value
        })
  }
  handleCommentChange = (event) => {
      this.setState({
          comments: event.target.value
      })
  }
  handleSubmit = () => {
    //   save to database
      alert(`${this.state.usersname} ${this.state.comments}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>Username</label>
              <input type="text" 
              value={this.state.usersname}
              onChange={this.handleUsernameChange}>    
              </input>
          </div>
          <div>
              <label>comments</label>
              <textarea
              value={this.state.comments}
              onChange={this.handleCommentChange}>    
              </textarea>
          </div>
          <div>
              <button>Submit</button>
          </div>
      </form>
    )
  }
}

export default Form