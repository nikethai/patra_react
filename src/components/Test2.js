import React from "react";
import Repo from "../fetch/repositoryAPI";
import { Spinner } from 'react-bootstrap';

const WeatherRepo = Repo.get("weather");

export default () => {
  const [weather, setWeather] = React.useState("");

  React.useEffect(() => {
    async function getData() {
      const data = await WeatherRepo.get();
      setWeather(data);
    }
    // getData();
  },[]);

  const handleClick = () => {

  }

  return (
    <div>
      {/* {weather != null ? (
        weather.map((date, index) => (
          <ul key={index}>
            <li>{date.date}</li>
            <li>{date.temperatureC}</li>
            <li>{date.temperatureF}</li>
            <li>{date.summary}</li>
          </ul>
        ))
      ) : (
        <Spinner animation="border" varient="warning"/>
      )} */}
      <input type="text" name="changeme" id="change" onChange={(e) => setWeather(e.target.value)}/>
      <input onClick={handleClick} type="button" value="Click to Show"/>
      <div>{weather}</div>
    </div>
  );
};
