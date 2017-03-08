# NAMI小程序前端JS库

*NAMI容器配套客户端SDK。NAMI资料：[https://github.com/wodenwang/nami](https://github.com/wodenwang/nami)*

## How to use?
* 引用nami文件
```javascript
var nami = require("./nami/index"); 
```

* 修改/nami/config.js中的host地址,修改为NAMI服务端地址

* 登录请求
```javascript
nami.login(() => {
    // success callback
},() => {
    // fail callback
});
```

* 获取用户信息请求
```javascript
nami.getUserInfo(res => {
    // success callback
},res => {
    // fail callback
});
```

* 网络请求
```javascript
nami.request({
    url:"", // 请求地址
    data:{},// 请求数据
    loading:0, //0代表请求时title不显示loading(默认)，1代表请求时title显示loading
    success:function(res) {
      // success callback
    },
    fail:function(res) {
       // fail callback
    }
});
```

* **nami支持promise异步请求**，封装原有的login(),getUserInfo(),request()请求，我们可以通过链式操作处理回调

1. 登录请求
```javascript
nami.promise.login().then(() => {
    // success callback
}).catch(() => {
    // fail callback        
});
```

2. 获取用户信息请求
```javascript
nami.promise.getUserInfo().then(res => {
    // success callback
}).catch(res => {
    // fail callback        
});
```

3. 网络请求
```javascript
nami.request({
    url:"", // 请求地址
    data:{},// 请求数据
    loading:0 //0代表请求时title不显示loading(默认)，1代表请求时title显示loading
}).then(() => {
      // success callback
  }).catch(() => {
      // fail callback        
  });
```
