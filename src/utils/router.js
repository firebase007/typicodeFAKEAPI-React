import LoginComponent from "../Components/Login";
import UserComponent from "../Components/User";

const Routes = [
  {
    path: "/login",
    component: LoginComponent
  },
  {
    path: "/user/:username",
    component: UserComponent
  }
];

export default Routes;
