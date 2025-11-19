export enum DayOfWeek {
    saturday = "saturday",
    wednesday = "wednesday",
    sunday = "sunday",
    tuesday = "tuesday",
    thursday = "thursday",
    friday = "friday",
    monday = "monday"
}

export enum JunctionControl {
    giveWay = "give way or uncontrolled",
    notAtJunction = "not at junction or within 20 metres",
    trafficSignal = "auto traffic signal",
    stopSign = "stop sign",
    authorisedPerson = "authorised person",
}

export enum JunctionDetail {
    tJunction = "t or staggered junction",
    notAtJunction = "not at junction or within 20 metres",
    crossroads = "crossroads",
    miniRoundabout = "mini-roundabout",
    roundabout = "roundabout",
    otherJunction = "other junction",
    slipRoad = "slip road",
    privateDrive = "private drive or entrance",
    moreThan4Arms = "more than 4 arms (not roundabout)"
}

export enum AccidentSeverity {
    slight = "slight",
    serious = "serious",
    fatal = "fatal",
}

export enum LightConditions {
    daylight = "daylight",
    darknessLit = "darkness - lights lit",
    darknessUnknown = "darkness - lighting unknown",
    darknessNoLighting = "darkness - no lighting",
    darknessUnlit = "darkness - lights unlit"
}

export enum RoadSurfaceConditions {
    wet = "wet or damp",
    dry = "dry",
    frost = "frost or ice",
    snow = "snow",
    flood = "flood over 3cm. deep"
}

export enum RoadType {
    singleCarriageway = "single carriageway",
    dualCarriageway = "dual carriageway",
    roundabout = "roundabout",
    slipRoad = "slip road",
    oneWayStreet = "one way street"
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
    urban = "urban",
    rural = "rural"
}

export enum WeatherConditions {
    fineNoWind = "fine no high winds",
    rainingNoWind = "raining no high winds",
    fineHighWinds = "fine + high winds",
    snowingNoWind = "snowing no high winds",
    rainingHighWinds = "raining + high winds",
    other = "other",
    fog = "fog or mist",
    snowingHighWinds = "snowing + high winds"
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
