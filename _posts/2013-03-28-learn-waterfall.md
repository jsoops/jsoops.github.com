---
layout: post
title: "学习瀑布流布局"
description: "<p>瀑布流的概念，很早就开始流行了，但公司一直没有相关的项目，所以从来都是一知半解。</p><p>两周之前，一个活动提出瀑布流的需求，虽然最终并未上线，但是却给了我们一个仔细研究瀑布流的机会。</p><p>参考资源：</p><p><a href='http://docs.kissyui.com/docs/html/api/component/waterfall/' target='_blank'>Kissy Waterfall</a></p><p><a href='http://ued.taobao.com/blog/2011/09/waterfall/' target='_blank'>瀑布流布局浅析</a></p>"
category: javascript
tags: [waterfall]
---
{% include JB/setup %}

瀑布流的概念，很早就开始流行了，但公司一直没有相关的项目，所以从来都是一知半解。

两周之前，一个活动提出瀑布流的需求，虽然最终并未上线，但是却给了我们一个仔细研究瀑布流的机会。

参考资源：

[瀑布流布局浅析](http://ued.taobao.com/blog/2011/09/waterfall/)

[Kissy Waterfall](http://docs.kissyui.com/docs/html/api/component/waterfall/)

----

## 概念

瀑布流，又称瀑布流式布局。是目前比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是 [Pinterest](http://pinterest.com/)，逐渐在国内流行开来。国内大多数清新站基本为这类风格。

瀑布流对于图片的展现，是高效而具有吸引力的，用户一眼扫过的快速阅读模式可以在短时间内获得更多的信息量,而瀑布流里懒加载模式又避免了用户鼠标点击的翻页操作，瀑布流的主要特性便是错落有致，定宽而不定高的设计让页面区别于传统的矩阵式图片布局模式，巧妙的利用视觉层级，视线的任意流动又缓解了视觉疲劳。

国内类Pinterest网站也如雨后春笋般出现，目前已知网站超40家，类Pinterest网站有三种：

1、是电商导购，如蘑菇街和美丽说、好享说，依托于淘宝平台;

2、是兴趣图谱分享，如知美、花瓣等;

3、是在细分垂直领域，如针对吃货的零食控、针对家居行业的他部落等。

----

## 实现

1、传统多列浮动，代表网站蘑菇街和哇哦

2、用CSS3实现

3、绝对定位，代表网站Pinterest

以上内容摘自 [百度百科](http://baike.baidu.com/view/7151782.htm)

实例：[戳这里](/demo/waterfall/index.html) 图片来自百度，代码版权 [刘晓帆](http://liuxiaofan.com/?p=702) 。

这个版本只实现了布局，未添加持续加载，只添加了一段模拟代码：

```javascript
/*添加滚动判断*/
//首先给窗口绑定事件scroll
$(window).bind("scroll",function(){
// 然后判断窗口的滚动条是否接近页面底部，这里的20可以自定义
  if( $(document).scrollTop() + $(window).height() > $(document).height() - 20 ){
    /*$.ajax({
      //ajax代码，异步载入数据
      //一般的会callback，将数据填入固定的选择器中
    });*/
    console.log("加载新的数据");
  }
})
```

推荐两个 jQuery 无限滚动插件：

- [Infinite-Scroll](https://github.com/paulirish/infinite-scroll)

- [jQuery-Screw](https://github.com/jasonlau/jQuery-Screw)

还有一个淘到本地的例子：[点我吧](/demo/waterfall/scrollextend/index.html)！

瀑布流布局，也有优秀的插件：[jQuery Masonry](https://github.com/desandro/masonry)。

最后推荐两篇[牛魔王](http://www.niumowang.org/)的文章：

- [jQuery实现无限滚动瀑布流实现原理](http://www.niumowang.org/html-css/jquery-scroll-theorem/)

- [HTML5 + CSS3 的瀑布流布局的实现](http://www.niumowang.org/html-css/html5-css3-waterfall/)

对瀑布流的布局，研究很透彻。


## 语录

哈佛有一个著名的理论：人的差别在于业余时间，而一个人的命运决定于晚上8点到10点之间。每晚抽出2个小时的时间用来阅读、进修、思考或参加有意的演讲、讨论，你会发现，你的人生正在发生改变，坚持数年之后，成功会向你招手。

无论你的收入是多少，记得分成五份进行规划投资：增加对身体的投资，让身体始终好用；增加对社交的投资，扩大你的人脉；增加对学习的投资，加强你的自信；增加对旅游的投资，扩大你的见闻；增加对未来的投资，增加你的收益。好好规划落实，你会发现你的人生逐步会有大量盈余。
