// API
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=c39ceed0b5580f03120ea7a975e58b7b


let city = "patna";

// const searchBox = document.querySelector(".search");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click",()=>{
    city= document.querySelector(".searchInput").value;
    document.querySelector(".searchInput").value = "";
    mainApi();
})



async function mainApi(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c39ceed0b5580f03120ea7a975e58b7b`);
    var data = await response.json();


    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp-value").innerHTML = `${Math.floor((data.main.temp)/10)}&deg;c `;
    document.querySelector(".humi-value").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".ws-value").innerHTML = `${data.wind.speed} km/h`;
    let weatherImage = document.querySelector(".temp-image");

    if(data.weather[0].main === "Clear"){
        weatherImage.style.background = "url('images/clear.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }else if(data.weather[0].main === "Rain"){
        weatherImage.style.background = "url('images/rain.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }else if(data.weather[0].main === "Clouds"){
        weatherImage.style.background = "url('images/clouds.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }else if(data.weather[0].main === "Mist"){
        weatherImage.style.background = "url('images/mist.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }else if(data.weather[0].main === "Haze"){
        weatherImage.style.background = "url('images/drizzle.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }else if(data.weather[0].main === "Snow"){
        weatherImage.style.background = "url('images/snow.png')" 
        weatherImage.style.backgroundSize =  "contain" 
    }


} 



mainApi();