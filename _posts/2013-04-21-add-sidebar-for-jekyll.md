---
layout: post
title: "为 Jekyll 增加侧边栏"
description: "<p>我记得最初搭建的 Jekyll 博客，页面简单得令人发指，后来慢慢的摸索 <a href='https://github.com/mojombo/jekyll/wiki/Liquid-Extensions'>Liquid Extensions</a>，为首页文章列表增加了摘要，而且应用了一点点技巧，使我的摘要可以灵活控制，有点像个样子了。</p><p>然后今天无意中浏览到一个机器人达人的博客<a href='http://brucebot.com/'>于仁颇黎</a>，又有了增加侧边栏的冲动，感觉这样的形式，更加饱满，而且也方便浏览。唉，大道至简，然而人的贪婪，又终会使事情趋向复杂。可以点<a href='/assets/images/2013/02/compare.png'>这里</a>对比一下，你更喜欢哪个版式？</p>"
category: jquery
tags: [jekyll, jquery]
---
{% include JB/setup %}

我记得最初搭建的 Jekyll 博客，页面简单得令人发指，后来慢慢的摸索 [Liquid Extensions](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions)，为首页文章列表增加了摘要，而且应用了一点点技巧，使我的摘要可以灵活控制，有点像个样子了。

然后今天无意中浏览到一个机器人达人的博客 [于仁颇黎](http://brucebot.com/)，又有了增加侧边栏的冲动，感觉这样的形式，更加饱满，而且也方便浏览。唉，大道至简，然而人的贪婪，又终会使事情趋向复杂。可以点[这里](/assets/images/2013/02/compare.png)对比一下，你更喜欢哪个版式？

1. 将模版改为左右分栏结构

2. 参考 archive，循环出分类和最近更新

	代码看[这里](https://gist.github.com/chenzixin/5430027)

3. 为侧边栏和顶栏增加 fix 效果

	BootStrap 实在太给力！

	```html
	<div class="navbar navbar-fixed-top"></div>
	<ul class="nav nav-list affix" id="sidebar"></ul>
	```
4. 如果发现有对齐问题，小小改下样式即可

	```css
	.mt50{
      margin-top: 50px;
    }

    .mt60{
      margin-top: 60px;
    }
	```

5. 为了两个栏位的区分更加清晰，给左侧增加了一点背景色

	```css
    #sidebar{
      background: linear-gradient(to right, #ffffff, #f2f2f2);
      background: -moz-linear-gradient(left, #ffffff 0%, #f2f2f2 100%);
      background: -webkit-linear-gradient(left,  #ffffff 0%,#f2f2f2 100%);
      background: -ms-linear-gradient(left, rgb(255, 255, 255), rgb(242, 242, 242));
      background: -o-linear-gradient(left, rgb(255, 255, 255), rgb(242, 242, 242));
    }
    ```

6. 照顾手机屏幕，当检查到 UA 为 Mobile 的时候，自动隐藏侧边栏，并修正对齐
	
	今天才知道， jQuery 1.9 移除了 $.browser 方法，我是用[这个插件](https://github.com/terkel/jquery-ua)检查手机的：

	```javascript
	$(function () {
      if($.ua.platform.mobile){
        $("#sidebar").hide();
        $("#mainContent").css("margin-top", "-50px");
      }
    });
    ```

    [这里](http://pupunzi.open-lab.com/2013/01/16/jquery-1-9-is-out-and-browser-has-been-removed-a-fast-workaround/)也顺便给一个轻便的检查 UA 的方法：

    ```javascript
    jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
	```
收工。



