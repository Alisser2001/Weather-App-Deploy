export default function infoValidator(info){
    if (info !== undefined) {
        const city = {
            name: info.name,
            id: info.id,
            country: info.sys.country,
            description: info.weather[0].description,
            weather: info.weather[0].main,
            wind: info.wind.speed,
            temp: info.main.temp,
            min: Math.round(info.main.temp_min),
            max: Math.round(info.main.temp_max),
            humidity: info.main.humidity,
            clouds: info.clouds.all,
            lat: info.coord.lat,
            long: info.coord.lon,
            img: info.weather[0].icon
        };
        return city;
    } else {
        return {}
    }
}