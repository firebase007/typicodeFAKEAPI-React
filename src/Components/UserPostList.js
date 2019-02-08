import React from 'react';
import {  Spinner } from "reactstrap";
import PostLists from './PostLists';
import CreatePost from './CreatePost';
import TagLine from './TagLine';

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
          <TagLine userPostList={userPostList} postList={postList} currentUserPostListDetails={currentUserPostListDetails}/>
            </div>
        </div>;
    } 

}


export default PostList;