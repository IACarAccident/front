import {IntersectionType} from "@/utils/Enums/enums";
import "@/app/components/Selects/Selects.css"

type IntersectionSelectProps = {
    value: IntersectionType | "";
    onChange: (value: IntersectionType) => void;
};

export function IntersectionSelect({value, onChange}: IntersectionSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as IntersectionType);
    }

    return (
        <div>
            <label htmlFor="intersection">Type d&#39;intersection :</label>
            <br/>
            <select id="intersectionType" value={value} onChange={handleChange}>
                <option value="">-- Choisissez le type d&#39;intersection --</option>
                <option value={IntersectionType.straight}>Ligne droite</option>
                <option value={IntersectionType.curve}>Virage</option>
                <option value={IntersectionType.corner}>Virage serré</option>
                <option value={IntersectionType.cross}>Croisement</option>
                <option value={IntersectionType.turn}>Tournant</option>
            </select>
        </div>
    );
}
