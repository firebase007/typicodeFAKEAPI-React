import React from 'react';
import { Badge } from "reactstrap";
const Comment = (props) => {
    return <div key={props.allCommenters.id}>
        <hr />
        <div>
          <h5>Comment-{props.allCommenters.id}</h5>
          <Badge color="dark" pill>
            name:
          </Badge>
          {props.allCommenters.name}
        </div>
        <div>
          <Badge color="dark" pill>
            email:
          </Badge> {props.allCommenters.email}
        </div>
        <div>
          <Badge color="dark" pill>
            Comment:
          </Badge> {props.allCommenters.body}
        </div>
      </div>;
}


export default Comment;