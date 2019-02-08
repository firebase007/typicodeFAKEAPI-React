import React from 'react';
import Comment from './Comment';
import { Button, Badge } from 'reactstrap';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      comments: [],
      showComments: false,
      fadeIn: false
    };
  }

  componentDidMount() {
    console.log(this.props.postComment, "userId");
    const postComment = this.props.postComment;
    console.log(postComment.userId, "id");
    fetch(
      `http://jsonplaceholder.typicode.com/comments?postId=${
        postComment.userId
      }`
    )
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

  displayComments = e => {
    e.preventDefault();
    this.setState({
      showComments: !this.state.showComments
    });
  };

  toggleFade =() => {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    const { comments, showComments, fadeIn } = this.state;
    if (!comments) {
      return <div>comments loading ...</div>;
    }

    let allComments = comments.map(comment => {
      return <div>
          <Comment allCommenters={comment} onButtonClick={this.toggleFade} in={fadeIn} />
        </div>;
    });
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ flex: "" }}>
          <Badge color="light" pill>
            {allComments.length} comments
          </Badge>
        </span>
        <div>
          <Button onClick={this.displayComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>
        </div>
        {comments && showComments ? <div> {allComments}</div> : null}
      </div>
    );
  }
}


export default Comments;