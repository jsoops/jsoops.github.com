---
layout: post
title: "W3C validator 验证 HTML5"
description: "<p>昨天参照官方文档将第一个像样儿的 Django 程序 host 到 SAE 上了：</p><p><a href='http://olservice.sinaapp.com/' target='_blank'>http://olservice.sinaapp.com/</a></p><p>模版中用到了 Twitter Bootstrap ，但没有系统的学习，只是简单的从例子中拷贝了几段代码，担心不够规范，遂在页脚加了一个 HTML5 的验证，很幸运，一次性通过，只有一个警告：</p><p>This document was successfully checked as HTML5!</p><p><strong>Result: Passed, 1 warning(s)</strong></p>"
category: html
tags: [w3c, html5]
---
{% include JB/setup %}

昨天参照官方文档将第一个像样儿的 Django 程序 host 到 SAE 上了：

[http://olservice.sinaapp.com/](http://olservice.sinaapp.com/)

模版中用到了 Twitter Bootstrap ，但没有系统的学习，只是简单的从例子中拷贝了几段代码，担心不够规范，遂在页脚加了一个 HTML5 的验证，很幸运，一次性通过，只有一个警告：

>This document was successfully checked as HTML5!
>
>**Result:	 Passed, 1 warning(s)**

详细的警告说明：

>The following notes and warnings highlight missing or conflicting information which caused the validator to perform some guesswork prior to validation, or other things affecting the output below. If the guess or fallback is incorrect, it could make validation results entirely incoherent. It is highly recommended to check these potential issues, and, if necessary, fix them and re-validate the document.

**Using experimental feature: HTML5 Conformance Checker.**

>>The validator checked your document with an experimental feature: HTML5 Conformance Checker. This feature has been made available for your convenience, but be aware that it may be unreliable, or not perfectly up to date with the latest development of some cutting-edge technologies. If you find any issues with this feature, please report them. Thank you.

看得很费解，[Stackoverflow](http://stackoverflow.com/questions/3989201/html5-conformance-checker) 上的回答就清晰很多，直接转摘如下：

**Q:**

>I got the following warning using the W3C validator: "Using experimental feature: HTML5 Conformance Checker."
>
>What exactly does it mean? That I can't count on this validator?
>
>Thanks, Joel

**A:**

>The warning "Using experimental feature: HTML5 Conformance Checker." means that the validator is checking your markup as HTML5, but since the w3c hasn't agreed on every part of the HTML5 standard, you should take what the validator says with a grain of salt, because it is prone to change until the standard is complete. The warning does not mean that there is anything wrong with your code, but if you want to get rid of the warning, try validating with a Doctype of "HTML 4.01 Strict".

by [Josiah Sprague](http://stackoverflow.com/users/417629/josiah-sprague)

Thanks to both of them.

Over.
