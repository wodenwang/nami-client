var login = require('./lib/login.js')
var http = require('./lib/http.js')
var promise = require('./lib/promise.js')

module.exports = {
    login: login.login,
    getUserInfo: login.getUserInfo,
    request: http.request,
    promise:promise
}