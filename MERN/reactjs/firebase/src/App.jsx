import Form from "./Form";
import Listing from "./Listing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-5">
      <Listing />
      <Form />
    </div>
  );
}

export default App;
