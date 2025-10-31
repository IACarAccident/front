import {SpeedLimit} from "@/utils/Enums/enums";
import "@/components/Selects/Selects.css"
import React from "react";

type SpeedLimitSelectProps = {
    value: SpeedLimit | "";
    onChange: (value: SpeedLimit) => void;
}

export function SpeedLimitSelect({value, onChange}: {value: SpeedLimit | "", onChange: (value: SpeedLimit) => void}) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as SpeedLimit);
    };

    return (
        <div>
            <label htmlFor="speedLimit">LLimitation de vitesse :</label>
            <br/>
            <select id="speedLimit" value={value} onChange={handleChange}>
                <option value="">-- Choisissez la vitesse --</option>
                <option value={SpeedLimit.limit10}>10Km/h</option>
                <option value={SpeedLimit.limit20}>20Km/h</option>
                <option value={SpeedLimit.limit30}>30Km/h</option>
                <option value={SpeedLimit.limit40}>40Km/h</option>
                <option value={SpeedLimit.limit50}>50Km/h</option>
                <option value={SpeedLimit.limit60}>60Km/h</option>
                <option value={SpeedLimit.limit70}>70Km/h</option>
            </select>
        </div>
    )
}