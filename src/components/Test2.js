import React from "react";

import Repo from "../fetch/repositoryAPI";

const WeatherRepo = Repo.get("weather");

async function handleWeatherClick() {
  return await WeatherRepo.get();
}

export default () => {
  const [weather, setWeather] = React.useState([]);

  React.useEffect(async () => {
    const data = await handleWeatherClick();
    setWeather(data);
  }, []);

  return (
    <div>
      {weather.map((date, index) => (
        <ul key={index}>
          <li>{date.date}</li>
          <li>{date.temperatureC}</li>
          <li>{date.temperatureF}</li>
          <li>{date.summary}</li>
        </ul>
      ))}
    </div>
  );
};
