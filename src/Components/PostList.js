import React from 'react';
import Comments from './Comments';
import CreatePost from './CreatePost';

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
        console.log(this.props.currentLoggedInUser, "currentUser")
        const currentUserPostList = this.props.currentLoggedInUser
        console.log(currentUserPostList.id, "id");
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
        const { userPostList,createPost } = this.state;
        if (!userPostList) {
            return <div>Loading ...</div>
        }
        let postList = userPostList.map(post => {
            //refactor this into a new component
            return <div key={post.id}>
                <div>
                    <h3>{post.title}</h3>
                </div>
                <div>{post.body}
                    <span><Comments postComment={post}/></span>
                </div>
                <hr />
            </div>;
        });
        return <div>
            <h3>
              Here is your post history {this.props.currentLoggedInUser.name},you currently have a total post count of {postList.length}
            </h3>
            <h5>Wanna add to that number? Create a new post here,</h5>
            <div>
              <button onClick={this.createNewPost}>
                {createPost ? "Hide Post" : "Create Post"}
              </button>
              <div>
                {createPost ? (
                  <CreatePost
                            userIds={this.props.currentLoggedInUser}
                            allPostList = {postList}
                  />
                ) : null}
              </div>
            </div>
            <hr />
            {!postList ? <div>Loading ...</div> : postList}
          </div>;
    } 

}


export default PostList;