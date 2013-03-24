---
layout: post
title: "前端跨域总结分享"
description: "<p>JavaScript 出于安全方面的考虑，不允许跨域调用其他页面的对象。但在安全限制的同时也给注入 iframe 或是 ajax 应用上带来了不少麻烦。</p><p><strong>什么情况下会跨域</strong></p><p>1、主域不同</p><p>2、主域相同 子域不同</p><p>3、协议不同</p><p>4、端口号不同</p><p>注：域名和域名对应 IP 之间，也在跨域之列。</p>"
category: javascrit
tags: [domain, js]
---
{% include JB/setup %}

本文整理自百度内部资料和怿飞的博客。

### 浏览器同源策略

源由协议， 域，端口号定义。

浏览器不允许从一个document中访问另一不同域下的document的dom元素。

在网络访问中，一个源可以向另一个不同源发送数据，但不可以从另一个源读取数据。

### 什么情况下会跨域

**1、主域不同**

Baidu.com

Sina.com

**2、主域相同 子域不同**

Zhidao.baidu.com

Baidu.com

**3、协议不同**

http://www.baidu.com

https://www.baidu.com


**4、端口号不同**

http://zhidao.baidu.com

https://zhidao.baidu.com:8878

### Iframe跨域通信

**不跨域时**

访问iframe： contentWindow

访问父级：parent

访问顶级：top

**主域相同 子域不同**

使用document.domain = 主域名

**主域不同**

1、Hash

原理	

动态改变location.hash，iframe不会重载

无论跨域与否，iframe内可以获取自己的location.hash

只要域名相同就能通信，即使ABC三层嵌套

缺点

数据容量是有限的（受url长度的限制）

而且数据暴露在url中（用户可以随意修改）

2、Window.name

是什么


window.name 传输技术，原本是 [Thomas Frank](http://www.thomasfrank.se/about.html) 用于解决 cookie 的一些劣势（每个域名 4 x 20 Kb 的限制、数据只能是字符串、设置和获取 cookie 语法的复杂等等）而发明的（详细见原文：《[Session variables without cookies](http://www.thomasfrank.se/sessionvars.html)》），后来 [Kris Zyp](http://www.sitepen.com/blog/2008/07/22/windowname-transport/) 在此方法的基础上强化了 window.name 传输 ，并引入到了 Dojo （dojox.io.windowName），用来解决跨域数据传输问题。

阅读更多：淘宝网前端攻城师 [怿飞的BLOG](http://www.planabc.net/2008/09/01/window_name_transport/)

数据更大（2M）

参考：[www.sitepen.com](http://www.sitepen.com/blog/2008/07/22/windowname-transport/)

[三点优势](http://openajax.org/pipermail/security/2008q2/000265.html)

<p style="text-align:justify; text-justify:inter-ideograph">

I have been investigating an idea for a secure cross-site transport, which I believe could be a very useful technique for cross-domain data transfers. I posted this on the caplet at yahoogroups.com mailing list, so I apologize if you have already received this (I am sure there are folks on both lists). However, I want to see if this would be valuable mechanism for accessing cross-domain data on current browsers in lieu of current techniques like JSONP or FIM.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">

The basic idea is this: do a request with an iframe (GET or POST) to a cross-domain target, and then the target responds with an page that sets it's window.name to the content of the resource that was requested. The requester then changes the iframe back to a page that is in same domain as the requester, and the requesting page can then retrieve the frame's window.name property to retrieve the data from the target resource. The window.name is not set at the top level (would could leak information when navigating to a new page), but rather at the frame level. At the frame level, the window.name property is only accessible to a page with the same domain, which is why we have to navigate the frame back to a page with the same domain to access the property value. This means that the window.name property is never accessible to any other domains (in the case of multiple widget domains) except the requester and the target. Once the frame has been navigated back to the same domain and the window.name value has been retrieved by the requester, the frame is destroyed to further prevent the possibility of information leakage.
</p>


This has several advantages:


<p style="text-align:justify; text-justify:inter-ideograph">
1. It is secure, JSONP/script tag insertion is not. That is, it is as secure as other frame based secure transports like fragment identifier messaging (FIM), and Subspace. Frames also have their security issues, with phishing and such, but that is quite a different security exploit.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">
2. It is much faster than FIM, because it doesn't have to deal with small packet size of a fragment identifier, and it doesn't have as much "machine gun" sound effects. It is also faster than Subspace. Subspace requires two iframes and two local html files to be loaded to do a request. Frame Naming only requires one iframe and one local file.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">
3. It is simpler and more secure than Subspace and FIM. FIM is somewhat complicated, and Subspace is very complicated. Subspace also has a number of extra restrictions and setup requirements, like declaring all of the target hosts before hand and having DNS entries for a number of different particular hosts. window.name is very simple and easy to use.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">
The main advantage of Subspace over window.name is that Subspace uses the script tag/JSONP loading technique which has pretty decent acceptance and implementation. window.name is easier for servers to implement than FIM, but it still requires a few lines of HTML and String quoting around the resource.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">
<a href="http://sitepen.com/labs/code/secure/dojox/io/tests/windowName.html">Here</a> is a demonstration of my implementation of window.name. This is based on Dojo, and by default connects to a x-domain resource served from my demo version of Persevere (I added the window.name capability to it), but you can give it any URL that will output data via the window.name format. It appears to work in all the major browsers. The idea is based Thomas Franke's new library for doing session variables with window.name, but this obviously a completely different goal. I think you could also adapt this technique for doing cross-frame messaging (emulate postMessage). Also, my apologies that the demo is slow, it is using an "unbuilt" version of Dojo. It is much faster when built.
</p>


<p style="text-align:justify; text-justify:inter-ideograph">
Anyway, does this seem like a reasonable approach to cross-site requests (while we wait for XDR and/or XHR/AC)?
</p>

Thanks,    

Kris

注：中文两端对齐

{%highlight html%}
<div style="font-size:12px;width:300;text-align:justify; text-justify:inter-ideograph">
长文本
</div>
{%endhighlight%}

看完这个邮件，对老外的热情和真挚，佩服得五体投地。


3、postMessage

原理

HTML5新增的postMessage方法，通过postMessage来传递信息，对方可以通过监听message事件来获取信息

缺点

需浏览器支持该api

### Ajax跨域请求

1、Jsonp

原理：

通过 script 标签可以引入任意域下的js的代码，在当前域下执行。

2、跨域资源共享（CORS）

原理

跨域资源共享（CORS ）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，允许网页从不同的域访问其资源， 简言之，CORS就是为了让AJAX可以实现可控的跨域访问而生的

实现

服务器端 \-Header set Access-Control-Allow-Origin \*

3、其他解决方案

后端服务代理

Flash

### 参考

[http://www.w3.org/Security/wiki/Same_Origin_Policy](http://www.w3.org/Security/wiki/Same_Origin_Policy)

[http://www.slideshare.net/zhangsuoyong/ss-10511572](http://www.slideshare.net/zhangsuoyong/ss-10511572)

[http://www.slideshare.net/ksky521/ss-13232998](http://www.slideshare.net/ksky521/ss-13232998)

全文完。












