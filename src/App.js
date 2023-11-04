import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Posttype from "./pages/Post_type.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post/:id",
        element: <Single></Single>,
      },
      {
        path: "/Write",
        element: <Write></Write>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/post-details/:id/:cat",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/posts/:type",
        element: <Posttype></Posttype>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
]);

function App() {
  return (
    <>
      <div className="app flex justify-center ">
        <div className="container w-[1024px]">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </>
  );
}

export default App;
