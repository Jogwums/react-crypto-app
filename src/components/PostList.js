import React, { Component } from 'react'
import axios from 'axios'

import Photos from './Photos'

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []

        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({posts: response.data}))
        .catch(error => console.log(error))
        
    }
    render() {
        const {posts} = this.state

        return (
                <div>
                    { posts.slice(0,10).map(post => (
                        <>
                            <h4
                             className="bg-blue-400 text-white text-justify text-2xl text-bold underline ">{post.title}</h4>
                            <p>{post.body}</p>
                        </>
                    ))}
                </div>
        )
    }
}

export default PostList;