import {
    AccidentData,
    DayOfWeek,
    JunctionControl,
    JunctionDetail,
    LightConditions,
    RoadSurfaceConditions, RoadType, SpeedLimit, UrbanRuralArea, WeatherConditions
} from "@/utils/Enums/enums";

export async function senData(data: {
    day_of_week: DayOfWeek | "";
    junction_control: JunctionControl | "";
    junction_detail: JunctionDetail | "";
    light_conditions: LightConditions | "";
    road_surface_conditions: RoadSurfaceConditions | "";
    road_type: RoadType | "";
    speed_limit: SpeedLimit | "";
    urban_or_rural_area: UrbanRuralArea | "";
    weather_conditions: WeatherConditions | ""
}) {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/predict`;

    if (!apiUrl) {
        throw new Error('API URL is not defined');
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
}
