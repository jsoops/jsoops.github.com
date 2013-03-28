---
layout: post
title: "兼容各浏览器的CSS倒影效果"
description: "<p>CSDN 网友 <a href='http://blog.csdn.net/afeiqiang/article/details/8441618' target='_blank'>afeiqiang</a> 原创文章，无需 Flash，完全用 CSS 就可以做出超炫的图片倒影效果，能够兼容firefox、chrome、IE等各主流浏览器。</p><p><a href='/demo/css-reflection/index.html' target='_blank'>在线演示</a></p><p>图片选材不太好，如果是黑底儿的图，效果更好。</p><p>CSS 值得每一个程序员学习！</p>"
category: css
tags: [css, reflection]
---
{% include JB/setup %}

CSDN 网友 [afeiqiang](http://blog.csdn.net/afeiqiang/article/details/8441618) 原创文章，无需 Flash，完全用 CSS 就可以做出超炫的图片倒影效果，能够兼容firefox、chrome、IE等各主流浏览器。

悉心学习下：

HTML 代码：

{%highlight html%}
<div class="wrap">  
    <div class="image"><img src="images/twitter-bird.jpg"/></div>  
    <div class="down">  
        <div class="reflection"></div>  
        <div class="overlay"></div>  
     </div>  
</div>  
{%endhighlight%}

CSS 代码：

```css
body {
    background: #000;
    color: #f00;
}

.wrap {
    position: relative;
}

.image {
    margin-bottom: 3px;
}

.down {
    position: relative;
}

.reflection {
    width: 450px;
    height: 180px;
    background: url("images/twitter-bird.jpg") bottom center no-repeat;
    -webkit-transform: scaleY(-1);
    -moz-transform: scaleY(-1);
    -ms-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);
    opacity: 0.5;
    filter: flipv alpha(opacity='50');
     /*ALL IE*/
}

@media all and (min-width:0) {
  
    .reflection {
        filter: alpha(opacity='50') \0/;
    } /*IE9*/
}

.overlay {
    position: relative;
    width: 450px;
    height: 180px;
    bottom: 149px;
    background-image: -moz-linear-gradient(center bottom, rgb(0,0,0) 20%, rgba(0,0,0,0) 90%);
    background-image: -o-linear-gradient(rgba(0,0,0,0) 10%, rgb(0,0,0) 30%);
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.20, rgb(0,0,0)), color-stop(0.90, rgba(0,0,0,0)));
    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColor=0, EndColorStr=#000000);
}
```

[在线演示](/demo/css-reflection/index.html)

图片选材不太好，如果是黑底儿的图，效果更好。



