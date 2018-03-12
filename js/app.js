$(document).foundation()


const firsAjax = ()=>{
  const url= "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4d9a81218adf15a76b4861c56b81baf/37.8267,-122.4233"
  fetch(url)
      .then( response => response.json()).then( json => drawWeather(json));
};

firsAjax();

const drawWeather = function(json){
  console.log(json);
  const weatherTodayContainer = document.getElementById("weather-today-container");
  const weatherForecatsContainer = document.getElementById("weather-forecast-container");

    let template = `
        <div class="clima">
        <div>Temperatura:${json.currently.apparentTemperature}</div>
        <div>Humedad:${json.currently.humidity}</div>
        <div>UV:${json.currently.uvIndex}</div>
        <div>Presión:${json.currently.pressure}</div>
        </div>`;
      weatherTodayContainer.innerHTML = template;

    let templateForcast = json.daily.data.forEach( day =>{
      let currentDay = ` 
      <div class="datosClima">
      <div>${unixDateToCurrentDate(day.time)}</div>
      <div>Icon:${day.icon}</div>
      <div>Temperature-high: ${day.temperatureHigh} and Temperature-min: ${day.temperatureMin}</div>
      </div>`;
      weatherForecatsContainer.insertAdjacentHTML('beforeEnd',currentDay);
    });
};

    const  unixDateToCurrentDate = function (unixnumber){
   //new - constructor
    console.log(new Date(unixnumber * 1000).toLocaleString("es-Mx", {weekday:"short"}));
    return new Date(unixnumber * 1000).toLocaleString("es-Mx", {weekday:"long"});
}
