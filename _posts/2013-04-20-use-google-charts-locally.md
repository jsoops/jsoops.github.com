---
layout: post
title: "Use Google Charts Locally"
description: "<p>可能是因为我们过于喜爱 Gogole，一直固执的以为，<a href='https://developers.google.com/chart/interactive/docs/index'>Google Charts</a> 是这个世界上最好的图表工具，没有之一：</p><ul><li>使用方便</li><li>配色美观</li></ul><p>但有一个致命的缺陷，提供免费服务，但不开源，也不允许离线使用，这让身在墙内的我们，痛苦不堪。</p>"
category: javascript
tags: [charts]
---
{% include JB/setup %}

可能是因为我们过于喜爱 Gogole，一直固执的以为，[Google Charts](https://developers.google.com/chart/interactive/docs/index) 是这个世界上最好的图表工具，没有之一：

- 使用方便
- 配色美观

但有一个致命的缺陷，提供免费服务，但不开源，也不允许离线使用，这让身在墙内的我们，痛苦不堪。

>Q：Can I download and host the chart code locally, or on an intranet?

>A：Sorry; [our terms of service](https://developers.google.com/chart/terms) do not allow you to download and save or host the google.load or google.visualization code.

但我想，出于学习和研究的需求，hack 一下，Google 也不会怪罪下来的，对吧？

方法：

借助 HttpWatch，观察网络加载，请求什么，我就 wget 什么，合并为本地 Javascript 文件，配置对应的 CSS 路径，最后实现本地服务。

感谢 Bingal 的不懈尝试。

最终我们成功了：

这里是 Demo：

<http://www.jsoops.com/demo/gcharts/index.html>

感受飞一样的速度吧！

可用 HttpWatch 观察，除了以下组件之外：

- 表格
- 仪表盘
- 世界地图
- 树型映射

都实现了离线使用，但目测它们在日常开发中，应用不多。

PS：如果你的应用，有较高的定制需求，那推荐使用 Highcharts：

<http://www.highcharts.com/>

<https://github.com/highslide-software/highcharts.com>

动态效果，免费开源，也很美观，还有参考书：Learning Highcharts.pdf

一图抵万言，善用图表，事半功倍。