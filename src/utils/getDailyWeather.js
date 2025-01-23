export function getDailyWeather(data) {
    const days = {};
    data.forEach((item) => {
        const date = new Date(item.dt * 1000).toISOString().split("T")[0];
        if (!days[date]) {
            days[date] = [];
        }
        days[date].push(item);
    });
    const dailyWeather = Object.keys(days).slice(0, 6).map((date) => {
        const dayData = days[date];
        const middayWeather = dayData.find((entry) => {
            const hours = new Date(entry.dt * 1000).getUTCHours();
            return hours === 12;
        });
        const representativeWeather =
            middayWeather ||
            dayData.reduce((closest, current) => {
                const currentHour = new Date(current.dt * 1000).getUTCHours();
                const closestHour = new Date(closest.dt * 1000).getUTCHours();
                return Math.abs(currentHour - 12) < Math.abs(closestHour - 12)
                    ? current
                    : closest;
            });
        return {
            date: date.split('-')[2]+'.'+date.split('-')[1]+'.'+date.split('-')[0],
            temp: representativeWeather.main.temp,
            description: representativeWeather.weather[0].description.charAt(0).toUpperCase() + representativeWeather.weather[0].description.slice(1),
            icon: representativeWeather.weather[0].icon
        };
    });

    return dailyWeather;
}
