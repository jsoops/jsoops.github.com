---
layout: post
title: "使用 Image Beacons 优化用户体验"
description: "<p>发现有些 Web 程序中会在页面中放置一个隐藏的 img，然后把它的 src 设置为调用后台业务逻辑的 url。这样做有什么好处？和加载页面后通过 Javascript 发起一个 ajax 请求有什么区别吗？</p><p>英文术语叫：image beacon。</p>"
category: javascript
tags: [javascript]
---
{% include JB/setup %}

SegmentFault 网友提问：

>发现有些 Web 程序中会在页面中放置一个隐藏的 img，然后把它的 src 设置为调用后台业务逻辑的 url。这样做有什么好处？和加载页面后通过 Javascript 发起一个 ajax 请求有什么区别吗？

airyland 的回答很赞：

英文术语叫：image beacon

在Google 的 [Make the Web Faster](https://developers.google.com/speed/?hl=zh-CN) 的 [Track web traffic in the background](https://developers.google.com/speed/docs/best-practices/rtt?hl=zh-CN#AvoidRedirects) 中有提到。

主要应用于只需要向服务器发送数据的场合，且无需服务器有消息体回应。比如收集访问者的统计信息。

一般做法是服务器用一个 1x1 的 gif 图片来作为响应，当然这有点浪费服务器资源。因此用 header 来响应比较合适，目前比较合适的做法是服务器发送 "204 No Content"，即 “服务器成功处理了请求，但不需要返回任何实体内容”。

另外该脚本的位置一般放在页面最后以免阻塞页面渲染,并且一般情况下也不需要 append 到 DOM 中。通过它的 onerror 和 onload 事件来检测发送状态。

```html
<script type="text/javascript">
 var thisPage = location.href;
 var referringPage = (document.referrer) ? document.referrer : "none";
 var beacon = new Image();
 beacon.src = "http://www.example.com/logger/beacon.gif?page=" + encodeURI(thisPage)
 + "&ref=" + encodeURI(referringPage);
</script>
```

这样做和ajax请求的区别在于：

1. 只能是get请求，因此可发送的数据量有限。

2. 只关心数据是否发送到服务器，服务器不需要做出消息体响应。并且一般客户端也不需要做出响应。

3. 实现了跨域。

----

## Javascript Image Beacons For Tracking User Interactions

#### Image Beacons

Image beacons are used for tracking in various ways. The gist behind image beacons is that your application is sending information to your server without expecting information back. You can expect image beacons in newsletter emails, where javascript is not allowed.

 ```html
 <!-- Example of possible beacon located in a newsletter email -->
<img src="http://domain.com/emailTrack.php?email=324&user=JohnQ" />
```

In the above example emailTrack.php will be called ONLY after the email is opened and the markup is rendered. Sending the server an indication that said email was actually opened gives us an idea of how many people have read the newsletter and exactly what users have not read the newsletter.

>Traditionally the script emailTrack.php would return a 1×1 transparent image as a response. By doing so, the DOM (HTML) will not reflect any visual changes.

Using beacons in an email is one thing, but using beacons in an interactive application for tracking presents a problem. First, you do not want to add a 1×1 image to your DOM every time you track an interaction. If communication temporarily breaks between you and said server, you are left with a broken image in your DOM. Second, if you are not expecting a response from the server then there is no need to introduce any element into your DOM.

#### Javascript Image Beacons – Beacon.js

Nicolas Zakas, talks about javascript image beacons in his book 《High Performance Javascript》. The small section about beacons really opened up my mind as to how I should go about tracking user interaction. So I whipped up the following utility function to help me with image beacons via javascript.

>NOTE: It is recommended that your server side script returns a header response code of 204: “No Content”. This way the browser will not be hung up waiting for a response body.

##### Beacon Utility Function

```javascript
// Utility Function for Image Beacons to track interactions
beacon = function(opts){
    // Make sure we have a base object for opts
    opts = opts || {};
    // Setup defaults for options
    opts.url = opts.url || null;
    opts.vars = opts.vars || {};
    opts.error = opts.error || function(){};
    opts.success = opts.success || function(){};
 
    // Split up vars object into an array
    var varsArray = [];
    for(var key in opts.vars){ varsArray.push(key+'='+opts.vars[key]); }
    // Build query string
    var qString = varsArray.join('&');
 
    // Create a beacon if a url is provided
    if( opts.url )
    {
        // Create a brand NEW image object
        var beacon = new Image();
        // Attach the event handlers to the image object
        if( beacon.onerror )
        { beacon.onerror = opts.error; }
        if( beacon.onload )
        { beacon.onload  = opts.success; }
 
                // Attach the src for the script call
        beacon.src = opts.url + '?' + qString;
    }
}
```

>Note: By creating a javascript image object and assigning it a “src”. The browser loads the “image” into the javascript object, but the image object is never introduced into the DOM. So if the image “src” fails, the onError handler is called but our DOM stays intact.

##### Parameter Object Specification
The parameter for this function is an object with the following properties:

* URL – *required* url to the location of your tracking (server side) script.

* VARS – *required* hash map (JS Object) that represents query string [GET] parameters passed along to your server side script.

* ERROR – function that is used as a callback incase the browser had trouble making the call to the server.

* SUCCESS – function that is used as a callback when the browser has properly made the call to the server.


#### Examples

A likely scenario for heavy javascript interaction would be a mapping application. Here are some examples on how you would use the above utility function.

```javascript
// Handler for drawing a rectangle on map
function handleDrawRectangle( coordinates ){
     beacon({
          url : 'trackRectangle.php',
          vars : { token:cookie_data, location:coordinates }
     });
 
     // Other code executed after a rectangle is drawn
}
 
// Handler for showing Traffic Layer on Map
function showTraffic(){
     beacon({
          url : 'trackTraffic.php',
          vars : { token:cookie_data }
     });
 
     // Show traffic layer
}
 
// Handler for clicking on Point of Interest Marker
function clickPOI( marker ){
     beacon({
          url : 'trackPOI.php',
          vars : {
              token:cookie_data,
              category:marker.category,
              location:marker.location,
              establishment:marker.name
          },
         error : function(){
              setTimeout( function(){ clickPOI(marker) }, 200 );
         }
     });
}
```

原文：[这里](http://www.arlocarreon.com/blog/javascript/javascript-image-beacons-for-tracking-user-interactions/)





