import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : []
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts:res.data
                })
                // }, ()=>{ console.log(this.state.posts) })
            })
            .catch(err=>{
                console.log(err.message)
            })
  }
  render() {
    const { posts } = this.state
    console.log(posts)
    return (
      <div>
          Posts List
          {
              posts.length ?
              posts.map(post => <div key={post.id}>{post.title}</div>):
              "No Data"
          }
      </div>
    )
  }
}

export default PostList