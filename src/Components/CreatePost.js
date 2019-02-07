import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props, "createpost");
    this.state = { post: "", title: "", modal: false };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { allPostList, userIds } = this.props;
    const userId = userIds.id;

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
    return <div>
          <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              Title: <input type="text" value={title} onChange={this.handleTitleChange} className="" />
        </div>
        <div>
          Body:
          <textarea rows="4" cols="50" type="text" value={post} onChange={this.handlePostChange} className="" />
        </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>
                Create Post
              </Button> <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
    </div>
  ;
  }
}



export default CreatePost;