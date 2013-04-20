---
layout: post
title: "PHP-Calendar 现在都有好看的皮肤了"
description: "<p>对于一个产品，『如果我们以不加修饰的外表把它呈现出来，人们就会理解为它粗制滥造』。</p><p>谈到这个话题，我以前一直用 <a href='http://www.php-calendar.com/' target='_blank'>PHP-Calendar</a> 作反面教材，但是今天我跪了，它现在也有不错的样式！</p><p>用了 <a href='http://jqueryui.com/' target='_blank'>jQuery-UI</a>。</p><p><a href='http://www.php-calendar.com/php-calendar-dev/' target='_blank'>效果</a></p><p>人家多年以来，都是长<a href='http://webscripts.softpedia.com/scriptScreenshots/PHP-Calendar-System--Screenshots-31936.html' target='_blank'>这个样子</a>的。</p>"
category: css
tags: [css, ui, jquery]
---
{% include JB/setup %}


<blockquote class="warning">
On product, they said, “If we present them in a slipshod manner, they will be perceived as slipshod”.
</blockquote>

谈到这个话题，我以前一直用 [PHP-Calendar](http://www.php-calendar.com/) 作反面教材，但是今天我跪了，它现在也有不错的样式！

用了 [jQuery-UI](http://jqueryui.com/)。

[效果](http://www.php-calendar.com/php-calendar-dev/)

人家多年以来，都是长[这个样子](http://webscripts.softpedia.com/scriptScreenshots/PHP-Calendar-System--Screenshots-31936.html)的。

Source Code：<https://code.google.com/p/php-calendar/>

```
$ svn co http://php-calendar.googlecode.com/svn/ php-calendar-read-only
```

你还有理由不学 CSS 吗？

密切关注动向。

#### 2013-04-04

发现只是官方演示 Demo 更新了皮肤，Google Code 里的还是原来的样式，静等升级。

#### 2013-04-06

php-calendar 的源码托管，也迁移到了 [GitHub](https://github.com/sproctor/php-calendar)

新的安装包，由 php-calendar-2.0-rc2.tar.gz 的 94K 增加到现在 php-calendar-master.zip 的 309K，应该是穿了衣服了。这衣服好重：）

```
$ cd /Library/WebServer/Documents/php/calendar
$ touch config.php
$ chmod 666 config.php
```
安装成功，还有两个问题：

1、可以直接 get 注入日历，没有做错误处理； 

`index.php?phpcid=100` 日历显示为 No title

`?phpcid=100&action=cadmin` 直接报 SQL 语法错误

2、新建事件，默认从下午 5 点开始，我印象中之前的版本也有这个问题，只是现在忘记了要修改哪个文件。



