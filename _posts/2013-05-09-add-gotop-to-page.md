---
layout: post
title: "为页面添加 GoTop 按钮"
description: "<p>现在的网页，结构越来越复杂，高度也越来越长，很多网站为了提升用户体验，都加一个快速回到顶部的 Button，包括 <a href='http://www.pconline.com.cn/'>PConline</a> 在内。</p><p>今天从<a href='http://www.tanglangxia.com/archives/2647.html'>螳螂虾</a>上搬来代码，做了一个 Demo:</p><p><a href='/demo/dtop/index.html'>点这里</a></p>"
category: javascript
tags: [js, css]
---
{% include JB/setup %}

本地环境错乱，可能永久停止更新！

现在的网页，结构越来越复杂，高度也越来越长，很多网站为了提升用户体验，都加一个快速回到顶部的 Button，包括 [PConline](http://www.pconline.com.cn/) 在内。

今天从[螳螂虾](http://www.tanglangxia.com/archives/2647.html)上搬来代码，做了一个 Demo:

[点这里](/demo/dtop/index.htm)

[刘晓帆](http://liuxiaofan.com/?p=1327)的博客，也加了这个功能，Button 为圆形，不过 CSS 代码量太大了，而且 IE8 下又直接打回方形，和现代浏览器的视觉差异太大，感觉不太好。

毕竟从圆角矩形退回到矩形，跳跃性没有那么强。

补：

今天看到百度图片也用了类似的效果，不过未用 CSS3，而是背景图，故能很好的兼容 IE6：

[点这里](/demo/dtop/index.html)

注：不兼容 IE6 !

WordPress 还有一个插件：[Dynamic "To Top" Plugin](http://wordpress.org/extend/plugins/dynamic-to-top/)
