export enum DayOfWeek {
    saturday = "Saturday",
    wednesday = "Wednesday",
    sunday = "Sunday",
    tuesday = "Tuesday",
    thursday = "Thursday",
    friday = "Friday",
    monday = "Monday"
}

export enum JunctionControl {
    giveWay = "Give way or uncontrolled",
    notAtJunction = "Not at junction or within 20 metres",
    trafficSignal = "Auto traffic signal",
    stopSign = "Stop sign",
    authorisedPerson = "Authorised person",
}

export enum JunctionDetail {
    tJunction = "T or staggered junction",
    notAtJunction = "Not at junction or within 20 metres",
    crossroads = "Crossroads",
    miniRoundabout = "Mini-roundabout",
    roundabout = "Roundabout",
    otherJunction = "Other junction",
    slipRoad = "Slip road",
    privateDrive = "Private drive or entrance",
    moreThan4Arms = "More than 4 arms (not roundabout)"
}

export enum AccidentSeverity {
    slight = "Slight",
    serious = "Serious",
    fatal = "Fatal",
}

export enum LightConditions {
    daylight = "Daylight",
    darknessLit = "Darkness - lights lit",
    darknessUnknown = "Darkness - lighting unknown",
    darknessNoLighting = "Darkness - no lighting",
    darknessUnlit = "Darkness - lights unlit"
}

export enum RoadSurfaceConditions {
    wet = "Wet or damp",
    dry = "Dry",
    frost = "Frost or ice",
    snow = "Snow",
    flood = "Flood over 3cm. deep"
}

export enum RoadType {
    singleCarriageway = "Single carriageway",
    dualCarriageway = "Dual carriageway",
    roundabout = "Roundabout",
    slipRoad = "Slip road",
    oneWayStreet = "One way street"
}

export enum SpeedLimit {
    limit10 = "10",
    limit20 = "20",
    limit30 = "30",
    limit40 = "40",
    limit50 = "50",
    limit60 = "60",
    limit70 = "70"
}

export enum UrbanRuralArea {
    urban = "Urban",
    rural = "Rural"
}

export enum WeatherConditions {
    fineNoWind = "Fine no high winds",
    rainingNoWind = "Raining no high winds",
    fineHighWinds = "Fine + high winds",
    snowingNoWind = "Snowing no high winds",
    rainingHighWinds = "Raining + high winds",
    other = "Other",
    fog = "Fog or mist",
    snowingHighWinds = "Snowing + high winds"
}

export interface AccidentData {
    day_of_week: DayOfWeek;
    junction_control: JunctionControl;
    junction_detail: JunctionDetail;
    accident_severity: AccidentSeverity;
    light_conditions: LightConditions;
    number_of_casualties: number;
    road_surface_conditions: RoadSurfaceConditions;
    road_type: RoadType;
    speed_limit: SpeedLimit;
    time: string;
    urban_or_rural_area: UrbanRuralArea;
    weather_conditions: WeatherConditions;
}

export interface PredictionResult {
    prediction: string;
    probability: {
        grave: number;
        leger: number;
        mortel: number;
    };
    confidence: number;
}
