import { DayOfWeek } from "@/utils/Enums/enums";
import "@/components/Selects/Selects.css";
import React from "react";

type DayOfTheWeekSelectProps = {
    value: DayOfWeek | "";
    onChange: (value: DayOfWeek) => void;
}

export function DayOfTheWeekSelect({ value, onChange }: { value: DayOfWeek | "", onChange: (value: DayOfWeek) => void }) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as DayOfWeek);
    };

    return (
        <div>
            <label htmlFor="dayOfTheWeek">Jour de la semaine :</label>
            <br/>
            <select id="dayOfTheWeek" value={value} onChange={handleChange}>
                <option value="">-- Choisissez le jour de la semaine --</option>
                <option value={DayOfWeek.sunday}>Dimanche</option>
                <option value={DayOfWeek.monday}>Lundi</option>
                <option value={DayOfWeek.tuesday}>Mardi</option>
                <option value={DayOfWeek.wednesday}>Mercredi</option>
                <option value={DayOfWeek.thursday}>Jeudi</option>
                <option value={DayOfWeek.friday}>Vendredi</option>
                <option value={DayOfWeek.saturday}>Samedi</option>
            </select>
        </div>
    )
}