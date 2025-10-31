import "@/components/Selects/Selects.css"
import React from "react";
import { LightConditions } from "@/utils/Enums/enums";

type LightConditionsProps = {
    value: LightConditions | "";
    onChange: (value: LightConditions) => void;
};

export function LightConditionsSelect({ value, onChange }: LightConditionsProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as LightConditions);
    };

    return (
        <div>
            <label htmlFor="lightConditions">Conditions lumineuses</label>
            <br/>
            <select id="lightConditions" value={value} onChange={handleChange}>
                <option value="">-- Choisissez les conditions lumineuses --</option>
                <option value={LightConditions.darknessNoLighting}>Nuit non éclairée</option>
                <option value={LightConditions.daylight}>Plein jour</option>
                <option value={LightConditions.darknessLit}>Nuit éclairée</option>
                <option value={LightConditions.darknessUnknown}>Nuit élairage inconnu</option>
                <option value={LightConditions.darknessUnlit}>Nuit non éclairée</option>
            </select>
        </div>
    )
}