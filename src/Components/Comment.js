import React from 'react';

const Comment = (props) => {
    return <div key={props.allCommenters.id}>
        <hr/>
        <div>name:{props.allCommenters.name}</div>
        <div>email: {props.allCommenters.email}</div>
        <div>Comment: {props.allCommenters.body}</div>
      </div>;
}


export default Comment;