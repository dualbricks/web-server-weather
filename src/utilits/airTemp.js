const request = require('request')
const airTemp = (time, callback) => {
    request({url: 'https://api.data.gov.sg/v1/environment/air-temperature?date_time=' + encodeURIComponent(time), json:true}, (error, {body}={})=> {
        if(error) {
            return callback('Unable to reach server atm', body)
        }
        else if(body.message) {
            return callback(body.message, {})
        }
        else if(body.items) {
            callback(error, body.items[0].readings[1])
        }
        
    })

}


module.exports = airTemp