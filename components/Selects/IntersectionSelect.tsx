import { JunctionDetail } from "@/utils/Enums/enums";
import "@/components/Selects/Selects.css"

type IntersectionSelectProps = {
    value: JunctionDetail | "";
    onChange: (value: JunctionDetail) => void;
};

export function IntersectionSelect({ value, onChange }: IntersectionSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as JunctionDetail);
    }

    return (
        <div>
            <label htmlFor="intersection">Type d&#39;intersection :</label>
            <br/>
            <select id="intersectionType" value={value} onChange={handleChange}>
                <option value="">-- Choisissez le type d&#39;intersection --</option>
                <option value={JunctionDetail.tJunction}>Jonction en T</option>
                <option value={JunctionDetail.crossroads}>Carrefour</option>
                <option value={JunctionDetail.roundabout}>Rond-point</option>
                <option value={JunctionDetail.miniRoundabout}>Mini-rond-point</option>
                <option value={JunctionDetail.slipRoad}>Bretelle d&#39;accès</option>
                <option value={JunctionDetail.privateDrive}>Entrée privée</option>
                <option value={JunctionDetail.moreThan4Arms}>Carrefour multiple</option>
                <option value={JunctionDetail.otherJunction}>Autre jonction</option>
                <option value={JunctionDetail.notAtJunction}>Pas de jonction</option>
            </select>
        </div>
    );
}