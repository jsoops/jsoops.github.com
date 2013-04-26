---
layout: post
title: "JavaScript 伪造 Referer 来路"
description: "<p>WinHttp.WinHttpRequest.5.1 是 msxml 4.0 的底层对象，也就是说 XMLHTTP/ServerXMLHTTP 也是在它的基础上封装而来。用 WinHttpRequest 发的请求，Fiddler 监测不到。</p><p>从客户端提交来的任何数据都不可信，因为发送的 http 数据包不但表单值可以修改，连数据包的 header 都可以随意修改。同时也说明，使用 VIEWSTATE 对表单的安全性无任何用处。
</p>"
category: javascript
tags: [js, referer]
---
{% include JB/setup %}

作者 [6enz](http://hi.baidu.com/tiyannima/item/9361e74f5021eb15886d10fa)

WinHttp.WinHttpRequest.5.1 是 msxml 4.0 的底层对象，也就是说 XMLHTTP/ServerXMLHTTP 也是在它的基础上封装而来。用 WinHttpRequest 发的请求，Fiddler 监测不到。

Google一下发现它居然用可以成功伪造所有 http 请求的 header 信息！下面的代码通过伪造 referer 的值，假装从百度首页提交一个表单到指定的 url 去：


```javascript
var url = "http://www.yourtarget.com";  
var param = "name=david&age=30";  
var obj = new ActiveXObject("WinHttp.WinHttpRequest.5.1");  
obj.Open("POST", url, false);  
obj.Option(4) = 13056;  
obj.Option(6) = false; //false可以不自动跳转，截取服务端返回的302状态。  
obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
obj.setRequestHeader("Referer", "http://www.baidu.com");  
obj.Send(param);  
WScript.Echo(obj.responseText);
```

既然可以用它来伪造所有 http 请求的 header，那 Cookies、Sessionid 自然也就可以得到并传递了。下面是实战代码，用命令行登录博客园，共三次请求，第一次请求获取表单的 VIEWSTATE 和 EVENTVALIDATION，第二次带账户登录，第三次带Cookie访问其首页：

```javascript
//封装成远程访问的函数  
function RemoteCall(method, url, param, header){  
    var obj = new ActiveXObject("WinHttp.WinHttpRequest.5.1");  
    obj.Open(method||"GET", url, false);  
    obj.Option(4) = 13056;  
    obj.Option(6) = false;  
    if(method=="POST"){  
        obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
    }  
    if(header){  
        for(var key in header){  
            if(key=="Cookie"){//根据 MSDN 的建议，设置Cookie前，先设置一个无用的值  
                obj.setRequestHeader("Cookie", "string");  
            }  
            obj.setRequestHeader(key, header[key]);  
        }  
    }  
    obj.Send(param);  
    return obj;  
}  
//第一次远程访问博客园的登录入口  
var url = "http://passport.cnblogs.com/login.aspx";  
var objFirst = RemoteCall("GET", url, null);  
       
//取得 viewstate 与 eventvalidation  
var viewstate = objFirst.responseText.match(/id="__VIEWSTATE" value="(.*?)" \/>/)[1];  
var eventvalidation = objFirst.responseText.match(/id="__EVENTVALIDATION" value="(.*?)" \/>/)[1];  
       
//输入自己的账户与密码  
var username = "";  
var password = "";  
var param = "" 
+ "__VIEWSTATE="+encodeURIComponent(viewstate)   
+ "&__EVENTVALIDATION="+encodeURIComponent(eventvalidation)   
+ "&tbUserName="+username  
+ "&tbPassword="+password  
+ "&btnLogin="+encodeURIComponent("登  录");  
       
var objSecond = RemoteCall("POST", url, param);  
       
//登录成功后服务器执行 Response.Redirect 跳转，即向客户端发送了 302 状态代码  
WScript.Echo(objSecond.status); //302即登录成功， 如果是200，则登录失败，页面没有跳转  
       
//带上登录成功后的cookie，再次访问其首页  
var json = {"Cookie": objSecond.getResponseHeader("Set-Cookie")};  
var objThird = RemoteCall("GET", "http://www.cnblogs.com", null, json);  
fso = this.fso || new ActiveXObject("Scripting.FileSystemObject");
var file = "c:/output.txt", newTxt = 0;
newTxt = fso.OpenTextFile(file, 2, true);
newTxt.WriteLine(objThird.responseText);
//WScript.Echo(objThird.responseText);
```

上面的代码其实已经有一定恶意，只为证明使用 WinHttpRequest 确实可以模拟浏览器发送请求，服务端也无法区别是从浏览器来的，还是从命令行来的。

结论：从客户端提交来的任何数据都不可信，因为发送的 http 数据包不但表单值可以修改，连数据包的 header 都可以随意修改。同时也说明，使用 VIEWSTATE 对表单的安全性无任何用处。

