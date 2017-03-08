var config = require('../config')
var constant = require('./constant')

/**
 * 网络请求
 * @param options.url 请求地址
 * @param options.data 请求数据
 * @param options.loading 是否显示loading，默认不显示
 * @param options.success 请求成功回调
 * @param options.fail 请求失败回调
 */
var request = options => {
    var data = options.data || {};
    data.nami_token = wx.getStorageSync(constant.NAMI_TOKEN);//每次请求组装上token

    var url = options.url;
    if (url.indexOf("http") != 0) {
        url = `${config.host}${url}`;
    }

    if (options.loading) {
        /*
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })*/
        wx.showNavigationBarLoading();
    };

    wx.request({
        url: url,
        data: data,
        complete: function (res) {
            if (options.loading) {
                /*
                 wx.hideToast();*/
                wx.hideNavigationBarLoading();
            }

            if (res.statusCode != 200) {//失败
                //console.error("失败", options.url, res);
                typeof options.fail == "function" && options.fail(res);
            } else {//成功
                //console.log("成功", options.url, res);
                typeof options.success == "function" && options.success(res);
            }
        }
    });
}

module.exports = {
    request: request
}