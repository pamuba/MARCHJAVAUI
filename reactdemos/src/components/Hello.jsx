import React from 'react'

function Hello(props) {
  props.name = "New Name"
  return (
    <div>
        <h1>Hello {props.name}  aka  {props.heroName}</h1>
        <h2>{props.children}</h2>
    </div>
  )

//  return React.createElement('div', null, React.createElement('h1', null, 'Hello John'))
}

export default Hello