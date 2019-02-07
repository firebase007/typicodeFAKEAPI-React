import React from "react";
import {
  Jumbotron,
  Badge,
  Button,
  Fade,
  Container,
} from "reactstrap";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import UserPostList from './UserPostList';


const ButtonWrapper = styled.div`
  margin-right: 20px;
`;

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { user: null, fadeIn: false };
  }

  componentDidMount() {
    const currentUser = this.props.location.state.user;
    console.log(currentUser, "current-user");
    this.setState({ user: currentUser });
  }

    handleLogout = e => {
      e.preventDefault();
      const { history } = this.props;
      localStorage.removeItem("username");
      history.push("/login");
    };
  
  toggleFadeIn = () => {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    const { user, fadeIn } = this.state;
    if (localStorage.getItem("username") === user) {
      return <Redirect to="/login" />;
    }
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
            <h1 className="display-3">Welcome, {user.name}!</h1>
            <hr className="my-2" />

            <div>
              <span>
                {" "}
                <h6>
                  Just to be sure this is your personal space, preview your
                  personal information ...
                </h6>
              </span>
            </div>
            {!fadeIn ? <p className="lead">
                <Button color="primary" onClick={this.toggleFadeIn}>
                  Preview Personal Info
                </Button>
              </p> : <Fade in={fadeIn} tag="h5" className="mt-3">
                <div style={{ border: "1px solid grey", maxWidth: "420px", marginBottom: "15px", padding: "5px" }}>
                  <div
                    style={{
                    position: "absolute",
                    left: "350px",
                    color: "grey",
                    cursor: "pointer"
                  }}
                  onClick={this.toggleFadeIn}
                  >
                   <Badge color="info">Close</Badge> 
                  </div>
                  <div>
                    website: <Badge color="light" pill>
                      <a href="/">{user.website}</a>
                    </Badge>
                  </div>
                  <div>
                    e-mail: <Badge color="light" pill>
                      {user.email}
                    </Badge>
                    <div>
                      address:<Badge color="light" pill>
                        {user.address.street},{user.address.suite},{user.address.city}
                      </Badge>
                    </div>
                    <div>
                      phone:
                      <Badge color="light" pill>
                        {user.phone}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    company: <Badge color="light" pill>
                      {user.company.name}
                    </Badge>
                  </div>
                  <div>
                    zipcode:<Badge color="light" pill>
                      {user.address.zipcode}
                    </Badge>
                  </div>
                </div>
              </Fade>}
          </Container>
        </Jumbotron>
        <UserPostList currentUserPostListDetails={user} />
      </div>;
  }
}

export default User;
