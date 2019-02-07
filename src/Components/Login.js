import React, { Component } from "react";
import base_url from "../utils/api";
import { Alert } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      users: []
    };
  }

  componentDidMount() {
    fetch(`${base_url}/users`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        if (responseData) {
          this.setState({ users: responseData });
        }
      })
      .catch(error => {
        return error;
      });
  }

  handleChange = e => {
    this.setState({
      userName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { userName, users } = this.state;
    if (!userName) {
      return (
        <div>
          <Alert color="warning">kindly enter a username!</Alert>;
        </div>
      );
    }
    users.map(user => {
      if (user.username === userName.trim()) {
        localStorage.setItem("username", JSON.stringify(user.username));
        history.push({
          pathname: `/user/${user.username}`,
          state: { user: user }
        });
      } else {
        return (
          <div>
            <Alert color="warning">
              kindly check your username again, and input the right value!
            </Alert>
            ;
          </div>
        );
      }
    });
  };

  render() {
    const { userName } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          style={{ maxWidth: "50%", marginTop: "150px", maxHeight: "80%" }}
        >
          <h1 className="">
            Please Login here. Only your user name is required!
          </h1>
          <input
            value={userName}
            type="text"
            name="username"
            onChange={this.handleChange}
            required={true}
            style={{ height: "30px", width: "200px", borderRadius: "5px" }}
          />
          <button
            style={{
              flexDirection: "column",
              borderStyle: "1px solid grey",
              marginTop: "15px"
            }}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
