---
layout: post
title: "CSS 渐变学习"
description: "<p>为了显示一个渐变而专门制作一个图片的做法是不灵活的，而且很快会成为一种不好的做法。但是遗憾的是，截至写这篇文章，可能还必须这样做，但是希望不会持续太久。多亏 Firefox 和 Safari/Chrome，我们现在可以使用最少的努力实现强大的渐变。在本文中，我们将展示 CSS 渐变的简单实现以及该属性在 Mozilla 和 webkit 内核浏览器中的不同。</p>"
category: css
tags: [css, gradient]
---
{% include JB/setup %}


为了显示一个渐变而专门制作一个图片的做法是不灵活的，而且很快会成为一种不好的做法。但是遗憾的是，截至写这篇文章，可能还必须这样做，但是希望不会持续太久。多亏 Firefox 和 Safari/Chrome，我们现在可以使用最少的努力实现强大的渐变。在本文中，我们将展示 CSS 渐变的简单实现以及该属性在 Mozilla 和 webkit 内核浏览器中的不同。

-- net.tutsplus.com

---

CSS3 Gradient 分为：

- linear-gradient 线性渐变

- radial-gradient 径向渐变


示例：

- <http://www.jsoops.com/demo/gradient/linear.html>

- <http://www.jsoops.com/demo/gradient/radial.html>

- <http://www.jsoops.com/demo/gradient/angle.html>

---

### 线性渐变

- 原文：<http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-understanding-css3-gradients/>

- 视频：<http://www.youtube.com/watch?v=9D2hyM5SSCE>

- 编译：<http://www.qianduan.net/understand-the-css3-gradient.html>

- 测试：<http://gradients.glrzad.com/>

#### Webkit

```html
/* Syntax, taken from: http://webkit.org/blog/175/introducing-css-gradients/ */
-webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)

/* In practice... */
background: -webkit-gradient(linear, 0 0, 0 100%, from(red), to(blue));
```

- 渐变的类型? (linear)
- 渐变开始的X Y 轴坐标(0 0 或者 left-top)
- 渐变结束的X Y 轴坐标(0 100% 或者 left-bottom)
- 开始的颜色? (from(red))
- 结束的颜色? (to(blue))

#### Mozilla

```css
/* Syntax, taken from: http://hacks.mozilla.org/2009/11/css-gradients-firefox-36/ */
 -moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )
 
/* In Practice */
background: -moz-linear-gradient(top, red, blue);
```

- 请注意我们将渐变的类型——linear——放到了属性前缀中了
- 渐变从哪里开始? (top – 我们也可以使用度数，比如 -45deg)
- 开始的颜色? (red)
- 结束的颜色? (blue)

#### IE

E并不支持CSS渐变，但是提供了渐变滤镜。

```css
filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ff0000'); /* IE6,IE7 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ff0000')"; /* IE8 */
```

#### Opera

```css
/* Syntax*/
-o-linear-gradient([<point> || <angle>,]? <stop>, <stop> [, <stop>]); /* Opera 11.10+ */
 
background: -o-linear-gradient(top, #ffffff, #ff0000);
```

参数：top、bottom 垂直，left、right 水平

例如：top 时从顶部由 #ffffff 到 #ff0000 渐变

#### Linear Gradient with Even Stops

```css
/* Firefox 3.6+ */
background: -moz-linear-gradient(left, #ace, #f96, #ace, #f96, #ace); 
/* Safari 4-5, Chrome 1-9 */
background: -webkit-gradient(linear, left top, right top, from(#ace), color-stop(0.25, #f96), color-stop(0.5, #ace), color-stop(0.75, #f96), to(#ace)); 
/* Safari 5.1+, Chrome 10+ */
background: -webkit-linear-gradient(left, #ace, #f96, #ace, #f96, #ace); 
/* Opera 11.10+ */
background: -o-linear-gradient(left, #ace, #f96, #ace, #f96, #ace);
```

#### Angle

```css
.deg0 {
  background: -moz-linear-gradient(0deg, #ace, #f96);
  background: -webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(0deg, #ace, #f96);
  background: -o-linear-gradient(0deg, #ace, #f96);
}
     
.deg45 {
  background: -moz-linear-gradient(45deg, #ace, #f96);
  background: -webkit-gradient(linear,0 100%,100% 0%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(45deg, #ace, #f96);
  background: -o-linear-gradient(45deg, #ace, #f96);
}
.deg90 {
  background: -moz-linear-gradient(90deg, #ace, #f96);
  background: -webkit-gradient(linear,50% 100%,50% 0%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(90deg, #ace, #f96);
  background: -o-linear-gradient(90deg, #ace, #f96);
}
.deg135 {
  background: -moz-linear-gradient(135deg, #ace, #f96);
  background: -webkit-gradient(linear,100% 100%,0 0,from(#ace),to(#f96));
  background: -webkit-linear-gradient(135deg, #ace, #f96);
  background: -o-linear-gradient(135deg, #ace, #f96);
}
.deg180 {
  background: -moz-linear-gradient(180deg, #ace, #f96);
  background: -webkit-gradient(linear,100% 50%,0 50%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(180deg, #ace, #f96);
  background: -o-linear-gradient(180deg, #ace, #f96);
}
.deg225 {
  background: -moz-linear-gradient(225deg, #ace, #f96);
  background: -webkit-gradient(linear,100% 0%,0 100%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(225deg, #ace, #f96);
  background: -o-linear-gradient(225deg, #ace, #f96);
}
.deg270 {
  background: -moz-linear-gradient(270deg, #ace, #f96);
  background: -webkit-gradient(linear,50% 0%,50% 100%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(270deg, #ace, #f96);
  background: -o-linear-gradient(270deg, #ace, #f96);
}
.deg315 {
  background: -moz-linear-gradient(315deg, #ace, #f96);
  background: -webkit-gradient(linear,0% 0%,100% 100%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(315deg, #ace, #f96);
  background: -o-linear-gradient(315deg, #ace, #f96);
}
.deg360 {
  background: -moz-linear-gradient(360deg, #ace, #f96);
  background: -webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(360deg, #ace, #f96);
  background: -o-linear-gradient(360deg, #ace, #f96);
}
```


### 径向渐变

#### 语法

```css
-moz-radial-gradient([<bg-position> || <angle>,]? [<shape> || <size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
-webkit-radial-gradient([<bg-position> || <angle>,]? [<shape> || <size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
```

#### 示例

```css
.radial1
{
    background:-moz-radial-gradient(#ACE,#f96,#1E90FF);
    background:-webkit-radial-gradient(#ACE,#f96,#1E90FF)
}
 
.radial2
{
    background:-moz-radial-gradient(#ACE 5%,#f96 25%,#1E90FF 50%);
    background:-webkit-radial-gradient(#ACE 5%,#f96 25%,#1E90FF 50%)
}
 
.radial3
{
    background:-moz-radial-gradient(bottom left,circle,#ACE,#f96,#1E90FF);
    background:-webkit-radial-gradient(bottom left,circle,#ACE,#f96,#1E90FF)
}
 
.radial4
{
    background:-moz-radial-gradient(bottom left,ellipse,#ace,#f96,#1E90FF);
    background:-webkit-radial-gradient(bottom left,ellipse,#ace,#f96,#1E90FF)
}
 
.radial5
{
    background:-moz-radial-gradient(ellipse closest-side,#ace,#f96 10%,#1E90FF 50%,#f96);
    background:-webkit-radial-gradient(ellipse closest-side,#ace,#f96 10%,#1E90FF 50%,#f96)
}
 
.radial6
{
    background:-moz-radial-gradient(ellipse farthest-corner,#ace,#f96 10%,#1E90FF 50%,#f96);
    background:-webkit-radial-gradient(ellipse farthest-corner,#ace,#f96 10%,#1E90FF 50%,#f96)
}
 
.radial7
{
    background:-moz-radial-gradient(circle closest-side,#ace,#f96 10%,#1E90FF 50%,#f96);
    background:-webkit-radial-gradient(circle closest-side,#ace,#f96 10%,#1E90FF 50%,#f96)
}
 
.radial8
{
    background:-moz-radial-gradient(circle farthest-side,#ace,#f96 10%,#1E90FF 50%,#f96);
    background:-webkit-radial-gradient(circle farthest-side,#ace,#f96 10%,#1E90FF 50%,#f96)
}
 
.radial9
{
    background:-moz-radial-gradient(#ace,#f96,#1E90FF);
    background:-webkit-radial-gradient(#ace,#f96,#1E90FF)
}
 
.radial10
{
    background:-moz-radial-gradient(contain,#ace,#f96,#1E90FF);
    background:-webkit-radial-gradient(contain,#ace,#f96,#1E90FF)
}
 
.radial11
{
    background:-moz-radial-gradient(80% 20%,closest-corner,#ace,#f96);
    background:-webkit-gradient(radial,80% 20%,0,80% 40%,100,from(#ace),to(#f96));
    background:-webkit-radial-gradient(80% 20%,closest-corner,#ace,#f96)
}
```

#### 测试

```html
ul {
    overflow: hidden;
    margin-top: 20px;
}

li{
    list-style-type: none;
    width: 150px;
    height: 80px;
    margin-bottom: 10px;
    float: left;
    margin-right: 5px;
    background: #ace;
    /*Controls the size*/
    -webkit-background-size: 20px 20px;
    -moz-background-size: 20px 20px;
    background-size: 20px 20px; 
}
 
<!-- ul>li.radial$*5 -->
 
<ul>
    <li class="radial1"></li>
    <li class="radial2"></li>
    <li class="radial3"></li>
    <li class="radial4"></li>
    <li class="radial5"></li>
    <li class="radial6"></li>
</ul>
```

### 关于CSS渐变的一些要点

- 尽可能的使用它。如果让IE用户看到一个固定的纯色也没关系的话，我鼓励你使用这种方法；
- IE6/7/8, Opera, Safari 3, 和Firefox 3 不能渲染 CSS3 渐变，Firefox 和 Safari用户通常经常升级浏览器，而Chrome的自动升级机制会在后台自动升级，所以这并不是个大问题；
- 总是为不支持这些浏览器私有属性的浏览器应用一个默认的，纯色背景；
- 永远不要使用红色到蓝色的渐变，就像我用作例子的这种；
- 页面无须在每个浏览器里面看起来完全一样！
- Firefox可以使用角度来设定渐变的方向，而webkit只能使用x和y轴的坐标。

