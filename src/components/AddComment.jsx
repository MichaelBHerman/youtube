import React, { Component } from 'react';


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
        } 
    }
    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.state)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

   
    render() { 
        return ( 
            <div>
                <form class="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="comment" onChange={this.handleChange} value={this.state.comment}/>
                    <button type="submit">Add your comment</button>
                 </form>
            </div>
        );
    }
}

export default AddComment;