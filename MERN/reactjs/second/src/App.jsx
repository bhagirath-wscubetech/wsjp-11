import Person from "./Person";
function App() {

    const data = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg",
            name: "Monu",
            age: "25",
            gender: "M",
            highlight: true
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
            name: "Prem",
            age: "50",
            gender: "M",
            highlight: true
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
            name: "Ramesh",
            age: "5",
            gender: "M",
            highlight: false
        }
    ]
    return (
        <div className="container">
            {
                data.map(
                    (d, i) => {
                        return <Person key={i} highlight={d.highlight} img={d.img} name={d.name} u_age={d.age} gender={d.gender} />
                    }
                )
            }
        </div>
    )
}

export default App;