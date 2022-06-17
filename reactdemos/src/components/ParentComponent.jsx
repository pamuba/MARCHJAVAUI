import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      parentName : 'Parent'
   }

   this.getParent = this.getParent.bind(this)
 }
 getParent(){
     alert('Hello '+ this.state.parentName)
 }
  render() {
    return (
      <div>
          <ChildComponent getParent = {this.getParent}/>
      </div>
    )
  }
}

export default ParentComponent