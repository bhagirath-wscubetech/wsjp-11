import NavBar from "./components/NavBar";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "gallery",
            element: <Gallery />
          },
          {
            path: "courses",
            element: <Courses />
          }
        ]
      }
    ]
  )
  // const routes = createBrowserRouter(
  //   [
  //     {
  //       path: "/",
  //       element: <Home />
  //     },
  //     {
  //       path: "/about",
  //       element: <About />
  //     },
  //     {
  //       path: "/gallery",
  //       element: <Gallery />
  //     },
  //     {
  //       path: "/courses",
  //       element: <Courses />
  //     }
  //   ]
  // )
  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
