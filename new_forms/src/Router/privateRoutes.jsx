import  UserList  from "../Pages/users/UserList";
import  UserDetail from "../Pages/users/UserDetail";
import { Navigate } from "react-router-dom";

const privateRoutes = (token) => [
  {
    path: "/list",
    element: token ? <UserList /> : <Navigate to="/login" />,
  },
  {
    path: "/details/:id",
    element: token ? <UserDetail /> : <Navigate to="/login" />,
  },
];
export default privateRoutes;