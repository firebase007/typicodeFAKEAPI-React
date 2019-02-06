import React, {Component} from 'react';
import Login from "./Login";

class FetchAllUsers extends Component {
    constructor() {
        super();
        this.state = {
            allUsers: [],
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({ allUsers: responseData });
            })
            .catch((error) => {
                return error;
        })
    };


    render() { 
        let usernames =  this.state.allUsers.map(eachUser => {
              return eachUser.username;
          }); 
        return (
            <div className="">
                {usernames.length > 0} &&
            {usernames}
            </div>
        );
    }
}


export default FetchAllUsers;