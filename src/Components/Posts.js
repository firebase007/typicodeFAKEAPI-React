import React from "react";
// import fetch from 'whatwg-fetch';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({ allPosts: responseData });
      })
      .catch(error => {
        return error;
      });
  }

    render() {
        if (this.state.allPosts.length === 0) {
            return (
                <div>
                ...Loading
                </div>
          )
      }
    return (
      <div>
        <div>
          {this.state.allPosts.map(post => {
            return <div key={post.id}>
                <h1>Posts: {post.id} </h1>
                <div>
                  Title: {post.title}
                </div> <div>Body: {post.body}</div>
                <hr />
              </div>;
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
