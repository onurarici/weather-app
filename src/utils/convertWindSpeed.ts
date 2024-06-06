export default function convertWindSpeed(speedInMetersPSec: number): string {
    const speedInKmPH = speedInMetersPSec * 3.6;
    return `${speedInKmPH.toFixed(0)}km/h`

}