document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const location = document.getElementById('location-input').value;
    const weatherResult = document.getElementById('weather-result');
    
    // Your API Key
    const apiKey = '2da8e3ecb614e1d112f6919f4c2b0785';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherResult.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
                <p>🌡️ Temperature: ${temperature}°C</p>
                <p>💧 Humidity: ${humidity}%</p>
                <p>💨 Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>Error: ${error.message}. Please try again.</p>`;
        });
});
