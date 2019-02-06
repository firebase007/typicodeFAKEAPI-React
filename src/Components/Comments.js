import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
     console.log(this.props)
        this.state = {
            comments: [],
            showComments: false,
        }
    }

    componentDidMount() {
        console.log(this.props.postComment, "userId")
        const postComment = this.props.postComment
        console.log(postComment.userId, "id");
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postComment.userId}`)
          .then(response => response.json())
          .then(responseData => {
            console.log(responseData);
            if (responseData) {
              this.setState({ comments: responseData });
            }
          })
          .catch(error => {
            return error;
          });

    }


    displayComments = (e) => {
        e.preventDefault();
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {
        const { comments, showComments } = this.state;
        if (!comments) {
            return <div>comments loading ...</div>
        }

        let allComments = comments.map(comment => {
            return <div><Comment allCommenters={comment}/></div>
        });
        return <div>
            {allComments.length} comments
            <div><button onClick={this.displayComments}>{showComments ? "Hide Comments": "Show Comments"}</button></div>
            {comments && showComments ? <div> {allComments}</div>: null}
          </div>;

        
    }
}


export default Comments;