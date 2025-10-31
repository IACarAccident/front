"use client"
import {
    DayOfWeek,
    JunctionControl,
    JunctionDetail, RoadSurfaceConditions,
    RoadType, LightConditions,
    UrbanRuralArea,
    WeatherConditions, SpeedLimit, PredictionResult
} from "@/utils/Enums/enums";
import {useState} from "react";
import {IntersectionSelect} from "@/components/Selects/IntersectionSelect"
import {WeatherSelect} from "@/components/Selects/WeatherSelect";
import {senData} from "@/api/callApi";
import "./page.css"
import {UrbanRuralAreaSelect} from "@/components/Selects/UrbanRuralArea";
import {RoadTypeSelect} from "@/components/Selects/RoadTypeSelect";
import {JunctionControlSelect} from "@/components/Selects/JunctionControl";
import {DayOfTheWeekSelect} from "@/components/Selects/DayOfTheWeekSelect";
import {RoadSurfaceConditionsSelect} from "@/components/Selects/RoadSurfaceConditionsSelect";
import {LightConditionsSelect} from "@/components/Selects/LightConditions";
import {SpeedLimitSelect} from "@/components/Selects/SpeedLimit";
import {Loading} from "@/components/Loading/Loading";

export default function Home() {
    const [weather, setWeather] = useState<WeatherConditions | "">("");
    const [intersectionType, setIntersectionType] = useState<JunctionDetail | "">("");
    const [urbanRuralArea, setUrbanRuralArea] = useState<UrbanRuralArea | "">("");
    const [roadType, setRoadType] = useState<RoadType | "">("");
    const [junctionControl, setJunctionControl] = useState<JunctionControl | "">("");
    const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek | "">("");
    const [roadSurfaceConditions, setRoadSurfaceConditions] = useState<RoadSurfaceConditions | "">("");
    const [lightConditions, setLightConditions] = useState<LightConditions | "">("");
    const [speedLimit, setSpeedLimit] = useState<SpeedLimit | "">("");

    const [loading, setLoading] = useState(false);
    const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setLoading(true);
        setPredictionResult(null);
        e.preventDefault();

        try {
            if (weather === "" ||
                intersectionType === "" ||
                urbanRuralArea === "" ||
                roadType === "" ||
                junctionControl === "" ||
                dayOfWeek === "" ||
                roadSurfaceConditions === "" ||
                lightConditions === "" ||
                speedLimit === "") {
                console.error("donnée manquante");
            }

            const data = {
                day_of_week: dayOfWeek,
                junction_control: junctionControl,
                junction_detail: intersectionType,
                light_conditions: lightConditions,
                road_surface_conditions: roadSurfaceConditions,
                road_type: roadType,
                speed_limit: speedLimit,
                urban_or_rural_area: urbanRuralArea,
                weather_conditions: weather
            }

            const result = await senData(data)
            setPredictionResult(result);

        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const formatPercentage = (value: number) => {
        return `${(value * 100).toFixed(1)}%`;
    };

    const translateGravity = (gravity: string) => {
        const translations: { [key: string]: string } = {
            'leger': 'Accident Leger',
            'grave': 'Accident Grave',
            'mortel': 'Accident Mortel'
        };
        return translations[gravity] || gravity;
    };

  return (
      <div>
          <h1>Prévoir la gravité d&#39;un accident de la route</h1>
          <form>
              <div className="form-container">
                  <div>
                      <WeatherSelect value={weather} onChange={setWeather}/>
                      <IntersectionSelect value={intersectionType} onChange={setIntersectionType}/>
                      <UrbanRuralAreaSelect value={urbanRuralArea} onChange={setUrbanRuralArea}/>
                      <RoadTypeSelect value={roadType} onChange={setRoadType}/>
                      <JunctionControlSelect value={junctionControl} onChange={setJunctionControl}/>
                  </div>
                  <div>
                      <DayOfTheWeekSelect value={dayOfWeek} onChange={setDayOfWeek}/>
                      <RoadSurfaceConditionsSelect value={roadSurfaceConditions} onChange={setRoadSurfaceConditions}/>
                      <LightConditionsSelect value={lightConditions} onChange={setLightConditions}/>
                      <SpeedLimitSelect value={speedLimit} onChange={setSpeedLimit}/>

                      <button onClick={handleSubmit} type="submit">
                          Valider
                      </button>
                  </div>
              </div>
          </form>
          {loading &&
              <Loading type={"dots"}/>
          }
          {predictionResult && (
              <div className="prediction-result">
                  <h2>Résultat de la prédiction</h2>

                  <div className="prediction-card">
                      <h3>Gravité prédite :
                          <span className={`gravity-${predictionResult.prediction}`}>
                                {translateGravity(predictionResult.prediction)}
                            </span>
                      </h3>

                      <p className="confidence">
                          Confiance : <strong>{formatPercentage(predictionResult.confidence)}</strong>
                      </p>

                      <div className="probabilities">
                          <h4>Probabilités détaillées :</h4>
                          <div className="probability-bars">
                              <div className="probability-item">
                                  <span>Accident Léger :</span>
                                  <div className="probability-bar">
                                      <div
                                          className="probability-fill light"
                                          style={{ width: formatPercentage(predictionResult.probability.leger) }}
                                      ></div>
                                  </div>
                                  <span>{formatPercentage(predictionResult.probability.leger)}</span>
                              </div>

                              <div className="probability-item">
                                  <span>Accident Grave :</span>
                                  <div className="probability-bar">
                                      <div
                                          className="probability-fill serious"
                                          style={{ width: formatPercentage(predictionResult.probability.grave) }}
                                      ></div>
                                  </div>
                                  <span>{formatPercentage(predictionResult.probability.grave)}</span>
                              </div>

                              <div className="probability-item">
                                  <span>Accident Mortel :</span>
                                  <div className="probability-bar">
                                      <div
                                          className="probability-fill fatal"
                                          style={{ width: formatPercentage(predictionResult.probability.mortel) }}
                                      ></div>
                                  </div>
                                  <span>{formatPercentage(predictionResult.probability.mortel)}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}
