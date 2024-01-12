// https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=21805bff7224936fa25d6cec016a0a4b&units=metric
var searchBox = document.querySelector("#search");
var weatherBox = document.querySelector("#weatherBox");

searchBox.addEventListener(
    "keyup",
    async function (event) {
        if (event.key == "Enter") {
            searchBox.disabled = true;
            weatherBox.innerHTML = `
                <div class="dataBox">
                    <h1 class="loader">Loading.... </h1>
                </div>  
             `


            var city = searchBox.value;
            var api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
            var response = await fetch(api);
            var data = await response.json();
            if (data.cod == 404) {
                weatherBox.innerHTML = `
                <div class="dataBox">
                    <h1>City Not Found</h1>
                </div>  
            `
            } else {
                weatherBox.innerHTML = `
                <div class="imgBox">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </div>
                <div class="dataBox">
                    <h1>${data.main.temp} ℃</h1>
                    <h4>${data.weather[0].main}</h4>
                </div>  
            `
            }
            searchBox.disabled = false;

        }
    }
)