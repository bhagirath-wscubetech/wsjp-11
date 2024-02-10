import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  const fetchUser = () => {
    axios.get("http://localhost:5000/get-users")
      .then(
        (success) => {
          setUser(success.data.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      fetchUser()
    }, []
  )

  function submitHandler(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    axios.post("http://localhost:5000/add-user", JSON.stringify(data))
      .then(
        (success) => {
          event.target.reset();
          fetchUser()
        }
      ).catch(
        (error) => {

        }
      )
  }
  function deleteUser(userId) {
    axios.delete(`http://localhost:5000/delete-user?id=${userId}`)
      .then(
        (success) => {
          fetchUser()
        }
      ).catch(
        (error) => {

        }
      )
  }

  return (
    <div className="max-w-[1200px] mx-auto border h-[400px] grid grid-cols-4">
      <div className="col-span-3 border border-red-500 p-3">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
              users.map(
                (user) => {
                  return (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <button onClick={() => deleteUser(user.id)} className="btn p-3 text-white bg-red-600">Delete</button>
                        </div>
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
      <div className="border border-blue-500">
        <form onSubmit={submitHandler} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
