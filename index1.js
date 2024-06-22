// console.log("helllo jee ");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
async function fetchWeatherDetails(){
    try{
    let city ="Indore";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data =await response.json();
    console.log("weather data :->" , data);
    renderWeatherInfo(data);
    }
    catch(e){
        //handle the error 
        console.log("error found "+ err);
    }
 
}
function renderWeatherInfo(data){
    let newpara = document.createElement('p');
    newpara.textContent=`${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newpara);
}

async function getCustomWeatherDetails(){
    try{
        let latitude = 15.6333;
    let longitude = 18.3333;
    let result =  await    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let data = await result.json() ;
    console.log(data);
    }
    catch(err){
        console.log("error found "+ err);

    }  
}


function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("no geo location access");
        //HW - show an alert for no gelolocation support available

    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
    console.log(lat);
    console.log(longi);
}
