---
layout: post
title: "动态引入外部 JavaScript"
description: "<p>在实际的开发工作中，我们可能会遇到动态引入外部 JavaScript 的需求，或者调用 document 的 write 方法，或者操纵 DOM 插入，初学者直接 write 的时候，可能会遇到一些困惑，这里记录一下。</p>"
category: javascript
tags: [js, timer]
---
{% include JB/setup %}

在实际的开发工作中，我们可能会遇到动态引入外部 JavaScript 的需求，或者调用 document 的 write 方法，或者操纵 DOM 插入，初学者直接 write 的时候，可能会遇到一些困惑，这里记录一下。

最近在负责英特尔购物助手的沟通，做了一个 Demo, 方便销售打申请：

<http://imgad0.3conline.com/ivy/image/intel-sample.html>

就用到了动态写入 JavaScript 文件。

<blockquote class="warning">	
错误写法：
</blockquote>

```javascript
document.write('<script type="text/javascript" src="http://www1.pconline.com.cn/api/libs/jquery/jquery-1.3.2.min.js"></script>');
```
注：在 Chrome 的 JavaScript 控制台可行。

>参考写法：

```javascript
document.write('<script type="text/javascript" src="http://www1.pconline.com.cn/api/libs/jquery/jquery-1.7.2.min.js" charset="utf-8"><' + '/script>');
 ```

完整的代码见[这里](https://gist.github.com/chenzixin/5432945)，可自己测试。

当然，还可以有很多变通：

```javascript
document.write('<sc'+'ript type="text/javascript" src="{{STATIC_URL}}js/jquery-1.9.0.js"></scri'+'pt>');

document.write('<script type="text/javascript" src="http://www1.pconline.com.cn/api/libs/jquery/jquery-1.3.2.min.js"><\/script>');
```

都是这了解决 `</script>` 给 HTML 造成的困惑。

更好的方案，常见于 Google Analytics 监测：

```javascript

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
        'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
```

测试例子中，用到了延时，这里顺便总结一下。

```html

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
 
    <p id="time"></p>
 
    <button onclick="stopInterval()">Stop Interval</button>
    <button onclick="stopTimeout()">Stop Timeout</button>
 
    <script type="text/javascript">
        var echoTime = function () {
            var d = new Date();
            var t = d.toLocaleTimeString();
            document.getElementById("time").innerHTML = t;
        }
 
        var myInterval = setInterval(echoTime, 1000);
 
        function stopInterval() {
            clearInterval(myInterval);
        }
 
        var myTimeout = setTimeout(function(){alert("3 senconds later.")},3000);
 
        function stopTimeout() {
                clearTimeout(myTimeout);
        }
    </script>
</body>
</html>
```





