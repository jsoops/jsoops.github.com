---
layout: post
title: "Learning Google Dart"
description: "<p>Dart brings structure to web app engineering with a new language, libraries, and tools.</p><p><a href='http://www.dartlang.org/' target='_blank'>http://www.dartlang.org/</a></p><p><a href='http://www.dartlang.org/docs/' target='_blank'>http://www.dartlang.org/docs/</a></p><p>Dart is a class-based, object-oriented language with lexical scoping, closures, and optional static typing. Dart helps you build structured modern web apps and is easy to learn for a wide range of developers.</p>"
category: dart
tags: [dart, intellij]
---
{% include JB/setup %}

Dart brings structure to web app engineering with a new language, libraries, and tools.

<http://www.dartlang.org/>

<http://www.dartlang.org/docs/>

Dart is a class-based, object-oriented language with lexical scoping, closures, and optional static typing. Dart helps you build structured modern web apps and is easy to learn for a wide range of developers.

入门很失败，从官方下载的 Dart Editor，运行默认的 Web 示例，报错：

`java.net.ConnectException：Connection refused`

Intellij Web 项目则提示：

`Do not know how to load 'dart:html'`

只能玩玩儿命令行程序，在控制台输入：

`Hello, 阿三！`

安装插件的时候，发现 Intellij 的插件生态圈儿，[很强大](http://plugins.jetbrains.com/plugin?pr=idea&pluginId=5970)。

贴一段官方的示例代码，过个眼瘾，以后再研究出错原因：

```python
import 'dart:html';

main() {
  var msg = query('#msg');
  var btn = new ButtonElement();
  btn.text = 'Click me!';
  btn.onClick.listen((e) => msg.text = 'Dart!');
  document.body.children.add(btn);
}
```

