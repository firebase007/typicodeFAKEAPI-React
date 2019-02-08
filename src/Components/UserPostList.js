import React from 'react';
import {  Spinner, Button } from "reactstrap";
import PostLists from './PostLists';
import CreatePost from './CreatePost';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            userPostList: [],
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


    render() {
      const { userPostList } = this.state;
      const { currentUserPostListDetails } = this.props;
        if (!userPostList) {
            return <div>
                {" "}
                <Spinner color="dark" />
              </div>;
        }
        let postList = userPostList.map(post => {
          return <div>
            <PostLists postLists={post}/>
          </div>
            });
      return <div>
          <div>
            <h3 style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              {userPostList ? `Here are all your previous posts 
                ${this.props.currentUserPostListDetails.name}, you currently have a total of ${postList.length} posts.` : <Spinner color="dark" />}
            </h3>
            <h5 style={{ margin: "20px" }}>
              You can do better ...
            </h5>
            <div>
                <CreatePost
                  userIds={currentUserPostListDetails}
                  allPostList={postList}
                />
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