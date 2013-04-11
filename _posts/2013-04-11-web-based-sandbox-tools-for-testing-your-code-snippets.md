---
layout: post
title: "Web based Sandbox Tools for Testing Your Code Snippets"
description: "<p>昨天的广告月会上，我放弃了一直不太擅长的 MS PowerPoint，改用 <a href='https://github.com/hakimel/reveal.js/'>reveal.js</a>，a HTML Presentation Framework，在此之前，我曾找过三款同类框架：</p><ul><li>Impress</li><li>deck.js</li><li>Bespoke.js</li></ul><p>reveal.js 综合表现最好，为装逼宅男码农量身定制。</p><p>它的惊艳效果，也赢得了普遍的赞誉。Sun2bin 问，reveal 展示的代码，能不能实时运行？</p>"
category: javascript
tags: [js, ppt]
---
{% include JB/setup %}

昨天的广告月会上，我放弃了一直不太擅长的 MS PowerPoint，改用 [reveal.js](https://github.com/hakimel/reveal.js/)，a HTML Presentation Framework，在此之前，我曾找过三款同类框架：

* Impress 
* deck.js
* Bespoke.js

reveal.js 综合表现最好，为装逼宅男码农量身定制。

它的惊艳效果，也赢得了普遍的赞誉。Sun2bin 问，reveal 展示的代码，能不能实时运行？

个人感觉有些难度，主要是高亮之后的代码，自然加了很多样式，而诸如[蓝色理想](http://bbs.blueidea.com/thread-3088722-1-1.html)的这种方法：

```javascript
function runcode(obj) {
	var winname=window.open('',"_blank",'');
	winname.document.open('text/html','replace');
	winname.opener=null;
	winname.document.write(obj.value);
	winname.document.close();
}
```
需要首先过滤掉样式代码，会给 PPT 增加很多负担。

于是退而求其次，找个这个文章：[10 Web-based Sandbox Tools for Testing Your Code Snippets](http://sixrevisions.com/tools/sandbox-testing-code-snippets/)

老外的点评很中肯，我就不再赘述，个人比较喜欢：

* [Code Playground](https://code.google.com/apis/ajax/playground/) 但速度稍慢

* [JSbin](https://github.com/remy/jsbin) 可本地运行

另外，OSChina 推出的 [RunJS](http://runjs.cn/code/) 也是非常优秀的产品，如果你不喜欢它默认的深色主题，可以在设置里切换。

结论：

[不止一种方法去做一件事](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it)（There's more than one way to do it）。

这是 Perl 语言的禅道，我们要选择适合自己的。

Sun2bin: 以后小新给新人教学就用它了。

只要不停止探索的脚步，一路上，你都会发现美好的风景！