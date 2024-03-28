//MAKING A WEATHER APPLICATION
//Transfer all ID's to the JS Document

let searchInput = document.getElementById("search-Input");
let searchBtn = document.getElementById("search-Btn");
let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-Icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");


//Functionality to the search
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();  //Prevent natural actions of the system from happening
    getWeather(searchInput.value); //will be equal to data collected
    searchInput.value = "";

})

const getWeather = async (city) => {
    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${city}&appid= c19c74f703b1e87d84a4864a98de42f4`,
        {mode: `cors`}
        )

        const weatherData = response.json();
        console.log(weatherData)
        const name = weatherData;
        const feels_like = weatherData.main;
        const {id,main} = weatherData.weather;

        loc.textContent=name;
        climate.textContent = main;
        tempValue.textContent = Math.random(feels_like - 273);

        if(id <300 && id > 200)
         {
            tempIcon.src = "./icons/thunderstorm.svg"
        } else if (id < 400 && id > 300)
         {
            tempIcon.src="./icons/cloud-solid.svg"
        } else if(id < 500 && id >400) 
        {
            tempIcon.src="./icons/rain.svg"
        } else if ( id < 600 && id >500)
         {
            tempIcon.src="./icons/rain.svg"
        }else if(id < 700 && id > 600)
        {
           tempIcon.src="./icons/snow.svg"
       } else if (id < 800 && id > 700) {
           tempIcon.src="./icons/clouds.svg"
       } else if (id == 800) {
         tempIcon.src="./icons/clouds-and-sun.svg"
       }

    }
    catch(error) {
        alert("City has not been found")
    }

        
       

        
    
    
};


window.addEventListener("load", () => {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
       
        const api =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c19c74f703b1e87d84a4864a98de42f4`
        fetch(api).then((response) => {
            return response.json;
        })
        .then(data => {

            const name = data;
            const feels_like = data.main;
            const {id,main} = data.weather[0];

            loc.textContent=name;
            climate.textContent = main;
            tempValue.textContent = Math.random(feels_like-273);

            if(id <300 && id > 200) {
                tempIcon.src = "./icons/thunderstorm.svg"
            } else if (id < 400 && id > 300) {
                tempIcon.src="./icons/cloud-solid.svg"
            } else if (id < 500 && id >400) {
                tempIcon.src="./icons/rain.svg"
            } else if ( id < 600 && id >500) {
                tempIcon.src="./icons/rain.svg"
            } else if (id < 700 && id > 600) {
                tempIcon.src="./icons/snow.svg"
            } else if (id < 800 && id > 700) {
                tempIcon.src="./icons/clouds.svg"
            } else if (id == 800) {
                tempIcon.src="./icons/clouds-and-sun.svg"
            }

           console.log(data);
        }
            )
    })
}

})