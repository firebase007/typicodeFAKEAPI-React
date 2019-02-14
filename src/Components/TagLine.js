import React from 'react';
import { Spinner } from 'reactstrap';
import CreatePost from './CreatePost';


const Tagline = (props) => {
    return <div>
        <div>
          <h3 style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {props.userPostList ? `Here are all your previous posts 
                ${props.currentUserPostListDetails.name}, you currently have a total of ${props.postList.length} posts.` : <Spinner color="dark" />}
          </h3>
          <h5 style={{ margin: "20px" }}>
            You can do better, {props.currentUserPostListDetails.username}{" "}
            ...
          </h5>
          <div>
            <CreatePost userDetails={props.currentUserPostListDetails} allPostList={props.userPostList} />
          </div>
        </div>
        {!props.postList ? <div>
            {" "}
            <Spinner color="dark" />
          </div> : props.postList}
      </div>;
}


export default Tagline;