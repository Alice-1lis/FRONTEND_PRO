const API_KEY = import.meta.env.API_KEY;
const city = 'Kyiv';
const button = document.getElementById('getWeatherBtn');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     let weatherInfo = `Temperature in ${city}: ${temperature}°C, ${description}`;
}
   try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.main.temp;
        const description = data.weather[0].description;
      
        document.getElementById('weatherInfo').textContent = weatherInfo;
        weatherInfo = `Temperature in ${city}: ${temperature}°C, ${description}`;
    }
   catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

button.addEventListener('click', () => {
    getWeather();
});




