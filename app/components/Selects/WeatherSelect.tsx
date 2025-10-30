import { Weather } from "@/utils/Enums/enums";
import "@/app/components/Selects/Selects.css";
import React from "react";

type WeatherSelectProps = {
    value: Weather | "";
    onChange: (value: Weather) => void;
};

export function WeatherSelect({ value, onChange }: WeatherSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Weather);
    };

    return (
        <div>
            <label htmlFor="weather">Météo :</label>
            <br />
            <select id="weather" value={value} onChange={handleChange}>
                <option value="">-- Choisissez la météo --</option>
                <option value={Weather.sunny}>Soleil</option>
                <option value={Weather.rainy}>️Pluie</option>
                <option value={Weather.cloudy}>Nuages</option>
                <option value={Weather.snowy}>Neige</option>
                <option value={Weather.windy}>Vent</option>
                <option value={Weather.foggy}>Brouillard</option>
            </select>
        </div>
    );
}
