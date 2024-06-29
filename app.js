const apiKey = "465a287e155486190f4025b22a0f444f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=srinagar&appid=${apiKey}`;
const btn = document.querySelector("button");
const input = document.querySelector("input");
const img = document.querySelector(".weather-icon");
const err_msg = document.querySelector(".err-msg");
const weather = document.querySelector(".weather");
const fetch_data = document.querySelector(".fetch-data");
const empty_data = document.querySelector(".empty");


btn.addEventListener("click",()=>{
    checkWeather(input.value)
    fetch_data.style.display = "block";
})
async function checkWeather(city){
    console.log("getting data...")
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    console.log(response)
    const data = await response.json();
    console.log(data)
     if(response.status == 400){
        fetch_data.style.display = "none";
        empty_data.style.display = "block";
        err_msg.style.display = "none";
        weather.style.display = "none";
    }else if(response.status == 404){
        fetch_data.style.display = "none";
        err_msg.style.display = "block";
        weather.style.display = "none";
        empty_data.style.display = "none";
    }else{
        fetch_data.style.display = "none";
        empty_data.style.display = "none";
        err_msg.style.display = "none";
        weather.style.display = "block";
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Clouds"){
        img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAYxJREFUaN7tmMERgyAQRS2BEizBEizBEiyBEizBEizBEiyB679Zgh1sLpsMIRgRAZOZdeYfNBPY94FdoCKi6p9VCYAACIAACIAAvF5OPgAUgBHACoAsrfxdVQmfpAAAOgCbE7irDUD3cwAA+oPAXXW3AABoAczs5MKuqwDnfSOhigJwsG4gDc9titDA/x8cNbkAPhbmzvcUMiEgwQDslNvJwr9RRvWpAFpP4xOAOjMAfRuJIAArt3vTYQEAEw3Awa8e55WVkeiuUQgBmD2ZQxUM/NVvLIDPeVM4+CQA603OXwZ4uq13MlEpLVah0wDqUADNDdzp/p7Gs5WYflDTvwMQgP4OgM2ey1zRdcSulgCY0gDGKoQTL9CJ3+00vbAO24zdjcY6rzhg78LcOabOKQCGBAAh6bhnwM0poNNVABU5R23V3wI5qAN7/ZszR8rOc4IKFrexXIDvPe22ya5VDq5bngs2dhTbrNcqBwAmUQIYiwNk2EPp0gBNrp2pXO4KgAAIgAAIgAAIgAC86wECCuvGtH3EIQAAAABJRU5ErkJggg==";
    }else if(data.weather[0].main == "Clear"){
        img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=";
    }else if(data.weather[0].main == "drizzle"){
        img.src="http://openweathermap.org/img/wn/10d@2x.png";
    }else if(data.weather[0].main == "mist"){
        img.src="http://openweathermap.org/img/wn/02d@2x.png";
    }
}
}
// const apiKey = "&appid=465a287e155486190f4025b22a0f444f";
// // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=gulmarg";
// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const img = document.querySelector(".weather-icon");
// btn.addEventListener("click",()=>{
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${input.value}`;
// checkWeather(apiUrl)
// })
// async function checkWeather(apiUrl){
//     console.log("getting data...")
//     const response = await fetch(apiUrl + apiKey)
//     console.log(response)
//     const data =await response.json();
//     console.log(data)
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
//     document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
//     // if(data.){}
//     if(data.weather[0].main == "Clouds"){
//         img.src="C:/Users/Dell/Downloads/cloud.png";
//         // img.src ="https://png.pngtree.com/png-clipart/20200225/original/pngtree-rain-icon-creative-design-template-png-image_5259110.jpg"

//         // img.src="https://commons.wikimedia.org/wiki/File:Rain_2.gif"
//     }else if(data.weather[0].main == ""){
//         img.src ="https://png.pngtree.com/png-clipart/20200225/original/pngtree-rain-icon-creative-design-template-png-image_5259110.jpg"
//     }
//     else{
//         img.src="https://upload.wikimedia.org/wikipedia/commons/0/08/Weather_icon_-_sunny.svg";

//     }
//     console.log(data.weather[0].main)
// }


