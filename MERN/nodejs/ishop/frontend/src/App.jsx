import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteMain from "./Pages/Website/Main";
import AdminMain from "./Pages/Admin/Main";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import CategoryView from "./Pages/Admin/Category/View";
import ProductView from "./Pages/Admin/Product/View";
import ColorView from "./Pages/Admin/Color/View";
import ColorAdd from "./Pages/Admin/Color/Add";
import ColorEdit from "./Pages/Admin/Color/Edit";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductEdit from "./Pages/Admin/Product/Edit";

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
            path: "product",
            element: <ProductView />
          },
          {
            path: "product/add",
            element: <ProductAdd />
          },
          {
            path: "product/edit/:id",
            element: <ProductEdit />
          },
          {
            path: "color",
            element: <ColorView />
          },
          {
            path: "color/add",
            element: <ColorAdd />
          },
          {
            path: "color/edit/:id",
            element: <ColorEdit />
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
