---
layout: post
title: "脚本和样式需要声类型吗"
description: "<p>1. html4 和 xhtml，type is <b>required</b>，建议加上，虽然现代浏览器能容忍你的省略；</p><p>2. html5，你可以省略，故 Emmet 的做法没错。</p>"
category: javascript
tags: [javascript, css, w3c]
---
{% include JB/setup %}

在 html 4.0 和 xhtml 时代，我们嵌入 Javascript 和 CSS 的时候，都是声明 type 的：

```html
<script src="/assets/themes/christen/js/jquery-1.8.3.min.js" type="text/javascript"></script>
<link href="/assets/themes/twitter/css/style.css" rel="stylesheet" type="text/css" media="all">

<style type="text/css">
    .top{
      margin-top: 50px;
    }
</style>

<script type="text/javascript">
  $(function () {
    var ie = $.ua.browser.name == "msie";
  	// do sth with ie
  });
</script>
```

最近写前端代码，深度依赖 Emmet，但是发现声明 style / link 和 script 都带 type，每次都要手工加上，很困惑。

心中不能欠债，参考 stackoverflow ，查阅 w3c 标准，结论如下：


1. html4 和 xhtml，type is `required`，建议加上，虽然现代浏览器能容忍你的省略

	参考：

	<http://www.w3.org/TR/xhtml1/>

	<http://www.w3.org/wiki/HTML/Training/Script>

	<http://www.w3.org/TR/REC-html40/interact/scripts.html>

	<http://www.w3.org/TR/html4/present/styles.html>

	<http://www.w3.org/TR/REC-html40/present/styles.html#h-14.2.1>

	<http://www.ietf.org/rfc/rfc2616.txt>

	<http://www.w3.org/TR/html5/scripting-1.html#scriptingLanguages>

	<http://www.iana.org/assignments/media-types>

	<http://xhtml.com/en/xhtml/reference/script/> 

	<http://xhtml.com/en/xhtml/reference/style/>


2. html5，你可以省略，故 Emmet 没错


	Script:

	<http://www.w3.org/TR/html5/scripting-1.html#script>

	>The type attribute gives the language of the script or format of the data. If the attribute is present, its value must be a valid MIME type. The charset parameter must not be specified. **The default, which is used if the attribute is absent, is "text/javascript"**.


	Style:

	<http://www.w3.org/html/wg/drafts/html/master/document-metadata.html#the-link-element>

	>The type attribute gives the styling language. If the attribute is present, its value must be a valid MIME type that designates a styling language. The charset parameter must not be specified. **The default value for the type attribute, which is used if the attribute is absent, is "text/css"**. [RFC2318](http://www.w3.org/html/wg/drafts/html/master/iana.html#refsRFC2318)

	Link:

	<http://www.w3.org/html/wg/drafts/html/master/document-metadata.html#the-link-element>

	>The type attribute gives the MIME type of the linked resource. It is purely advisory. The value must be a valid MIME type.

	>... **The default type for resources given by the stylesheet keyword is text/css**.

	>...If one of the two files was returned without a Content-Type metadata, or with a syntactically incorrect type like Content-Type: "null", then the default type for stylesheet links would kick in. **Since that default type is text/css, the style sheet would nonetheless be applied**.

