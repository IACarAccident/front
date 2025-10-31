import "@/components/Selects/Selects.css"
import React from "react";
import { RoadType } from "@/utils/Enums/enums";

type RoadTypeSelectProps = {
    value: RoadType | "";
    onChange: (value: RoadType) => void;
};

export function RoadTypeSelect({ value, onChange }: RoadTypeSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as RoadType);
    };

    return (
        <div>
            <label htmlFor="roadType">Type de route</label>
            <br/>
            <select id="roadType" value={value} onChange={handleChange}>
                <option value="">-- Choisissez le type de route --</option>
                <option value={RoadType.singleCarriageway}>Chaussée unique</option>
                <option value={RoadType.dualCarriageway}>Chaussée double</option>
                <option value={RoadType.roundabout}>Rond-point</option>
                <option value={RoadType.slipRoad}>Bretelle</option>
                <option value={RoadType.oneWayStreet}>Sens unique</option>
            </select>
        </div>
    )
}
