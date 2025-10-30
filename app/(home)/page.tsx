"use client"
import {IntersectionType, Weather} from "@/utils/Enums/enums";
import {useState} from "react";
import {IntersectionSelect} from "@/app/components/Selects/IntersectionSelect";
import {WeatherSelect} from "@/app/components/Selects/WeatherSelect";
import {senData} from "@/api/callApi";
import "./page.css"

export default function Home() {
    const [weather, setWeather] = useState<Weather | "">("");
    const [intersectionType, setIntersectionType] = useState<IntersectionType | "">("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (weather === "" || intersectionType === "") {
            return;
        }

        const data = {
            weather,
            intersectionType,
        }

        await senData(data)
    }

  return (
      <div>
          <h1>Prévoir la gravité d&#39;un accident de la route</h1>
          <form>
              <WeatherSelect value={weather} onChange={setWeather}/>
              <IntersectionSelect value={intersectionType} onChange={setIntersectionType}/>
              <button
                  onClick={handleSubmit}
                  type="submit">Valider
              </button>
          </form>
      </div>
  );
}
