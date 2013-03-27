---
layout: post
title: "Flash window mode 参数详解"
description: "<p>在做 Web 开发中可能会遇到 Flash 遮挡页面中元素的情况，无论怎么设置 Flash 容器和层的深度(z-index)也无济于事，现有的解决方案是在插入Flash 的 embed 或 object 标签中加入 wmode 属性并设置为 wmode= &#39;transparent&#39; 或 &#39;opaque&#39;，但 wmode 属性到底是什么意义，为什么可以解决这个问题呢？</p><p>了解了各种模式的实现方式和意义在以后的开发中就可以按照具体情况选择设置 wmode 属性的值了。</p>"
category: flash
tags: [falsh, web]
---
{% include JB/setup %}

在做 Web 开发中可能会遇到 Flash 遮挡页面中元素的情况，无论怎么设置 Flash 容器和层的深度(z-index)也无济于事，现有的解决方案是在插入Flash 的 embed 或 object 标签中加入 wmode 属性并设置为 wmode= 'transparent' 或 'opaque'，但 wmode 属性到底是什么意义，为什么可以解决这个问题呢？

Window Mode (wmode)

wmode 即窗口模式总共有三种，看看当年 Macromedia 官方的说法：

>Window: Use the Window value to play a Flash Player movie in its own rectangular window on a web page. This is the default value for wmode and it works the way the classic Flash Player works. This normally provides the fastest animation performance.

>Opaque: By using the Opaque value you can use JavaScript to move or resize movies that don’t need a transparent background. Opaque mode makes the movie hide everything behind it on the page. Additionally, opaque mode moves elements behind Flash movies (for example, with dynamic HTML) to prevent them from showing through.

>Transparent: Transparent mode allows the background of the HTML page, or the DHTML layer underneath the Flash movie or layer, to show through all the transparent portions of the movie. This allows you to overlap the movie with other elements of the HTML page. Animation performance might be slower when you use this value. 

###Window 模式

默认情况下的显示模式，在这种模式下 Flash player 有自己的窗口句柄，这就意味着 Flash 影片是存在于 Windows 中的一个显示实例，并且是在浏览器核心显示窗口之上的，所以 Flash 只是貌似显示在浏览器中，但这也是 Flash 最快最有效率的渲染模式。由于他是独立于浏览器的 HTML 渲染表面，这就导致默认显示方式下 Flash 总是会遮住位置与他重合的所有 DHTML 层。

但是大多数苹果电脑浏览器会允许 DHTML 层显示在 Flash 之上，但当 Flash 影片播放时会出现比较诡异的现象，比如 DHTML 层像被 Flash 刮掉一块一样显示异常。

###Opaque 模式

这是一种无窗口模式，在这种情况下 Flash player 没有自己的窗口句柄，这就需要浏览器需要告诉 Flash player 在浏览器的渲染表面绘制的时间和位置。这时 Flash 影片就不会在高于浏览器 HTML 渲染表面而是与其他元素一样在同一个页面上，因此你就可以使用 z-index 值来控制 DHTML 元素是遮盖 Flash 或者被遮盖。

###Transparent 模式

透明模式，在这种模式下 Flash player 会将 stage 的背景色 alpha 值将为 0 并且只会绘制 stage 上真实可见的对象，同样你也可以使用 z-index 来控制 Flash 影片的深度值，但是与 Opaque 模式不同的是这样做会降低 Flash 影片的回放效果，而且在 9.0.115 之前的 Flash player 版本设置 wmode = 'opaque' 或 'transparent' 会导致全屏模式失效。

了解了各种模式的实现方式和意义在以后的开发中就可以按照具体情况选择设置 wmode 属性的值了。
