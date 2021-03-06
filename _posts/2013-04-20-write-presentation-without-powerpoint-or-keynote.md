---
layout: post
title: "借助 HTML5 框架用纯文本写 PPT"
description: "<p>我一直在追寻好用的 HTML5 Presentation Tools，从最初的 Impress.js 开始，一共尝试了以下框架：</p><ul><li>Impress.js</li><li>deck.js</li><li>Bespoke.js</li><li>reveal.js</li><li>mdpress</li><li>HTML5slides</li></ul><p>总体说来，他们都是优秀的 PPT 工具，我悉数收藏在自己的 Wiki 之中。</p>"
category: html
tags: [html5, js, ppt, markdown]
---
{% include JB/setup %}

我在工作中，有较多的培训需求，但是很不争气，这么多年以来，一直玩不转 Powerpoint，哪怕现在有一 Keynote，也还是心怀三分敬畏，不敢轻易尝试。另外，他们也有几个我不太喜欢的缺陷：

1. 样式不好控制，作为程序员，我更希望使用文本； 
2. 不方便内部分享，虽然有 Ispring Presenter 这样的工具，但毕竟还在另外转换； 
3. 图片易失真，会被莫名其妙的缩放；
4. 不能贴代码，不支持高亮，只好截图展示；
5. 永远都是那个几款单调的动画效果，当然，也可能是我不会用；
6. 我没有正版的 Powerpoint，也没有 Keynote 授权。

于是，我一直在追寻好用的 HTML5 Presentation Tools，从最初的 Impress.js 开始，一共尝试了以下框架：

- Impress.js
- deck.js
- Bespoke.js
- reveal.js
- mdpress
- HTML5slides

总体说来，他们都是优秀的 PPT 工具，我悉数收藏在自己的 Wiki 之中，如果一定要排名的话，我的选择：

1. [HTML5slides](http://www.chenzixin.com/demo/slides/)

	优点：Google 出品，风格大方，支持 Markdown，支持逐条飞出列表

	缺点：美观上有待提高

2. [mdpress](http://www.chenzixin.com/demo/mdpress/)

	优点：使用 Impress.js 效果，炫丽多变，支持 Markdown 语法，支持数学公式展示

	缺点：不能复制文本，不支持逐条展示列表，不支持 IE10

3. [reveal.js](http://www.chenzixin.com/demo/reveal/)

	优点：效果惊艳，主题丰富，支持 Markdown 标签，代码可现场编辑

	缺点：不能完全使用 Markdown 编写

他们都有共同的优点：支持语法高亮，程序员必备！也有共同的缺点，基本都无视 IE，囧。

我也是最近，才知道这句话：不努力，就会变成 IE 浏览器。

补记：

由于过分崇拜乔帮主，我把 mdpress 和 reveal 的主题，改成了 Keynote 风格：

```css
body {
	background: linear-gradient(top,  #000 0%,#636172 100%); 
	background: -moz-linear-gradient(top, #000 0%, #636172 100%);
	background: -webkit-linear-gradient(top,  #000 0%,#636172 100%);
	background: -ms-linear-gradient(top, rgb(0, 0, 0), rgb(99, 97, 116));
	background: -o-linear-gradient(top, rgb(0, 0, 0), rgb(99, 97, 116));
}
```

补记：

留意到 [segmentfault](http://segmentfault.com/q/1010000000189232) 推荐了一个问答，亦是关于 HTML5 PPT 框架，下面是网友的分享	



- [Shower Presentation Engine](<https://github.com/shower/shower/)

- [A simple markdown-driven slideshow](https://github.com/gnab/remark)

很不错的 HTML5 教程：

<http://slides.html5rocks.com/>

把 PPT 传到网站上，在线转换成 HTML5，同时可以用手机遥控你的 PPT。用法:投影仪连接打开这个这个网站的电脑，然后手机也打开这个网站，就能用手机遥控了。由于是云端的，后排观众也能用手机打开地址实时观看：

<http://www.presefy.com/#/landing>



