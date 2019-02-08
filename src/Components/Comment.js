import React from 'react';
import { Badge, Button, Fade } from "reactstrap";
const Comment = (props) => {
    return <div key={props.allCommenters.id}>
        <hr />
        <div style={{ margin: "10px" }}>
          <Badge color="dark" pill>
            Comment-{props.allCommenters.id}:
          </Badge> {props.allCommenters.body}
        </div>
        <div style={{ marginBottom: "-5px" }}>
          <Button color="info" onClick={props.onButtonClick}>
            More Info
          </Button>
        </div>
        {props.onButtonClick ? <Fade in={props.in} tag="h5" className="mt-3">
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
        </Fade>: null}
      </div>;
}


export default Comment;