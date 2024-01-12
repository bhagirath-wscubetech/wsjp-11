import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchMovies = async () => {
    let API = "";
    setMovies([]);
    if (name.length == 0) {
      API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
    } else {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`;
    }
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(
    () => {
      fetchMovies()
    },
    [name, page]
  )

  console.log("movies", movies);
  const nameChangeHandler = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  const prevHandler = () => {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  const nextHandler = () => {
    if (numbers.length != page) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <div className="text-center">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li onClick={prevHandler}>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {
              numbers.map(
                (num) => {

                  return <li key={num} onClick={() => setPage(num)}>
                    <a
                      href="#"
                      className={`${num == page ? 'bg-blue-400 !text-white' : ''} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                      {num}
                    </a>
                  </li>
                }
              )
            }
            <li onClick={nextHandler}>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-[1200px] shadow-lg mx-auto p-3 my-2">
        <input type="text" value={name} className="p-3 border rounded w-full focus:outline-none" onChange={nameChangeHandler} />
        {
          movies.length == 0
            ? <div className="my-3 text-center text-xl text-gray-400 animate-pulse"> Loading... </div>
            : <div className="grid grid-cols-4">
              {
                movies.map(
                  (movie, index) => <Box key={index} data={movie} />
                )
              }
            </div>
        }

      </div>
    </>
  );
}

export default App;


const Box = ({ data }) => {
  return (
    <div className="p-2">
      <div className="border relative overflow-hidden group">
        <div className="duration-300 group-hover:left-[0] w-full h-full absolute top-0 left-[100%] bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center">
          <div className="text-[25px] text-center font-bold text-white">{data.title}</div>
          <div className="text-[20px] text-center font-bold text-white">{data.vote_average} ⭐</div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} alt="" />
      </div>
    </div>
  )
}