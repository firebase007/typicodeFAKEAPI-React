import LoginComponent from "../Components/Login";
import PostsComponent from "../Components/Posts";
import FetchAllUsers from "../Components/FetchAllUsers";
import UserComponent from "../Components/User";

const Routes = [
  {
    path: "/login",
    component: LoginComponent
  },
  {
    path: "/posts",
    component: PostsComponent
  },
  {
    path: "/user/:username",
    component: UserComponent
  },

  {
    path: "/all-users",
    component: FetchAllUsers
  }
];

export default Routes;
