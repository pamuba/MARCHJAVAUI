import React, { Component } from 'react'

export class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inptRef = React.createRef()

    this.cbRef = null
    this.setCbRef = element => {
        this.cbRef = element
    }
  }
  componentDidMount(){
    //   this.inptRef.current.focus()
    if(this.cbRef){
        this.cbRef.focus()
    }
  }
  clickHandler = () => {
      alert(this.inptRef.current.value)
  }
  render() {
    return (
      <div>
          <input type="text" ref={this.inptRef} />
          <input type="text" ref={this.setCbRef} />
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo