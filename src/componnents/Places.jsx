import "../styles/elements/_places.scss";

import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import supabase from "../services/supabase";
import {WEATHER_API} from "../services/weatherApi";

import {places} from "../data/places";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position, Paragraph, Icon} from "evergreen-ui";

export default function Places() {
  const {id} = useParams();

  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
      setUserId(user.id);
    };
    isUserLogged();
  }, []);

  //Dodawanie do listy 'to visit'
  const [isChecked, setIsChecked] = useState("");

  const name = places[id - 1].name;
  const place_id = places[id - 1].ID;

  useEffect(() => {
    const isPlaceAdded = async () => {
      const {data, error} = await supabase
        .from("placesToVisit")
        .select()
        .eq("user_id", userId)
        .eq("name", name);

      if (!data[0]) {
        setIsChecked("fa-regular fa-star");
        return;
      } else if (data[0].name && data[0].name === name) {
        setIsChecked("fa-solid fa-star");
        return;
      }
    };
    if (isLogged) {
      isPlaceAdded();
    }
    isPlaceAdded();
  }, [isLogged]);

  const addToPlacesToVisit = async () => {
    if (isChecked === "fa-regular fa-star") {
      const {data, error} = await supabase
        .from("placesToVisit")
        .insert([{user_id: userId, name: name, place_id: place_id}]);
      setIsChecked("fa-solid fa-star");
      toaster.success("Dodano do listy!");
      return;
    }

    const {data, error} = await supabase
      .from("placesToVisit")
      .delete()
      .eq("user_id", userId)
      .eq("name", name);
    setIsChecked("fa-regular fa-star");
    toaster.notify("Usuni??to z listy!");

    if (error) {
      toaster.danger("Co?? posz??o nie tak!");
    }
  };

  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const lat = places[id - 1].latitude;
  const lon = places[id - 1].longitude;
  useEffect(() => {
    const fetchWeather = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${WEATHER_API}`
      );
      let data = await response.json();

      if (!data) {
        console.log(error);
      }
      if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
        setWeather("fa-solid fa-cloud-bolt");
      }

      if (data.weather[0].id >= 300 && data.weather[0].id < 501) {
        setWeather("fa-solid fa-cloud-sun-rain");
      }
      if (data.weather[0].id >= 501 && data.weather[0].id < 503) {
        setWeather("fa-solid fa-cloud-rain");
      }
      if (data.weather[0].id >= 503 && data.weather[0].id < 600) {
        setWeather("fa-solid fa-cloud-showers-heavy");
      }
      if (data.weather[0].id >= 600 && data.weather[0].id < 602) {
        setWeather("fa-regular fa-snowflake");
      }
      if (data.weather[0].id >= 602 && data.weather[0].id < 700) {
        setWeather("fa-solid fa-snowflake");
      }
      if (data.weather[0].id > 700 && data.weather[0].id < 770) {
        setWeather("fa-solid fa-smog");
      }
      if (data.weather[0].id === 771) {
        setWeather("fa-solid fa-wind");
      }
      if (data.weather[0].id === 781) {
        setWeather("fa-solid fa-tornado");
      }
      if (data.weather[0].id === 800) {
        setWeather("fa-regular fa-sun");
      }
      if (data.weather[0].id >= 801 && data.weather[0].id <= 802) {
        setWeather("fa-solid fa-cloud-sun");
      }
      if (data.weather[0].id >= 803 && data.weather[0].id <= 804) {
        setWeather("fa-solid fa-cloud");
      }

      setTemperature(data.main.temp);
    };
    fetchWeather();
  }, []);

  //<i className="fa-solid fa-sun"></i>
  //<i className="fa-regular fa-sun"></i>
  //<i className="fa-solid fa-cloud-sun"></i>
  //<i className="fa-solid fa-cloud-sun-rain"></i>
  //<i className="fa-solid fa-cloud"></i>
  //<i className="fa-solid fa-cloud-showers-heavy"></i>
  //<i className="fa-solid fa-cloud-rain"></i>
  //<i className="fa-solid fa-cloud-bolt"></i>
  //<i class="fa-solid fa-bolt-lightning"></i>
  //<i className="fa-solid fa-bolt"></i>
  //<i className="fa-regular fa-snowflake"></i>
  // <i className="fa-solid fa-snowflake"></i>
  //<i className="fa-solid fa-wind"></i>
  //<i class="fa-solid fa-tornado"></i>
  //<i className="fa-solid fa-smog"></i>

  const [currentIndex, setCurrentIndex] = useState(place_id);
  const [idx, setIdx] = useState(1);
  console.log(currentIndex);

  const navigate = useNavigate();

  const carouselNext = () => {
    if (currentIndex >= places.length) {
      navigate(`/trailplacesdescriptions/${1}`);
      setCurrentIndex(0);
      return;
    }
    navigate(`/trailplacesdescriptions/${place_id + 1}`);

    setCurrentIndex(currentIndex + 1);
    return;
  };

  const carouselPrev = () => {
    if (currentIndex <= 1) {
      navigate(`/trailplacesdescriptions/${places.length}`);
      setCurrentIndex(places.length);
      return;
    }
    navigate(`/trailplacesdescriptions/${place_id - 1}`);
    setCurrentIndex(currentIndex - 1);
    return;
  };

  const img = places[id - 1].img;

  return (
    <>
      <div className="places-descriptions">
        <div className="places-info">
          <h1>{places[id - 1].name}</h1>
          {isLogged && (
            <>
              <Tooltip content="Chcesz odwiedzi???" position={Position.RIGHT}>
                <span>
                  <i className={isChecked} onClick={addToPlacesToVisit}></i>
                </span>
              </Tooltip>
              <Tooltip content="Aktualna pogoda" position={Position.LEFT}>
                <div className="weather-widget">
                  <i className={weather}></i>
                  <h2>{temperature}??C</h2>
                </div>
              </Tooltip>
            </>
          )}
          <div className="places-info-description scroll">
            <p>{places[id - 1].description}</p>
            <ul>
              <h2>Wi??cej</h2>
              {places[id - 1].links.map((el, idx) => (
                <li key={idx}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <span className="prev-next-btns">
            <button className="prev circle-small" onClick={carouselPrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="next circle-small" onClick={carouselNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </span>
        </div>
      </div>
      <ButtonBackToTrail />
      <img
        className="drawing-place"
        src={img}
        alt={`Rysunek ${places[id - 1].name}`}
        height="30%"
      ></img>
    </>
  );
}
