import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import AdminMain from "./Pages/Admin/Main";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import CategoryView from "./Pages/Admin/Category/View";
import ProductView from "./Pages/Admin/Product/View";

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
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "category",
            element: <CategoryView />
          },
          {
            path:"product",
            element:<ProductView/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
