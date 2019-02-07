import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import Comments from './Comments';

const PostLists = (props) => {
    return <div>
        <ListGroup>
          <div key={props.postLists.id}>
            <ListGroupItem>
              <div>
                <h3>{props.postLists.title}</h3>
              </div>
              <div>
                {props.postLists.body}
                <span>
                  <Comments postComment={props.postLists} />
                </span>
              </div>
            </ListGroupItem>
          </div>
        </ListGroup>
      </div>;
}


export default PostLists;