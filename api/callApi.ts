import {IntersectionType, Weather} from "@/utils/Enums/enums";

interface Data {
    weather: Weather;
    intersectionType: IntersectionType;
}

export async function senData(data: Data) {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/predict`;

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

    console.log(response);
    return response.json();
}
