import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import AdminMain from "./Pages/Admin/Main";
import Home from "./Pages/Website/Home";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          }
        ]
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [

        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
