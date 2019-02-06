import React from 'react';

const Comment = (props) => {
    return <div key={props.allCommenters.id}>
        <div>Name:{props.allCommenters.name}</div>
        <div>E-mail: {props.allCommenters.email}</div>
        <div>Body: {props.allCommenters.body}</div>
        <hr/>
      </div>;
}


export default Comment;