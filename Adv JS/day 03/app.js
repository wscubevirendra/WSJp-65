const cityInp = document.querySelector("#city-input");
const result = document.querySelector("#weather-result");
const api_key = `21805bff7224936fa25d6cec016a0a4b`;

cityInp.addEventListener(
    'keyup',
    async function (event) {
        if (event.key == "Enter") {
            let cityName = event.target.value;
            if (cityName == "") {
                cityInp.focus()
                return
            }
            cityInp.disabled = true;
            


            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;
            cityInp.disabled = false;


            const responce = await fetch(weatherURL);
            if (responce.status == 200) {
                const data = await responce.json()
                result.innerHTML = `
                <h2 class="city">${cityName}</h2>
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
            <p class="temperature">${data.main.temp}</p>
            
            <p class="condition">${data.weather[0].main}</p>
                `
            } else if (responce.status == 404) {
                result.innerHTML = "<h1 class='found'>City Not Found </h1>"
            }


        }
    }
)