import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
import CreatePost from "../pages/createPost/CreatePost"
import Onboarding from "../pages/onboarding/Onboarding"
import PostDetail from "../pages/postdetail/PostDetail"
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
          path: "/posts/:postId",
          element: <PostDetail 
            categoryTitle="아아"
            type="부원모집"
            title="집가고싶다"
            organizer="쿠잇"
            startTime="2025:01:04:05:10"
            endTime="2025:01:05:05:10"
            place="건대 신공"
            contents="아아아"
            organizer_link="www.naver.com"
            postId={1}
          />
        },
        {
            path: "/posts/:postId/reaction", // postId를 파라미터로 받기
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