const apiKeyWeather = 'cf618c05bb03c13715c40bc8fd1d861b';
const cityWeather = 'Київ';
const UrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&units=metric&appid=${apiKeyWeather}&lang=uk`;

async function getUpdateWeather() {
    console.log('Клік зафіксовано, роблю запит...');
    try {
        const response = await fetch(UrlWeather, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        document.querySelector('.temperature').textContent = `Температура ${cityWeather}: ${data.main.temp}°C`;
        document.querySelector('.weather').textContent = `Погода: ${data.weather[0].description}`;
        document.querySelector('.humidity').textContent = `Вологість: ${data.main.humidity}%`;
        document.querySelector('.pressure').textContent = `Тиск: ${data.main.pressure} hPa`;
        document.querySelector('.wind').textContent = `Швидкість вітру: ${data.wind.speed} m/s`;

        console.log('Weather data updated successfully');
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }

}
document.querySelector('.update-weather-btn').addEventListener('click', getUpdateWeather);
getUpdateWeather();




