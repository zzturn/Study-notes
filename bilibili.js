/*
b 站首页去广告、直播

***************************
QuantumultX:

[rewrite_local]
^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/luoxin971/Study-notes/master/bilibili.js
^https:\/\/app\.biliapi\.net\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/luoxin971/Study-notes/master/bilibili.js

[mitm]
hostname = app.bilibili.com
hostname = app.biliapi.net

**************************/
var obj = JSON.parse($response.body);
console.log("filter begin")
var list = obj.data.items
console.log(list.length)
var filter = list.filter(x => {
    var str = JSON.stringify(x)
    return !str.includes("推广")
})
console.log(filter.length)
var ad = list.filter(x => !filter.includes(x))
console.log(JSON.stringify(ad))
obj.data.items = filter
console.log("filter end")
$done({body: JSON.stringify(obj)}); 
