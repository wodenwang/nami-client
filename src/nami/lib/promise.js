var login = require('./login')
var http = require('./http')
var Promise = require('../thirthlib/promise')

var _login = () => {
    return new Promise(function (resolve, reject) {
        login.login(resolve, reject);
    });
};


var _getUserInfo = () => {
    return new Promise(function (resolve, reject) {
        login.getUserInfo(resolve, reject);
    });
};


/**
 * 网络请求
 * @param options.url 请求地址
 * @param options.data 请求数据
 * @param options.loading 是否显示loading，默认不显示
 */
var _request = options => {
    return new Promise(function (resolve, reject) {
        options.success = resolve;
        options.fail = reject;
        http.request(options);
    });
};

module.exports = {
    login: _login,
    getUserInfo: _getUserInfo,
    request: _request
}