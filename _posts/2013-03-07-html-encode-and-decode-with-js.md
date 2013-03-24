---
layout: post
title: "THML Encode and Decode with JS"
description: "<p>转义字符串(Escape Sequence)也称字符实体(Character Entity)。在 HTML 中，定义转义字符串的原因有两个：第一个原因是像 &lt; 和 &gt; 这类符号已经用来表示 HTML 标签，因此就不能直接当作文本中的符号来使用。为了在 HTML 文档中使用这些符号，就需要定义它的转义字符串。当解释程序遇到这类字符串时就把它解释为真实的字符。在输入转义字符串时，要严格遵守字母大小写的规则。第二个原因是，有些字符在ASCII字符集中没有定义，因此需要使用转义字符串来表示。</p><p>一个简单的例子，转义小段 HTML 代码，技巧性很强，在没有 Web Developer Tools 的时候，可临时启用。</p><p>Jekyll 是我用过的最好的博客引擎！</p>"
category: javascript
tags: [js, html]
---
{% include JB/setup %}

转义字符串 (Escape Sequence) 也称字符实体 (Character Entity) 。在 HTML 中，定义转义字符串的原因有两个：第一个原因是像 &lt; 和 &gt; 这类符号已经用来表示 HTML 标签，因此就不能直接当作文本中的符号来使用。为了在 HTML 文档中使用这些符号，就需要定义它的转义字符串。当解释程序遇到这类字符串时就把它解释为真实的字符。在输入转义字符串时，要严格遵守字母大小写的规则。第二个原因是，有些字符在 ASCII 字符集中没有定义，因此需要使用转义字符串来表示。

一个简单的例子，转义小段 HTML 代码，技巧性很强，在没有 Web Developer Tools 的时候，可临时启用。

{% highlight html %}
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<script type="text/javascript">
function htmlEncode(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function htmlDecode(str) {
    var div = document.createElement("div");
    div.innerHTML = str;
    return div.innerHTML;
}

var str = '<img src="/path/to/img.jpg" alt="alt text" title="Title" />';
console.log(htmlEncode(str));
</script>
	
</body>
</html>
{% endhighlight %}

Jekyll 是我用过的最好的博客引擎！

全文完。
