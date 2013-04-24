---
layout: post
title: "JavaScript 懒加载实现"
description: "<p>最近参考 needJS 的思路，监听外部 JS 的下载进程，成功解决在中转页面添加 GA 监测，由此引发了我对懒加载、延时加载、按需加载的追索，精力有限，这里只是罗列一些框架，很多没有实际测试过，等待将来有新的需求时，再仔细研究。</p><p>网速优化是前端永恒的课题，顶尖儿的高手，最后都在毫秒上比拼，如何让网络请求无阻塞，页面加载更快，值得我们用一辈子去学习。</p>"
category: javascript
tags: [lazy, loader]
---
{% include JB/setup %}

最近需要给一个中转页添加 GA 监测，中转页通过

`window.location.href = "http://some.other.domain.com/"`

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

4what 重写的版本

```javascript
function dynamic(obj, src, callback) {
	callback = callback || new Function();

	if (obj) {
		callback();
		return;
	}

	window._scripts = window._scripts || {};

	window._scripts[src] = window._scripts[src] || {
		loaded: false,
		queue: []
	};

	if (window._scripts[src].loaded) {
		callback();
		return;
	}

	var queue = window._scripts[src].queue;

	if (queue.push(callback) === 1) {
		var
		head = document.getElementsByTagName("head")[0],
		script = document.createElement("script"),
		state;

		script.src = src;
		//script.type = "text/javascript";

		script.onload = // for Std
		script.onreadystatechange = // for IE
			function() {
				state = script.readyState;

				//alert(state)

				if (!state || /loaded|complete/.test(state)/* for IE */) {
					window._scripts[src].loaded = true;

					for (var i = 0, l = queue.length; i < l; i++) {
						queue[i]();
					}

					script.onload = script.onreadystatechange = null; // for IE

					//head.removeChild(script);

					script = undefined;
				}
			};

		head.appendChild(script);
	}
}
```

[测试](/demo/lazy/dynamic.html)

其间发现了一些 JavaScript 的奇怪问题：

```javascript
function fn() {
	var o = window.o || (window.o = {
		k: 0
	});
	console.log(window.o);
	console.log(o);
	o.k++;
}

fn()
Object {k: 0}
Object {k: 0}

fn()
Object {k: 1}
Object {k: 1}

fn()
Object {k: 2}
Object {k: 2}
```

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

  实际测试，会在 GA 请求完成之后，才开始调用 do\_sth\_else();

### 网速优化

  GA 的应用，其实是很偏门的，needJS 最大的用武之地，还是网速优化，早些年在太平洋系列网站上，常见 defineJS 的身影：

  > 等多个 JS 都加载完成并运行后，再执行指定代码。

  defineJS 包含了 needJS，精华所在。

  Google 了一下，发现英雄所见略同，互联网上有这么多懒加载的 JS 框架 / 模块。

  [Lazy Load Compare List](https://docs.google.com/spreadsheet/ccc?key=0Aqln2akPWiMIdERkY3J2OXdOUVJDTkNSQ2ZsV3hoWVE#gid=2)

  >This comparaison is not maintained and was initiated by the crowd. Most of this data may be wrong or outdated. Please use it as a start for your research, not as an end.

这几个框架文档不错，以后有实际需要的时候，可以考虑


- [HeadJS](https://github.com/headjs/headjs)

  	```javascript
  	head.js("/path/to/jquery.js", "/google/analytics.js", "/js/site.js", function() {
   		// all done
	});
	```
	[docs](/demo/headjs/index.html)

- [RequireJS](http://requirejs.org/)

	```javascript
	require(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    	$(function() {
        	$('body').alpha().beta();
    	});
	});
	```

- [$script.js](https://github.com/ded/script.js)

	```javascript
	$script(['foo.js', 'bar.js'], function() {
  		// foo.js & bar.js is ready
	})
	```

- [curl](https://github.com/cujojs/curl)

	```javascript
	curl(['domReady!', 'dep2', 'dep3' /* etc */])
    	.then(
        	callback,
        	errorback
    	);
	curl(['dep1', 'dep2', 'domReady!' /* etc */], function (dep1, dep2) {
    	// do something here
	});
	```
- [LazyLoad](https://github.com/rgrove/lazyload/)

	```javascript
	// Load multiple JS files and execute a callback when they've all finished.
	LazyLoad.js(['foo.js', 'bar.js', 'baz.js'], function () {
		alert('all files have been loaded');
	});

	// Load a CSS file and pass an argument to the callback function.
	LazyLoad.css('foo.css', function (arg) {
		alert(arg);
	}, 'foo.css has been loaded');
	```

- [queue](https://github.com/mbostock/queue)

	```javascript
	queue(2)
	    .defer(request, "1.json")
	    .defer(request, "2.json")
	    .defer(request, "3.json")
	    .await(ready);
    ```

    [demo](/demo/queue/index.html)

网速优化是前端永恒的课题，顶尖儿的高手，最后都在毫秒上比拼，如何让网络请求无阻塞，页面加载更快，值得我们用一辈子去学习。










