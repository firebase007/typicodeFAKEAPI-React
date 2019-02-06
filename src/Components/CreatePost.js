import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
      super(props);
      console.log(this.props, "createpost")
    this.state = {
      post: "",
      title: ""
    };
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

  render() {
    const { title, post } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={this.handleTitleChange}
            className=""
          />
        </div>
        <div>
          Body:
          <textarea
            rows="4"
            cols="50"
            type="text"
            value={post}
            onChange={this.handlePostChange}
            className=""
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Create Post</button>
        </div>
      </form>
    );
  }
}



export default CreatePost;