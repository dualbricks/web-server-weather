const request = require('request')
const airTemp = (time, callback) => {
    request({url: 'https://api.data.gov.sg/v1/environment/air-temperature?date_time=' + encodeURIComponent(time), json:true}, (error, {body}={})=> {
        try{
            if(error) {
                return callback('Unable to reach server atm', body)
            }
            else if(body.message) {
                return callback(body.message, {})
            }
            else if(body.items) {
                callback(undefined, body.items[0].readings[1])
            }
        } catch(error) {
            callback(error, {})
        }
       
        
    })

}


module.exports = airTemp