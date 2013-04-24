---
layout: post
title: "JavaScript 懒加载实现"
description: ""
category: javascript
tags: [lazy, loader]
---
{% include JB/setup %}

最近需要给一个中转页添加 GA 监测，中转页通过

`window.location.href = some url`

跳转，直接加 GA 代码，往往请求还未发出，页面已经转向，也考虑过 setTimeout，但是我们又不清楚网络情况，最终回收的数据，也不会太精确。

后来想起 needJS，参考它的源码，改造了一下 GA 的引用，目标达成。

### needJS

```javascript
//author sun2bin
function needJS(fn, src, callback) {
	callback = callback || function() {};
	if (fn) return callback(false); //功能早已载入
	var scripts = window.__needJS__ || (window.__needJS__ = []);
	var script = scripts[src] || (scripts[src] = {
		loaded: false,
		callbacks: []
	});
	if (script.loaded) return callback(false); //取得全局加载队列中的目标项。__needJS__和callbacks变量名绝不能改！！！
	var cbs = script.callbacks;
	if (cbs.push(callback) == 1) {
		var js = document.createElement("script");
		js.onload = js.onreadystatechange = function() {
			var st = js.readyState;
			if (st && st != "loaded" && st != "complete") return;
			script.loaded = true;
			for (var i = 0; i < cbs.length; i++) cbs[i](true);
		};
		js.src = src;
		document.getElementsByTagName("head")[0].appendChild(js);
	}
}
```

调用方法：

```javascript
needJS(window.jQuery, "http://www1.pconline.com.cn/js/pc.jquery1.5.js", function() {
	alert($.browser.version);
});
```

`window.__needJS__ = []` 

的定义，可能改为如下更易理解：

`window.__needJS__ = {}`

毕竟：

`scripts[src]`

但 JavaScript 非常松散，实际测试也是可用的：

```javascript
var a = []
undefined
a['name'] = 'Christen'
"Christen"
a['name']
"Christen"
a instanceof Array
true
```

[测试](/demo/lazy/index.html)


### 优化的 GA

```javascript
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-40231162-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); 
    ga.type = 'text/javascript'; 
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    ga.onload = ga.onreadystatechange = function() {
		var st = ga.readyState;
		if (st && st != "loaded" && st != "complete") return;
		do_sth_else();
		};

	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(ga, s);	
  })();
  ```

  实际测试，会在 GA 请求完成之后，才开始调用 do_sth_else();

  ### 网速优化

  GA 的应用，其实是很偏门的，needJS 最大的用武之地，还是网速优化，早些年在太平洋系列网站上，常见 defineJS 的身影：

  > 等多个 JS 都加载完成并运行后，再执行指定代码。

  defineJS 包含了 needJS，精华所在。

  Google 了一下，发现英雄所见略同，互联网上有这么多懒加载的 JS 框架 / 模块。

  <https://docs.google.com/spreadsheet/ccc?key=0Aqln2akPWiMIdERkY3J2OXdOUVJDTkNSQ2ZsV3hoWVE#gid=2>

  >This comparaison is not maintained and was initiated by the crowd. Most of this data may be wrong or outdated. Please use it as a start for your research, not as an end.

  挑几个实测一下：

  - [headjs](https://github.com/headjs/headjs)

  	






