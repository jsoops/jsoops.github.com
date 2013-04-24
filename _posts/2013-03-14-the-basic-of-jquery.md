---
layout: post
title: "jQuery 基础"
description: "<p>公司里最初推广 jQuery 的，也是孙宾，我在做会议室项目的时候，开始大量应用，再后来，听信谣言，以为真正的技术高手，都是用原生 JavaScript 的，加上写前端代码的机会也不多，故从 1.4.2 以后，就用得很少了。</p><p>前段时间看了玉伯也叫射雕的文章，深有感触，痛定思痛，重头再来。</p>"
category: jquery
tags: [jquery, ui, mobile]
---
{% include JB/setup %}

公司里最初推广 jQuery 的，也是孙宾，我在做会议室项目的时候，开始大量应用，再后来，听信谣言，以为真正的技术高手，都是用原生 JavaScript 的，加上写前端代码的机会也不多，故从 1.4.2 以后，就用得很少了。

前端时间看了[这个文章](https://github.com/lifesinger/lifesinger.github.com/issues/126)，深有感触，痛定思痛，重头再来。

玉伯也叫射雕：

>会原生 JavaScript 不代表什么，懂 jQuery、YUI 等才真正好。怎么这么多人有原生主义情结呢？走出那点小天地，海阔天高。

### 资源

1. [官方网站](http://jquery.com/)

2. [下载地址](http://jquery.com/download/) 各个版本都有

3. [官方 CDN](http://code.jquery.com/) 包括 UI

4. [Google CDN](https://developers.google.com/speed/libraries/) [Dev Guide](https://developers.google.com/speed/libraries/devguide)

	我之前一直疑惑，为何从 GitHub 上下载的项目，jQuery 的引用是这样的：

	```html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```
	昨天终于[查清楚了](http://stackoverflow.com/questions/547384/where-do-you-include-the-jquery-library-from-google-jsapi-cdn)：

	>By removing this ( I mean "http:"), you don't need to worry about switching between http and https.

	>It may look weird, but it’s a perfectly valid src attribute.  All the browser does is infer the protocol from the current location. 

	>[Read more...](http://blog.jonathanoliver.com/2010/09/http-and-https-with-google-cdn/)

5. [Sina CDN](http://lib.sinaapp.com/)

### 组件

----

* jQuery
* jQuery UI
* jQuery Mobile
* Qunit
* Sizzle
* API
* Books


https://github.com/ded/script.js

http://angularjs.org/



