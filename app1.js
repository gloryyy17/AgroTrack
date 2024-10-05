const apiKey = 'cfa431c313c3acbfa1db092b49721272'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cfa431c313c3acbfa1db092b49721272}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDetails = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather').innerHTML = weatherDetails;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = error.message;
        });
}
