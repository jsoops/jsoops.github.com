---
layout: post
title: "使用 Console 优化 Web 开发"
description: "<p>我们一般习惯于用 alert 调试 JavaScript 代码，但是 alert 的功能有限，而且要不断的点击 确定，影响开发速度。</p><p>Firebug 诞生之后，我开始有意识的使用 console.log() 方法，比 alert 好很多，后来 Chrome 和 IE8 的开发者工具，都支持 console 输出，我们就更应该升级调试方法了。</p><p>但一直以来，也没有去查文档或者手册什么的，对 console 对象，只知其一，不知其二，这其实是学习的大忌。今天看了阮一峰的文章，才发现 console 的更多用法。</p><p>软件的使用，亦是一个循序渐进的过程，开始我们都是用其皮毛，满足我们最初的需求，但不能一直以 “循序” 安慰自己，一定也要 “渐进”，慢慢发现新的功能，并应用到实际的工作中去。和兵器一样，虽然本身也有强弱之分，但是同样的软件，在不同的人手中，威力也是大不相同的。</p>"
category: javascript
tags: [firebu, chrome]
---
{% include JB/setup %}

我们一般习惯于用 alert 调试 JavaScript 代码，但是 alert 的功能有限，而且要不断的点击 <kbd>确定</kbd>，影响开发速度。

Firebug 诞生之后，我开始有意识的使用 `console.log()` 方法，比 alert 好很多，后来 Chrome 和 IE8 的开发者工具，都支持 console 输出，我们就更应该升级调试方法了。

但一直以来，也没有去查文档或者手册什么的，对 console 对象，只知其一，不知其二，这其实是学习的大忌。今天看了[阮一峰](http://www.ruanyifeng.com/blog/2011/03/firebug_console_tutorial.html)的文章，才发现 console 的更多用法。

附：

- [Chrome Using the Console](https://developers.google.com/chrome-developer-tools/docs/console)

- [Firebug and Logging](http://getfirebug.com/logging)

- [Firebug Console API](http://getfirebug.com/wiki/index.php/Console_API)

- [Firefox Console](https://developer.mozilla.org/en-US/docs/DOM/console)

<ul>
<li><p><a href="http://msdn.microsoft.com/en-us/library/dd565625(v=vs.85).aspx#consolelogging">Debugging Script with the Developer Tools</a></p></li>
</ul>

<br>

#### 五个主要的调试方法

```
console.info("这是info");
console.debug("这是debug");
console.warn("这是warn");
console.error("这是error");
console.log("这是普通信息");
```

#### 格式化输出

字符（%s）、整数（%d 或 %i）、浮点数（%f）和对象（%o）

```
console.log("%d年%d月%d日",2011,3,26);

console.log("圆周率是%f",3.1415926);

var dog = {} ;
	dog.name = "大毛" ;
	dog.color = "黄色";
console.log("%o",dog);
console.dir(dog); // firebug only
```

#### 分组输出信息

```
console.group("第一组信息");
	console.log("第一组第一条");
	console.log("第一组第二条");
console.groupEnd();

console.group("第二组信息");
	console.log("第二组第一条");
	console.log("第二组第二条");
console.groupEnd();
```

#### 输出 DOM 文档

```
var table = document.getElementById("userTable");
console.dirxml(table);
```

#### 断言

```
var result = 0;
console.assert( result );

var year = 2000;
console.assert(year == 2011 );
```

#### 计时器

```
console.time("计时器");

for(var i=0;i<1000;i++){
	for(var j=0;j<100000000;j++){}
}

console.timeEnd("计时器");
```

软件的使用，亦是一个循序渐进的过程，开始我们都是用其皮毛，满足我们最初的需求，但不能一直以 “循序” 安慰自己，一定也要 “渐进”，慢慢发现新的功能，并应用到实际的工作中去。和兵器一样，虽然本身也有强弱之分，但是同样的软件，在不同的人手中，威力也是大不相同的。

学如逆水行舟，不进则退。



