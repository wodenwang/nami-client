# NAMI小程序前端JS库

*NAMI容器配套客户端SDK。NAMI资料：[https://github.com/wodenwang/nami](https://github.com/wodenwang/nami)*

## How to use?

### 引用nami文件

```javascript
var nami = require("./nami/index"); 
```

### 修改/nami/config.js中的host地址,修改为NAMI服务端地址

### 登录请求
```javascript
nami.login(() => {
    // success callback
},() => {
    // fail callback
});
```

### 获取用户信息请求
```javascript
nami.getUserInfo(res => {
    // success callback
},res => {
    // fail callback
});
```

### 网络请求
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

### **nami支持promise异步请求**，封装原有的login(),getUserInfo(),request()请求，我们可以通过链式操作处理回调

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

### promise在开发中的应用，可参考该demo：
> 实际开发中会遇到这种情况，如果先用nami.login()实现登录以获取NAMI_TOKEN;再通过nami.getUserInfo()获取用户数据，在调试工具中发现namiToken为空(异步请求导致的错误，还没有获取NAMI_TOKEN，就发送getUserInfo请求)，返回报错，如图：
![异步请求错误](https://raw.githubusercontent.com/wodenwang/nami-client/master/images/asyncError.png)

<br />

** 看看用promise怎么处理这类问题 **

1. 核心代码，如图
![promiseCode](https://raw.githubusercontent.com/wodenwang/nami-client/master/images/promiseCode.png)

2. 看看数据请求：
* 登录请求
![promiseCode](https://raw.githubusercontent.com/wodenwang/nami-client/master/images/step1.png)

* 获取用户数据
![promiseCode](https://raw.githubusercontent.com/wodenwang/nami-client/master/images/step2.png)

* 网络请求
![promiseCode](https://raw.githubusercontent.com/wodenwang/nami-client/master/images/step3.png)