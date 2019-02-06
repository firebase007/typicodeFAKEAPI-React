import React from "react";
import { Jumbotron, Button, Fade, Container } from "reactstrap";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import PostList from './PostList';


const ButtonWrapper = styled.div`
  margin-right: 20px;
`;
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { user: null, isLoggedIn: true, fadeIn: true };
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
  
  toggle = () => {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    const { user, isLoggedIn, fadeIn } = this.state;
    // if (!isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }
    if (!user) {
      return <div>Loading ...</div>;
    }
    return <div style={{ minHeight: "100px", padding: "5em inherit" }}>
        <Jumbotron fluid>
          <Container fluid>
            <ButtonWrapper>
              <Button onClick={this.handleLogout} className="" color="secondary">
                Logout
              </Button>
            </ButtonWrapper>
            <h1 className="display-3">Welcome, {user.name}</h1>
            <hr className="my-2" />
            <p className="lead">
              <Button color="primary" onClick={this.toggle}>
                Preview Personal Info
              </Button>
            </p>
            {fadeIn ? <Fade in={fadeIn} tag="h5" className="mt-3">
                <div style={{ border: "1px solid grey", maxWidth: "420px", marginBottom: "15px", padding:"5px" }}>
                  <div>
                    website: <a href="/">{user.website}</a>
                  </div>
                  <div>
                    e-mail: {user.email}
                    <div>
                      address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </div>
                    <div>phone no: {user.phone}</div>
                  </div>
                  <div>company details: {user.company.name}</div>
                </div>
              </Fade> : <span>
                {" "}
                <h6>
                  Click on the button above to preview your personal
                  information
                </h6>
              </span>}
          </Container>
        </Jumbotron>
        <PostList currentLoggedInUser={user} />
      </div>;
  }
}

export default User;
