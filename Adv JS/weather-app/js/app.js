const searchBox = document.querySelector("#search");
const API_KEY = `21805bff7224936fa25d6cec016a0a4b`
const weather = document.querySelector("#weather");
const loader = document.querySelector("#loader");

searchBox.addEventListener(
    "keyup",
    async function (event) {
        if (event.key == "Enter") {
            // console.log(searchBox.value);

            if (searchBox.value == "") {
                searchBox.classList.add("danger");
                setTimeout(
                    () => {
                        searchBox.classList.remove("danger");
                    },
                    1500
                )
                return;
            }
            loader.style.display = "flex";

            const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${API_KEY}&units=metric`;

            const response = await fetch(api);
            if (response.status == 200) {
                const data = await response.json();
                // console.log(data);
                // console.log(data.weather[0].main)
                // console.log(data.weather[0].icon)
                // console.log(data.main.temp);
                weather.innerHTML = `
                    <div>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                    </div>
                    <div>
                        <h2>${data.main.temp} ℃</h2>
                        <h4> ${data.weather[0].main} </h4>
                    </div> 
                `
            } else {
                weather.innerHTML = "<h1> City Not Found </h1>"
            }

            loader.style.display = "none";
        }
    }
)