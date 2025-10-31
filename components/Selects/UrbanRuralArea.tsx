import "@/components/Selects/Selects.css"
import React from "react";
import { UrbanRuralArea } from "@/utils/Enums/enums";

type UrbanRuralAreaProps = {
    value: UrbanRuralArea | "";
    onChange: (value: UrbanRuralArea) => void;
};

export function UrbanRuralAreaSelect({ value, onChange }: UrbanRuralAreaProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as UrbanRuralArea);
    };

    return (
        <div>
            <label htmlFor="urbanRuralArea">Zone urbaine :</label>
            <br />
            <select id="urbanRuralArea" value={value} onChange={handleChange}>
                <option value="">-- Choisissez la zone urbaine --</option>
                <option value={UrbanRuralArea.urban}>Urbain</option>
                <option value={UrbanRuralArea.rural}>Rural</option>
            </select>
        </div>
    )
}