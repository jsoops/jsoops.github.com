---
layout: post
title: "向 ExtMail 学习 CSS 和 JavaScript"
description: " <p>今天在公司登录了一下 Web Mail，回家打开电脑，发现一直停留在加载页面，Loading 效果简洁漂亮，还以为是 Gmail，于是动手扒了下来。</p><p>其实关键是图片和配色协调，协调产生美。</p><p>后来进而发现，还有很多 JavaScript 技巧值得学习。ExtMail 虽然是一款免费的软件，但是功能强大，体验也不错。</p>"
category: css
tags: [css, cookie, date, form, import, link]
---
{% include JB/setup %}

今天在公司登录了一下 Web Mail，回家打开电脑，发现一直停留在加载页面，Loading 效果简洁漂亮，还以为是 Gmail，于是动手[扒了下来](/demo/loading/index.html)。

其实关键是图片和配色协调，协调产生美。

后来进而发现，还有很多 JavaScript 技巧值得学习。ExtMail 虽然是一款免费的软件，但是功能强大，体验也不错。

### Loading 效果

gif 图和背景色配合很好，CSS 用了绝对定位。为了演示效果，我在代码中模拟了一个加载数据的过程，复习 jQuery 和 setTimeout。

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		#LoadingStatus {
			position: absolute;
			left: 5px;
			top: 5px;
			background: #CC0000;
			height: 18px;
			color: #fff;
			padding: 2px 20px 1px 10px;
			display: none;
			font-size: 12px;
		}
		#clkTag{
			position: absolute;
			left: 5px;
			top:50px;
		}
	</style>
</head>
<body>	
	<div id="LoadingStatus"><img src="toploading.gif" align="absmiddle">&nbsp;Loading...</div>
	<button id="clkTag">点我加载数据</button>

	<script src="http://www1.pconline.com.cn/api/libs/jquery/jquery-1.3.2.min.js"></script>
	<script>
	var loadOver = function () {
        $("#LoadingStatus").hide();  
        $("#clkTag").text("数据加载完成");
    }

	$(function () {
		$("#clkTag").click(function () {
			$("#LoadingStatus").show();//添加内联样式
			setTimeout(loadOver, 3000)
		});
	});
	</script>
</body>
</html>
```

观察了一下 jQuery.show() 的作用原理，它并非修改 LoadingStatus 的 display 为 block，而是直接添加内联样式 display = block，比内部样式有更高的优先级。

以下摘自 [W3school CSS 简介](http://www.w3school.com.cn/css/css_intro.asp)

**多重样式将层叠为一个**

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

层叠次序

一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 `<head>` 标签内部）
4. 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：`<head>` 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

**如何插入样式表**

当读到一个样式表时，浏览器会根据它来格式化 HTML 文档。插入样式表的方法有三种：

外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 `<link>` 标签链接到样式表。`<link>` 标签在（文档的）头部：

```html
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 `<style>` 标签在文档头部定义内部样式表，就像这样:

```html
<head>
<style type="text/css">
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
</head>
```

内联样式

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。

```html
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```

多重样式

如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。

例如，外部样式表拥有针对 h3 选择器的三个属性：

```css
h3 {
  color: red;
  text-align: left;
  font-size: 8pt;
  }
```

而内部样式表拥有针对 h3 选择器的两个属性：

```css
h3 {
  text-align: right; 
  font-size: 20pt;
  }
```

假如拥有内部样式表的这个页面同时与外部样式表链接，那么 h3 得到的样式是：

```css
color: red; 
text-align: right; 
font-size: 20pt;
```

即颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。

**don’t use @import**

W3School 中讲到了引入样式表的三种方式，其实我一直记得还有第四方式的：

<https://developer.mozilla.org/en/docs/CSS/@import>

[MDN](https://developer.mozilla.org/en-US/docs/) 真是前端的宝藏：

- [HTML](https://developer.mozilla.org/en-US/docs/HTML)

- [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5)

- [JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript)

- [Ajax](https://developer.mozilla.org/en-US/docs/AJAX)

- [CSS](https://developer.mozilla.org/en-US/docs/CSS)

但是很快发现了 import 的问题：

>From a page speed standpoint, @import from a CSS file should almost never be used, as it can prevent stylesheets from being downloaded concurrently. For instance, if stylesheet A contains the text:

```css
@import("stylesheetB.css");
```

>then the download of the second stylesheet may not start until the first stylesheet has been downloaded. If, on the other hand, both stylesheets are referenced in <link> elements in the main HTML page, both can be downloaded at the same time. If both stylesheets are always loaded together, it can also be helpful to simply combine them into a single file.

>There are occasionally situations where @import is appropriate, but they are generally the exception, not the rule.

详尽的测试见[这里](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)，真佩服老外的用心。

### ExtMail JavaScript

发现 ExtMail 的 JavaScript 也写得不错，毕竟是邮件系统，考虑很周全。

**cookie 操作**

```javascript
function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function getCookie(name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1) return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1) cookieEndIndex = c.length;
    return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
```

**时间处理**

这一部分没有看懂，先记录

```javascript
function fixDate(date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0) date.setTime(date.getTime() - skew);
}

function genNowTime() {
    var now = new Date();
    fixDate(now);
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    now = now.toGMTString();
    return now;
}
```

比较有意思的是，new Date(0) 会输出：

```
Thu Jan 01 1970 08:00:00 GMT+0800 (CST)
```

**记住用户**

```javascript
function rememberMe(f) {
    var now = genNowTime();
    if (f.username != null) setCookie('ExtMail_username', f.username.value, now, '/', '', '');
    if (f.domain != null) setCookie('ExtMail_domain', f.domain.value, now, '/', '', '');
}

function forgetMe(f) {
    deleteCookie('ExtMail_username', '/', '');
    deleteCookie('ExtMail_domain', '/', '');
    deleteCookie('ExtMail_passwd', '/', '');
    //f.username.value = '';
    //f.domain.value = '';
    //f.password.value = '';
}

function checkType(f) {
    if (f.bakecookie.checked) rememberMe(f)
    else forgetMe(f);
}
```
f 为 登录表单。

**设定表单焦点**

```javascript
function setFocus() {
    var f = document.forms['login'];
    if (f) {
        if (f.username.value == null || f.username.value == "") {
            f.username.focus();
        } else {
            f.password.focus();
        }
    }
}
```

**获取 domain**

```javascript
function domain() {
var url = document.location.href;
url = url.replace(/^(http:\/\/|https:\/\/)*([a-zA-Z0-9-_\.=]+):*.*/, "$2");
return url;
}
```
**选择表单**

```html
<form name="login">
	<imput type="text" name="username"/>
</form>

<script>
	var f = document.login;
	var name = f.username
</script>
```

全文完，处处留心皆学问。







