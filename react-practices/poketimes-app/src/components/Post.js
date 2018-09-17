import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'
//import axios from 'axios';

class Post extends Component {
/*    state = {
        post: null
    }
    componentDidMount(props) {
        console.log(this.props);
        let id = this.props.match.params.post_id;

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }
*/
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        //const post = this.state.post 
        console.log(this.props);
        const post = this.props.post 
            ? (
                <div className="post">
                    <h4>ID: {this.props.post.id} - {this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <button className="btn grey" onClick={this.handleClick}>DELETE POST</button>
                </div>
            )
            : (
                <div className="center">Loading post...</div>
            );
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(id);
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)