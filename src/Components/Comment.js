import React from 'react';
import { Badge } from "reactstrap";
const Comment = (props) => {
    return <div key={props.allCommenters.id}>
        <hr />
        <div>
          <Badge color="dark" pill>
            Comment-{props.allCommenters.id}:
          </Badge> {props.allCommenters.body}
        </div>
            <div>
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
        
      </div>;
}


export default Comment;