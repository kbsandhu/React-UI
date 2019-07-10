import React from 'react';
import Posts from './Posts';
import axios from 'axios';
import Navigation from './Nav/Navigation'
class Contact extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        //  fetch('https://jsonplaceholder.typicode.com/posts')
        //  .then(response => response.json())
        //  .then(responseData=>{
        //      this.setState({
        //         posts:responseData
        //      })
        //      console.log(this.state.posts)
        //  })
        //  .catch(error=>{
        //      console.log("Error Fetching Data")
        //  })
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                this.setState({
                    posts: response.data
                })
                console.log(response)
            })
    }
    render() {
        return <div className='App'>
            <Navigation></Navigation>
            {this.state.posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>;
    }
}

export default Contact;