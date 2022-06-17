import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
  render() {
    return (
        <div>
            ComponentF
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        </div>
    )
  }
}

export default ComponentF