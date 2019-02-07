import React from 'react';
import Comments from './Comments';
import CreatePost from './CreatePost';
import { ListGroup, ListGroupItem, Spinner, Button } from "reactstrap";
import PostLists from './PostLists';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            userPostList: [],
            createPost: false,
        }
    }

    componentDidMount() {
        console.log(this.props.currentUserPostListDetails, "currentUserPostListDetails")
        const currentUserPostList = this.props.currentUserPostListDetails
        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${currentUserPostList.id}`)
          .then(response => response.json())
          .then(responseData => {
            console.log(responseData);
            if (responseData) {
                this.setState({ userPostList: responseData });
            }
          })
          .catch(error => {
            return error;
          });
    }

    createNewPost = (e) => {
        e.preventDefault();
        this.setState({
            createPost: !this.state.createPost
        })
    }

    render() {
      const { userPostList, createPost } = this.state;
      const { currentUserPostListDetails } = this.props;
        if (!userPostList) {
            return <div>
                {" "}
                <Spinner color="dark" />
              </div>;
        }
        let postList = userPostList.map(post => {
            //refactor this into a new component
          return <div>
            <PostLists postLists={post}/>
          </div>
            });
        return <div>
            <h3>
              {userPostList ? `Here are all your previous posts 
                ${this.props.currentUserPostListDetails.name}, you currently have a total of ${postList.length} posts.` : <Spinner color="dark" />}
            </h3>
            <h5>You can do better. Create a new post here,</h5>
            <div>
              <Button onClick={this.createNewPost}>
                {createPost ? "Hide Post" : "Create Post"}
              </Button>
              <div>
                {createPost ? (
                  <CreatePost
                    userIds={currentUserPostListDetails}
                    allPostList={postList}
                  />
                ) : null}
              </div>
            </div>
            {!postList ? <div>
                {" "}
                <Spinner color="dark" />
              </div> : postList}
          </div>;
    } 

}


export default PostList;