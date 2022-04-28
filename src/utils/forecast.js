const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=67ea5377219bf0f9570d340c83c60f41&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        }
        else if (body.error) {
            callback('Unable to find forecast for selected location.', undefined)
        }
        else {
            callback(undefined, `It is currently ${body.current.weather_descriptions[0]} and ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} out.`)
        }
    })
}

module.exports = forecast