export function getHourlyWeather(data) {
    const firstSixResults = data.slice(0, 6);
    return firstSixResults.map((entry) => {
        const time = new Date(entry.dt * 1000);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedTime = `${formattedHours} ${ampm}`;
        return {
            time: formattedTime,
            temp: entry.main.temp,
            description: entry.weather[0].description.charAt(0).toUpperCase() + entry.weather[0].description.slice(1),
            icon: entry.weather[0].icon,
        };
    });
}
