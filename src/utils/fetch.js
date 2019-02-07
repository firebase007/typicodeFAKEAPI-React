import base_url from "./api";

// get all users from the api - typicode

export const getAllUsers = () => {
    fetch(`${base_url}/users`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        if (responseData) {
            return responseData;
        }
      })
      .catch(error => {
        return error;
      });
}

// allow a user create a new post

export const createPost = () => {
    
}



