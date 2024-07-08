
const apikey ="959d504ebcb39ef82476ab8bbc035485";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srch = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon")
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "clouds")
        {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Snow")
            {
                weatherIcon.src = "images/snow.png";
            }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weth").style.display = "block";
}
btn.addEventListener("click", ()=>{
    checkWeather(srch.value);
})