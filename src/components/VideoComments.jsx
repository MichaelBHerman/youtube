
import React, { Component } from 'react';
import axios from 'axios';
import AddComment from './AddComment';

class VideoComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }


    componentDidMount = () => {
    this.getAllComments();
    }

    async getAllComments(){
    let response = await axios.get('http://127.0.0.1:8000/comment/');
    this.setState({
        comments: response.data
    });
    }

    // createComment = async (newComment) => {
    //   let tempComments = this.state.comments.comment;
    //   let response = await axios.post('http://127.0.0.1:8000/comment/', newComment)
    //   tempComments.push(response)
    //   console.log(response)
    //   this.getAllComments()
    //     }

    render() {
    return(
      <div class="container">
        <h2>Video Comments</h2>
        <hr></hr>
        
        <div>
            {this.state.comments.map((comments, id) => (
              <div key={id}>
                <AddComment />
                <h5>{comments.comment}</h5>
                <h5>{comments.reply}</h5>
                <h5>Likes: {comments.like}</h5>
                <h5>Dislikes: {comments.dislike}</h5>
              </div>
            ))}
        </div>
    </div>    
    );
    }
}

export default VideoComments;