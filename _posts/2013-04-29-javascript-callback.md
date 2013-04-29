---
layout: post
title: "理解 JavaScript 回调函数"
description: "<p>英特尔购物助手的项目中，用到了域名请求数据，我们的方案是 JSONP。</p><p>虽然很早就会用，当然主要是得益于 jQuery，但是一直未仔细理解 JSONP，今天找了一些资料实习。</p><p>克服该限制更理想方法是在 Web 页面中插入动态脚本元素，该页面源指向其他域中的服务 URL 并且在自身脚本中获取数据。脚本加载时它开始执行。该方法是可行的，因为同源策略不阻止动态脚本插入，并且将脚本看作是从提供 Web 页面的域上加载的。但如果该脚本尝试从另一个域上加载文档，就不会成功。幸运的是，通过添加 JavaScript Object Notation (JSON) 可以改进该技术。</p>"
category: javascript
tags: [js, callback]
---
{% include JB/setup %}

英特尔购物助手的项目中，用到了域名请求数据，我们的方案是 JSONP。

虽然很早就会用，当然主要是得益于 jQuery，但是一直未仔细理解 JSONP，今天找了一些资料实习。

先看普通的 JavaScript Callback。

<a href="http://en.wikipedia.org/wiki/Callback_(computer_programming)">Wikipedia Callback</a>

[这篇文章](http://www.impressivewebs.com/callback-functions-javascript/)讲得深入浅出，看这段代码，基本就能明白：

```javascript
function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
  
    $('#sandwich').animate({
        opacity: 0
    }, 5000, function() {
        alert('Animation complete.');
    });
  
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', function() { 
    alert('Finished eating my sandwich.');
});
```

再深入 JSONP，这里我们参考 IBM Developerworks 的两篇文章，概念性的东西都在第一节：

[使用 JSONP 实现跨域通信，第 1 部分: 结合 JSONP 和 jQuery 快速构建强大的 mashup](http://www.ibm.com/developerworks/cn/web/wa-aj-jsonp1/index.html)

[使用 JSONP 实现跨域通信，第 2 部分: 使用 JSONP、jQuery 和 Yahoo! 查询语言构建 mashup](http://www.ibm.com/developerworks/cn/web/wa-aj-jsonp2/index.html)

**理解同源策略限制**

>同源策略阻止从一个域上加载的脚本获取或操作另一个域上的文档属性。也就是说，受到请求的 URL 的域必须与当前 Web 页面的域相同。这意味着浏览器隔离来自不同源的内容，以防止它们之间的操作。这个浏览器策略很旧，从 Netscape Navigator 2.0 版本开始就存在。

>克服该限制的一个相对简单的方法是让 Web 页面向它源自的 Web 服务器请求数据，并且让 Web 服务器像代理一样将请求转发给真正的第三方服务器。尽管该技术获得了普遍使用，但它是不可伸缩的。另一种方式是使用框架要素在当前 Web 页面中创建新区域，并且使用 GET 请求获取任何第三方资源。不过，获取资源后，框架中的内容会受到同源策略的限制。

>克服该限制更理想方法是在 Web 页面中插入动态脚本元素，该页面源指向其他域中的服务 URL 并且在自身脚本中获取数据。脚本加载时它开始执行。该方法是可行的，因为同源策略不阻止动态脚本插入，并且将脚本看作是从提供 Web 页面的域上加载的。但如果该脚本尝试从另一个域上加载文档，就不会成功。幸运的是，通过添加 JavaScript Object Notation (JSON) 可以改进该技术。

>同源策略不阻止将动态脚本元素插入文档中。也就是说，可以动态插入来自不同域的 JavaScript，并且这些域都携带 JSON 数据。这其实是真正的 JSONP（JSON with Padding）：打包在函数调用中的 JSON 数据。注意，为了完成该操作，Web 页面必须在插入时具有已经定义好的回调函数。

**jQuery 的 JSONP 支持**

从 1.2 版本开始，jQuery 拥有对 JSONP 回调的本地支持。如果指定了 JSONP 回调，就可以加载位于另一个域的 JSON 数据，回调的语法为：`url?callback=?`。

jQuery 自动将 `?` 替换为要调用的生成函数名。

```javascript
//使用 JSONP 回调
jQuery.getJSON(url+"&callback=?", function(data) {
    alert("Symbol: " + data.symbol + ", Price: " + data.price);
});
```

为此，jQuery 将一个全局函数附加到插入脚本时需要调用的窗口对象。另外，jQuery 也能优化非跨域调用。如果向同一个域发出请求，jQuery 就将其转化为普通 Ajax 请求。

```java

@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
  throws ServletException, IOException {
	String jsonData = getDataAsJson(req.getParameter("symbol"));
	String output = req.getParameter("callback") + "(" + jsonData + ");";

	resp.setContentType("text/javascript");
          
	PrintWriter out = resp.getWriter();
	out.println(output);
	// prints: jsonp1232617941775({"symbol" : "IBM", "price" : "91.42"});
}
```




