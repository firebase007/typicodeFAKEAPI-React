import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      userName: "",
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
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
    console.log(this.state.userName, "username");
    this.setState({
      userName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { userName, users } = this.state;
    if (!userName) {
      console.log("kindly enter a username");
    }
    users.map(user => {
             if (user.username===userName.trim()) {
               history.push({
                 pathname: `/user/${user.username}`,
                 state: { user: user }
               });
             } else {
               console.log("kindly check your username again, and input the right value");
            } 
  
    });  
  };

  render() {
    const { userName } = this.state;
    return <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <form onSubmit={e => {
            this.handleSubmit(e);
          }} style={{maxWidth:"50%",marginTop:"150px", maxHeight:"80%" }}>
          <h1 className="">
            Please Login here. Only your user name is required!
          </h1>
          <input value={userName} type="text" name="username" onChange={this.handleChange} required={true} style={{ height: "30px", width:"200px", borderRadius:"5px" }} />
          <button style={{flexDirection:"column", borderStyle:"1px solid grey",marginTop:"15px"}} onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>;
  }
}

export default Login;
