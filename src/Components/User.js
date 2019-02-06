import React from "react";
import { Redirect } from "react-router-dom";
import PostList from './PostList';

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      user: null,
      isLoggedIn: true
    };
  }

  componentDidMount() {
    const currentUser = this.props.location.state.user;
    console.log(currentUser, "current-user");
    this.setState({ user: currentUser });
  }

    handleLogout = e => {
      e.preventDefault();
      this.setState({
        isLoggedIn: false
      });
      const { history } = this.props;
      localStorage.removeItem("isLoggedin");
      history.push("/login");
    };

  render() {
    const { user, isLoggedIn } = this.state;
    // if (!isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }
    if (!user) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="">
        <button onClick={this.handleLogout} className="">
          Logout
        </button>{" "}
        <div classsName="">
          <h1 className="">Welcome, {user.name}</h1>
        </div>
        <div
          style={{
            border: "1px solid grey",
            maxWidth: "450px",
            marginBottom: "10px"
          }}
        >
          <div>
            Website: <a href="/">{user.website}</a>
          </div>
          <div>
            email: {user.email}
            <div>
              Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode}
            </div>
            <div>Phone: {user.phone}</div>
          </div>
          <div>Company details: {user.company.name}</div>
        </div>{" "}
        
            <PostList currentLoggedInUser={user}/>
      </div>
    );
  }
}

export default User;
