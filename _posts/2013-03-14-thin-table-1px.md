---
layout: post
title: "从边框为 1 像素的表格说起"
description: ""
category: html
tags: [table, html]
---
{% include JB/setup %}

## 引言

----

本周的茶话会，谈到边框为 1 像素的表格，这里延伸一下。

在 [xthml](http://www.w3school.com.cn/xhtml/index.asp) 流行之前，[table](http://www.w3school.com.cn/tags/tag_table.asp) 可谓 HTML 里的悍将，展示数据是它，页面布局也用它。我在做游戏编辑的时候，号称会切图，其实就是 table 布局。

## 表格

----

**定义和用法**

`<table>` 标签定义 HTML 表格

简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。

tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。

更复杂的 HTML 表格也可能包括 caption、col、colgroup、thead、tfoot 以及 tbody 元素。

`<caption>`

caption 元素可定义一个表格标题。caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

`<th>`

定义表格内的表头单元格。此 th 元素内部的文本通常会呈现为粗体。

`<tr>`

在表格中定义一行。

`<td>`

定义表格中的一个单元格。

`<thead>`

定义表格的表头。

thead、 tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。

`<tbody>`

定义一段表格主体（正文）。

使用 tbody 标签，可以将表格分为一个单独的部分。tbody 标签可将表格中的一行或几行合成一组。
虽然您可能想包括一个，甚至会在表格中包括两个或更多个 tbody 标签，但是我们建议最好在表格中没有 tbody 标签。

在 tbody 标签中，只有 tr 标签可以定义表格行。并且一旦定义，一个 tbody 标签就是表格中的一个独立的部分。例如不能从一个 tbody 跨越到另一个 tbody 中。

thead、 tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。

`<tfoot>`

定义表格的页脚（脚注）。

thead、 tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。

`<col>`

定义某个表格中针对一个或多个列的属性值。您只能在表格或 colgroup 中使用此属性。

`<colgroup>`

定义表格列的分组。通过此元素，您可以对列进行组合以便进行格式化。此元素只有在 table 标签内部才是合法的。

有两种方式来使用 colgroup 标签：一种是对几个同样的列进行简单的定义，另一种是将几个不同的列组合起来。

## 1 像素表格

----

转做开发之后，时不时的要做一些 demo 页面，需要用到 table 展示数据，最初还不懂用 CSS 框架，bootstrap 也还未诞生，于是到处搜索：

`CSS 1 像素表格`

因为未加修饰的表格，实在是太难看了。

大概有以下方案：

1、利用亮边框和暗边框

2、利用collapse \[ 推荐 ]

3、表格嵌套

4、用CSS实现

5、利用单元格的间距

这里帖下推荐的方案：

{% highlight css%}
table {border-collapse: collapse }
td {border: 1px solid #999; padding: 5px}
{% endhighlight%}

意外发现自己之前用 Google Site 创建的页面：

[Google Site](https://sites.google.com/site/chenzixine/)

其实今天我不是第一次下决心好好学习 [CSS](http://www.w3school.com.cn/css/index.asp) 了，但总是不得要领，其实原因很简单，只看不练。其间用会了以 [Blueprint](http://www.blueprintcss.org/) 为代表的 CSS Framework，写一个好看的表格，已不再是难事。

特别是 bootstrap 的表格，简洁大方，使用方便：

{% highlight html%}
<table class="table table-bordered table-hover table-striped">
{% endhighlight%}

但是如果不用框架，怎么实现这种效果呢？

也有高人：[Practical CSS3 Tables with Rounded Corners](http://www.red-team-design.com/practical-css3-tables-with-rounded-corners)

## CSS3 圆角表格

----

特点：

1、无需图片

2、无需对 HTML 进行修改

3、用户友好而且代码易于理解

**圆角表格**

在这里使用 `border-collapse`，该属性默认值是 `separate` ，需要改为 0

{% highlight css%}
table {
    *border-collapse: collapse; /* IE7 and lower */
    border-spacing: 0; 
}
{% endhighlight%}

对 IE7 或者更老的版本，需要添加一个特殊的行。

接下来创建圆角：

{% highlight css%}
th:first-child {
    -moz-border-radius: 6px 0 0 0;
    -webkit-border-radius: 6px 0 0 0;
    border-radius: 6px 0 0 0;
}

th:last-child {
    -moz-border-radius: 0 6px 0 0;
    -webkit-border-radius: 0 6px 0 0;
    border-radius: 0 6px 0 0;
}

th:only-child{
    -moz-border-radius: 6px 6px 0 0;
    -webkit-border-radius: 6px 6px 0 0;
    border-radius: 6px 6px 0 0;
}
{% endhighlight%}

**jQuery hover Fallback**

在 IE6 下 `:hover` 在 non-anchor 元素上是无效的，所以我们必须使用如下方法：

{% highlight css%}
.bordered tr:hover
{
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;     
}
{% endhighlight%}

可以使用 jQuery 来模拟 hover 效果：

{% highlight javascript%}
$('.bordered tr').mouseover(function(){
    $(this).addClass('highlight');
}).mouseout(function(){
    $(this).removeClass('highlight');
});
{% endhighlight%}

增加 `highlight` 效果：

{% highlight css%}
.highlight
{
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;     
} 
{% endhighlight%}


**jQuery zebra Fallback**

为了创建 zebra 效果，需要使用 CSS3

{% highlight css%}
.zebra tbody tr:nth-child(even) {
    background: #f5f5f5;
    -webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset; 
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;  
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;        
}
{% endhighlight%}

兼容旧版浏览器：

{% highlight javascript%}
$(".zebra tbody tr:even").addClass('alternate');
{% endhighlight%}

一行简单的 jQuery 代码。

{% highlight css%}
.alternate {
    background: #f5f5f5;
    -webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset; 
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;  
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;        
}
{% endhighlight%}

该样式为偶数行添加效果。


[在线演示](/demo/tables-with-rounded-corners/index.html) 

注：未加 JS 增强。

全文完。
