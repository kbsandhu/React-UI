import React from 'react';
import axios from 'axios';
class Contact extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
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
            {this.state.posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>;
    }
}

export default Contact;