import "@/components/Selects/Selects.css"
import React from "react";
import { JunctionControl } from "@/utils/Enums/enums";

type JunctionControlProps = {
    value: JunctionControl | "";
    onChange: (value: JunctionControl) => void;
};

export function JunctionControlSelect({ value, onChange }: JunctionControlProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as JunctionControl);
    };
    
    return(
        <div>
            <label htmlFor="junctionControl">Details de l&#39;environment</label>
            <br/>
            <select id="junctionControl" value={value} onChange={handleChange}>
                <option value="">-- Choisissez les details de l&#39;environnement --</option>
                <option value={JunctionControl.giveWay}>Priorité à droite</option>
                <option value={JunctionControl.notAtJunction}>Ligne droite</option>
                <option value={JunctionControl.trafficSignal}>Feu tricolore</option>
                <option value={JunctionControl.stopSign}>Panneau stop</option>
                <option value={JunctionControl.authorisedPerson}>Agent de circulation</option>
            </select>
        </div>
    )
}