import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

type Props = {}

export interface WeatherDetailProps {
    visibility: string;
    humidity: string;
    windSpeed: string;
    airPressure: string;
    sunrise: string;
    sunset: string;
}

export default function WeatherDetail(props: WeatherDetailProps) {
    return(
        <>
            <SingleWeatherDetail 
            icon={<LuEye />}
            info='Visibility'
            value={props.visibility}
            />

            <SingleWeatherDetail 
            icon={<FiDroplet />}
            info='Humidity'
            value={props.humidity}
            />


            <SingleWeatherDetail 
            icon={<MdAir />}
            info='Wind speed'
            value={props.windSpeed}
            />

            <SingleWeatherDetail 
            icon={<ImMeter />}
            info='Air pressure'
            value={props.airPressure}
            />

            <SingleWeatherDetail 
            icon={<LuSunrise />}
            info='Sunrise'
            value={props.sunrise}
            />

            <SingleWeatherDetail 
            icon={<LuSunset />}
            info='Sunset'
            value={props.sunset}
            />
        </>
    )
}

export interface SingleWeatherDetailProps {
    info: string;
    icon: React.ReactNode;
    value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
    return (
        <div className=" flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
            <p className=" whitespace-nowrap">{props.info}</p>
            <div className=" text-3xl">{props.icon}</div>
            <p>{props.value}</p>
        </div>
    )

}