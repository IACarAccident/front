import { WeatherConditions } from "@/utils/Enums/enums";
import "@/components/Selects/Selects.css";
import React from "react";

type WeatherSelectProps = {
    value: WeatherConditions | "";
    onChange: (value: WeatherConditions) => void;
};

export function WeatherSelect({ value, onChange }: WeatherSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as WeatherConditions);
    };

    return (
        <div>
            <label htmlFor="weather">Météo :</label>
            <br />
            <select id="weather" value={value} onChange={handleChange}>
                <option value="">-- Choisissez la météo --</option>
                <option value={WeatherConditions.fineNoWind}>Beau temps</option>
                <option value={WeatherConditions.rainingNoWind}>️Pluie sans vent</option>
                <option value={WeatherConditions.fineHighWinds}>Grands vents</option>
                <option value={WeatherConditions.snowingNoWind}>Neige</option>
                <option value={WeatherConditions.rainingHighWinds}>Pluie et Vent</option>
                <option value={WeatherConditions.fog}>Brouillard</option>
                <option value={WeatherConditions.snowingHighWinds}>Neige et Vent</option>
                <option value={WeatherConditions.other}>Autres</option>
            </select>
        </div>
    );
}
