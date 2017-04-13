var axios = require("axios");

const OPEN_WEATHERAPP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=084ec0ca773e9c101a6d5132c9f4cacb&units=imperial";
// appid=084ec0ca773e9c101a6d5132c9f4cacb


module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHERAPP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function() {
            throw new Error("Unable to fetch weather from that location.");
        });
    }
};