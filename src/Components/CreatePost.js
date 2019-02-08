import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from "reactstrap";


class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props, "createpost");
    this.state = { post: "", title: "", modal: false };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { allPostList, userDetails } = this.props;
    const { modal } = this.state;
    const userId = userDetails.id;
    
    this.setState({
      modal: !modal
    })

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: `${this.state.title}`,
        body: `${this.state.post}`,
        userId: `${userId}`
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        if (responseData) {
          console.log(allPostList.push(responseData));
        }
      })
      .catch(error => {
        return error;
      });
  };

  handlePostChange = e => {
    this.setState({
      post: e.target.value
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { title, post } = this.state;
    const { userDetails } = this.props;
    return <div>
        <div>
          <Button onClick={this.toggleModal} style={{ marginLeft: "25px", marginBottom: "7px" }}>
            Create New Post
          </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Hey {userDetails.username}, create a new post here
          </ModalHeader>
          <ModalBody>
            <div>
              <Badge color="light">title:</Badge> <input type="text" value={title} onChange={this.handleTitleChange} style={{ borderRadius: "3px", margin: "5px" }} />
            </div>
            <div>
              <span style={{ marginTop: "20px" }}>
                <Badge color="light">post:</Badge>
              </span>
              <textarea rows="3" cols="50" type="text" value={post} onChange={this.handlePostChange} style={{ borderRadius: "3px", margin: "5px" }} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Create Post
            </Button> <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}



export default CreatePost;