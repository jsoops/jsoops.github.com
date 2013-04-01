---
layout: post
title: "学习 CSS 布局"
description: "<p>从2005年开始，我在潘卓芳的间接指导下，开始学习CSS，但是这么多年过去了，一直没有入门，顶多能修改一些局部的样式，而且必须查手册。</p><p>今天从在看瀑布流的时候，发现<a href='http://liuxiaofan.com/?p=1269' target='_blank'>刘晓帆的博客</a>的这个文章，真是我的福音：）</p><p>1. 固定宽度，中部DIV内容优先显示布局</p><p>2. 高度自适应的三列布局</p><p>3. 中间宽度自适应3列布局</p>"
category: css
tags: [css, layout]
---
{% include JB/setup %}

从2005年开始，我在潘卓芳的间接指导下，开始学习CSS，但是这么多年过去了，一直没有入门，顶多能修改一些局部的样式，而且必须查手册。

今天从在看瀑布流的时候，发现[刘晓帆的博客](http://liuxiaofan.com/?p=1269)的这个文章，真是我的福音：）

### 1. 固定宽度，中部DIV内容优先显示布局

说明：这种布局一般常见与社交网站，例如QQ空间，朋友网等等，特点是把中部信息的内容放在前面显示，左侧菜单内容最后显示。

实现方法：重点在于使用了`margin-left:-960px`;这样样式，如果能深入了解一下 margin 的负值和浮动原理就可以很好的理解此方法了。

```html
<!DOCTYPE>
<html>
<head>
	<meta charset="utf-8">
	<title>中间内容优先显示的3列布局</title>
	<style type="text/css">
		.warp{width: 960px;margin: 0px auto;}
		.main{float: left;width: 100%;}
		#dyleft {width: 200px;float: left;margin-left: -960px;background: #ccc;}
		#dycenter {margin: 0 210px;background: #ccc;}
		#dyright {float: right;width: 200px; margin-left: -200px; background: #ccc;}
	</style>
</head>
<body>
	<div class="warp">
		<div class="main">
			<div id="dycenter">
				中间内容优先
			</div>
		</div>
		<div id="dyright">
			右栏固定宽度为200px
		</div>
		<div id="dyleft">
			左栏固定宽度为200px
		</div>
	</div>
</body>
</html>
```

### 2. 高度自适应的三列布局

说明：之前很多人都在问的一个布局方法，在表格布局时代80%的网站都使用这样的布局，不过现在很少见了，刚刚由表格时代过渡到div时代的时候很多人都在纠结这个问题，当然实现的方法也很多，下面我这里的方法是总结过最好的了。

实现方法：主要用到了margin-bottom:-2000px和padding-bottom:2000px这2个样式，话说maring的负值还是很有意思的，值得深入了解一下。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>DIV三列高度自适应-BY刘晓帆</title>
	<style type="text/css">
		* {
		  padding: 0;
		  margin: 0;
		}

		.main .box {
		  float: left;
		  width: 300px;
		  background-color: #FFF;
		  margin-top: 8px;
		  margin-bottom: -2000px;
		  margin-left: 8px;
		  display: inline;
		  border: 1px solid #999;
		  padding-right: 8px;
		  padding-left: 8px;
		  padding-bottom: 2000px;
		  padding-top: 8px;
		}

		.main {
		  background-color: #CCC;
		  overflow: hidden;
		  width: 986px;
		  margin-right: auto;
		  margin-left: auto;
		  position: relative;
		}

		.main_bottom {
		  background-color: #CCC;
		  height: 8px;
		  width: 986px;
		  margin-right: auto;
		  margin-left: auto;
		  overflow: hidden;
		}

		.main .box .bottom_line {
		  background-color: #999;
		  height: 1px;
		  position: absolute;
		  width: 318px;
		  bottom: 0px;
		  _bottom: -1px;
		  left: 8px;
		  display: inline;
		  overflow: hidden;
		}

		.main .box .bottom_line2 {
		  background-color: #999;
		  height: 1px;
		  position: absolute;
		  width: 318px;
		  bottom: 0px;
		  _bottom: -1px;
		  left: 334px;
		  display: inline;
		  overflow: hidden;
		}

		.main .box .bottom_line3 {
		  background-color: #999;
		  height: 1px;
		  position: absolute;
		  width: 318px;
		  bottom: 0px;
		  _bottom: -1px;
		  left: 660px;
		  display: inline;
		  overflow: hidden;
		}
	</style>
</head>
<body>
<div class="main">
  <div class="box">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <div class="bottom_line"></div>
  </div>
  <div class="box">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <div class="bottom_line2"></div>
  </div>
  <div class="box">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <div class="bottom_line3"></div>
  </div>
</div>
<div class="main_bottom"></div>
</body>
</html>
```

### 3. 中间宽度自适应3列布局

说明：典型的亚马逊网站的布局，中间内容是自适应的，左右为固定宽度。

实现方法：分2步，先固定左列，然后在右列里面在做文章，有浮动的div放在前面，左浮动的div不加浮动会自动上去，然后在设置右边距，此方法还可以延伸2列左栏自适应布局。

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>中间宽度自适应3列布局</title>
<style type="text/css">
	*{padding: 0;margin:0;font-size: 12px;}
	.warp{margin-left: 220px;}
	.left{float: left;width:204px;border:solid 3px #F59494;}
	.mid{margin-right: 276px;border:solid 3px #F59494;}
	.right{float: right;width: 260px;border:solid 3px #F59494;}
</style>
</head>
<body>
<div class="wbox">
  <div class="left">左侧...</div>
  <div class="warp">
    <div class="box">
      <div class="right">右侧...</div>
      <div class="mid">中间...</div>
    </div>
  </div>
</div>
</body>
</html>
```
### 4. 继续学习最简单的 Layout

昨天管理了下 [Learn Perl in about 2 hours 30 minutes](http://www.chenzixin.com/porgram/2013/03/28/learn-perl-in-about-2-hours-30-minutes/)，最初是想全文转为 MarkDown，后来发现工作量太大了，而且为了显示美观，必须加两端对齐，还是有HTML片段。

于是放弃，只给原页面加了 BootStrap 的样式，限制了 body 的宽度为 960px, 并居中对齐。

```html
body {
	padding: 2em;
	font-family: Tahoma;
	width: 960px;
	margin: auto;
}
```
原来居中这么简单啊！

和英文两端对齐：

```css
p{
	text-align:justify; text-justify:inter-ideograph;
}
```
上周熬夜看 Conflunce 的官方文档，路遇几次服务器维护，出错页面的样式也不错，简单大方，代码：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Site undergoing maintenance</title>

  <style type="text/css">

  body { -webkit-transform: rotate(-8deg); }

    .content {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      padding-bottom: 5px;
    }

    .info {
      font-size: 24px;
      color: #003366;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 0px;
      text-align: center;
      margin-top: 5px;
    }

    .message {
      margin: auto;
      margin-top: 120px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      border: 1px solid #3C78B5;
      width: 500px;
    }

    .signiture {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      font-style: italic;
      color: #999999;
    }

  </style>
</head>
<body>

  <div class="message">

    <p class="info">Sorry Mate!</p>

    <p class="content">
      It looks like you caught us doing some system maintenance. We upgrade 
often to test out new features and make sure you'll really like them. So 
please try again soon.
    </p>

    <p class="signiture">The Atlassian Team</p>

  </div>

</body>
</html>
```

包含一段让页面倾斜的CSS：

```css
body { -webkit-transform: rotate(-8deg); }
```

OSchina 的愚人节礼物。
