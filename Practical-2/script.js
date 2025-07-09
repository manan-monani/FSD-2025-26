const apiKey = "9501d362094e411995871941250407";

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (city === "") {
    weatherResult.textContent = "Please enter a city name.";
    return;
  }

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const {
        location: { name, region, country, lat, lon, tz_id, localtime },
        current: {
          temp_c, temp_f, feelslike_c, humidity, condition, wind_kph, wind_dir,
          pressure_mb, precip_mm, cloud, vis_km, uv
        }
      } = data;

      weatherResult.innerHTML = `
        <h3>📍 ${name}, ${region}, ${country}</h3>
        <p><strong>Local Time:</strong> ${localtime}</p>
        <img src="https:${condition.icon}" alt="${condition.text}" />
        <p><strong>Condition:</strong> ${condition.text}</p>
        <p><strong>Temperature:</strong> ${temp_c}°C (${temp_f}°F)</p>
        <p><strong>Feels Like:</strong> ${feelslike_c}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind:</strong> ${wind_kph} km/h from ${wind_dir}</p>
        <p><strong>Pressure:</strong> ${pressure_mb} mb</p>
        <p><strong>Precipitation:</strong> ${precip_mm} mm</p>
        <p><strong>Cloud Cover:</strong> ${cloud}%</p>
        <p><strong>Visibility:</strong> ${vis_km} km</p>
        <p><strong>UV Index:</strong> ${uv}</p>
        <p><strong>Coordinates:</strong> [${lat}, ${lon}] | <strong>Timezone:</strong> ${tz_id}</p>
      `;
    })
    .catch(error => {
      weatherResult.textContent = `❌ Could not fetch weather data for "${city}".`;
    });
});
