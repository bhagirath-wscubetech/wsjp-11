import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Add from "./Pages/Add";
import View from "./Pages/View";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Play from "./Pages/Play";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7_jn8VQQZe7d4U9gQLNxwuYA2BfD_XE",
  authDomain: "wsjp-14.firebaseapp.com",
  databaseURL: "https://wsjp-14-default-rtdb.firebaseio.com",
  projectId: "wsjp-14",
  storageBucket: "wsjp-14.appspot.com",
  messagingSenderId: "25891422835",
  appId: "1:25891422835:web:c21edc576ce1920b89e006"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <View />
          },
          {
            path: "/add",
            element: <Add />
          },
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/signup",
            element: <Signup />
          },
          {
            path: "/play",
            element: <Play />
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
