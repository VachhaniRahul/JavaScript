// wether app


const wetherForm = document.querySelector(".wetherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector('.card');
const apiKey = "a4f4a12985d6b2c90dfdd25f977a640a";



wetherForm.addEventListener('submit', async function(event){

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const wetherData = await getWetherData(city);
            displayWetherInfo(wetherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }

});


async function getWetherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const reponse = await fetch(apiUrl);

    console.log(reponse);

    if(!reponse.ok){
        throw new Error("Could not fetch wether data");
    }


    return await reponse.json();
    
}

function displayWetherInfo(data){

    const { name: city, 
            main: {temp, humidity},
            weather: [{description, id}]} = data;
        
    card.textContent = "";
    card.style.display = "felx";

    const cityDisplay = document.createElement("h1");    
    const tempDisplay = document.createElement("p");    
    const humidityDisplay = document.createElement("p");    
    const descDisplay = document.createElement("p");    
    const wetherEmoji = document.createElement("p");   
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity : ${humidity}%`;
    descDisplay.textContent = description;
    wetherEmoji.textContent = getWetherEmoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    wetherEmoji.classList.add("wetherEmoji");



    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(wetherEmoji);

}

function getWetherEmoji(wetherId){
    
    switch(true){
        case (wetherId >= 200 && wetherId < 300):
            return "🌧️";
        
        case (wetherId >= 300 && wetherId < 400):
            return "🌧️";

        case (wetherId >= 500 && wetherId < 600):
            return "🌧️";
        
        case (wetherId >= 600 && wetherId < 700):
            return "❄️";

        case (wetherId >= 700 && wetherId < 800):
            return "💨";
        
        case (wetherId === 800):
            return "🌞";
        
        case (wetherId >= 801 && wetherId < 810):
             return "☁️";
        
        default:
            return "🫡";

        

    }

}

function displayError(message){

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}