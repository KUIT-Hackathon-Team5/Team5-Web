import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
import CreatePost from "../pages/createPost/CreatePost"
import Onboarding from "../pages/onboarding/Onboarding"
//import PostDetail from "../pages/postdetail/PostDetail"
import Reaction from "../pages/reaction/Reaction"

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/createpost",
          element: <CreatePost />
        },
        {
          path: "onboarding",
          element: <Onboarding />
        },
        {
          //path: "/postdetail",
          //element: <PostDetail />
        },
        {
            path: "/reaction",
            element: <Reaction />
        },
        {
            path: "/signup",
            element: <Signup />
          },
        {
            path: "/login",
            element: <Login />
          }
      ]);
    
      return <RouterProvider router={router} />;
}

export default Router