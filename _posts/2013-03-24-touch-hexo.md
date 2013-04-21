---
layout: post
title: "初试 hexo 强中更有强中手"
description: "<p>从 GitHub Pages 到 Jekyll，Octopres，再到 hexo，真可谓江山代有人才出，一代新人胜旧人。</p><p>感谢 GitHub！</p><p>演进的过程，是一个不断增强的过程，使用 hexo，不用修改太多配置，生成的网站，已经非常专业，站在 Node 的肩上，生成页面的速度太快了，看来 Ruby 还是有硬伤。</p><p>不过因为对 BootStrap 的感情很深，再加上这个周末的努力，Jekyll 博客已经像个样子了，暂不想深入折腾。</p><p>至于生成速度，可以忍，毕竟上传之后的速度，并不受制。</p>"
category: node
tags: [blog, nodejs]
---
{% include JB/setup %}

**背景**

昨天看到知乎上有牛人推荐 hexo，当时沉浸在 Jekyll 的模版中，没太在意，整完模版之后，手又痒了，我是天生有受虐的倾向啊！

Mac 平台下安装 hexo 非常简单：

`$ node -v`

输出：v0.8.16

符合要求，Let's GO!

----

**文档**

[http://zespia.tw/hexo/zh-CN/](http://zespia.tw/hexo/zh-CN/)

框架是我们可爱的台湾同胞开发的，因此非常人性化的编写了简体中文文档。

----

**概述**

1、不可思议的快速 只要一眨眼静态文件即生成完成

2、支持 Markdown

3、仅需一道指令即可部署到 GitHub Pages 和 Heroku

4、已移植 Octopress 插件

5、高扩展性 自订性

6、兼容于 Windows, Mac & Linux

----

**安装**

`$ sudo npm install -g hexo`

**开始**

建立项目：

```
$ hexo init project
$ cd project
```

建立新文章：

`$ hexo new "New Post"`

生成静态文件：

`$ hexo generate`

启动服务器：

`$ hexo server`

生成文件的速度，真可谓秒杀！！！

详细的配置和使用，见这里 <http://zespia.tw/hexo/zh-CN/docs/>

----

**迁移**

这里只讲下 Jekyll / Octopres

1、将 source/_posts 内的档桉拷贝至 Hexo 的 source/_posts 内，并将文章内的 highlight 修改为 codeblock，删除 Jekyll 标签 include JB/setup 。

2、然后调整 _config.yml 中的 new_post_name 为 :year-:month-:day-:title.md。

----

**心得**

从 GitHub Pages 到 Jekyll，Octopres，再到 hexo，真可谓江山代有人才出，一代新人胜旧人。

感谢 GitHub！

演进的过程，是一个不断增强的过程，使用 hexo，不用修改太多配置，生成的网站，已经非常专业，站在 Node 的肩上，生成页面的速度太快了，看来 Ruby 还是有硬伤。

不过因为对 BootStrap 的感情很深，再加上这个周末的努力，Jekyll 博客已经像个样子了，暂不想深入折腾。

至于生成速度，可以忍，毕竟上传之后的速度，并不受制。


