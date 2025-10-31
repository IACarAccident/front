import "@/components/Selects/Selects.css"
import React from "react";
import { RoadSurfaceConditions } from "@/utils/Enums/enums";

type RoadSurfaceConditionsSelectProps = {
    value: RoadSurfaceConditions | "";
    onChange: (value: RoadSurfaceConditions) => void;
};

export function RoadSurfaceConditionsSelect({ value, onChange }: RoadSurfaceConditionsSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as RoadSurfaceConditions);
    };

    return (
        <div>
            <label htmlFor="roadSurfaceConditions">Surface de la route</label>
            <br/>
            <select id="roadSurfaceConditions" value={value} onChange={handleChange}>
                <option value="">-- Choisissez la surface de la route --</option>
                <option value={RoadSurfaceConditions.wet}>Froide</option>
                <option value={RoadSurfaceConditions.dry}>Seche</option>
                <option value={RoadSurfaceConditions.frost}>Veglas</option>
                <option value={RoadSurfaceConditions.snow}>Enneigé</option>
                <option value={RoadSurfaceConditions.flood}>Innondé</option>
            </select>
        </div>
    )
}