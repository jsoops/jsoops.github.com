---
layout: post
title: "Learning Google Dart"
description: "<p>Dart brings structure to web app engineering with a new language, libraries, and tools.</p><p><a href='http://www.dartlang.org/' target='_blank'>http://www.dartlang.org/</a></p><p><a href='http://www.dartlang.org/docs/' target='_blank'>http://www.dartlang.org/docs/</a></p><p>Dart is a class-based, object-oriented language with lexical scoping, closures, and optional static typing. Dart helps you build structured modern web apps and is easy to learn for a wide range of developers.</p>"
category: javascript
tags: [dart, intellij]
---
{% include JB/setup %}

Dart brings structure to web app engineering with a new language, libraries, and tools.

<http://www.dartlang.org/>

<http://www.dartlang.org/docs/>

Dart is a class-based, object-oriented language with lexical scoping, closures, and optional static typing. Dart helps you build structured modern web apps and is easy to learn for a wide range of developers.

>Google 的开发人员似乎热衷于开发新的编程语言，而且每一次新的语言都很造成比较大的影响。前不久，Google 的开发人员发布了新的编程语言 Dart。Dart 语言的目标是创建结构化的 Web 应用。在使用方式上类似 Node.js 和 GWT，即在服务器端和客户端采用相同的编程语言。在 Node.js 中，都是使用的 JavaScript；在 GWT 中则是以 Java 为主；而 Dart 则更像是升级版的 GWT ，只是用了一种设计更好的语言来替代 Java。在服务器端，Dart 运行在虚拟机（DartVM）之上；而在浏览器端，则转换成 JavaScript 来执行。

<p></p>
>在语法上，Dart 像是 Scala 和 JavaScript 的一个结合体。Dart 中有类和接口的概念，同时类型声明是可选的。在 Dart 中，变量的类型声明是可选的。这么设计的出发点是让开发人员可以根据开发的不同阶段以及应用的类型来选择合适的类型声明策略。在初期的原型开发阶段或是开发小型应用时，使用动态类型是一个不错的选择；而对于复杂的模块化的大型应用来说，采用静态类型则是一个更好的做法。Dart 并不对类型声明的选择做出限制。

<p></p>
>值得一提的是 Dart 的并发编程模型。Dart 程序在运行时总是单线程的，这点类似 JavaScript。并发性是通过类似 Actor 的隔离体（isolate）来完成的。每个隔离体是一个并发运行的单元，有自己的内存和执行逻辑。隔离体之间通过消息传递来进行通讯。Dart 中的隔离体与 HTML5 中的 Web Worker 非常相似。

-- 来自 [Java 那些事儿 - JavaOne 2011、CDI 和 Google Dart 语言](http://www.infoq.com/cn/articles/cf-javaone-2011-cdi-google-dart)

入门很失败，从官方下载的 Dart Editor，运行默认的 Web 示例，报错：

`java.net.ConnectException：Connection refused`

Intellij Web 项目则提示：

`Do not know how to load 'dart:html'`

>3月31日补：启动 Dart Editor 之后，可用浏览器访问 http://localhost:3030/ 测试效果，IDE 会即时编译。

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
----

续：

3月27日，在 Windows XP 下安装 Dart，没有发现 连接超时的错误，但是 chromium 打开的一直是空白页面，控制台有一个发布错误。

3月28日，JDK 升级到 1.7.0 之后，能打开页面了，但是无动态效果，经查，是 JS 路径找不到，可能和那个发布错误有关，手工修改 路径之后，程序可以运行，只是 URL 地址看起来非常怪：

`http://127.0.0.1:3030/C:/set/Dart/clock/web/clock.html`

但是总算可以看到效果了

先贴一下 dart 代码：

**balls.dart**

```javascript
// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of clock;

int get clientWidth => window.innerWidth;

int get clientHeight => window.innerHeight;

class Balls {
  static const double RADIUS2 = Ball.RADIUS * Ball.RADIUS;

  static const int LT_GRAY_BALL_INDEX = 0;
  static const int GREEN_BALL_INDEX = 1;
  static const int BLUE_BALL_INDEX = 2;

  static const int DK_GRAY_BALL_INDEX = 4;
  static const int RED_BALL_INDEX = 5;
  static const int MD_GRAY_BALL_INDEX = 6;

  static const List<String> PNGS = const [
      "images/ball-d9d9d9.png", "images/ball-009a49.png",
      "images/ball-13acfa.png", "images/ball-265897.png",
      "images/ball-b6b4b5.png", "images/ball-c0000b.png",
      "images/ball-c9c9c9.png"
  ];

  DivElement root;
  num lastTime;
  List<Ball> balls;

  Balls() :
      lastTime = new DateTime.now().millisecondsSinceEpoch,
      balls = new List<Ball>() {
    root = new DivElement();
    document.body.nodes.add(root);
    makeAbsolute(root);
    setElementSize(root, 0.0, 0.0, 0.0, 0.0);
  }

  void tick(num now) {
    showFps(1000.0 / (now - lastTime + 0.01));

    double delta = min((now - lastTime) / 1000.0, 0.1);
    lastTime = now;

    // incrementally move each ball, removing balls that are offscreen
    balls = balls.where((ball) => ball.tick(delta)).toList();
    collideBalls(delta);
  }

  void collideBalls(double delta) {
    balls.forEach((b0) {
      balls.forEach((b1) {
        // See if the two balls are intersecting.
        double dx = (b0.x - b1.x).abs();
        double dy = (b0.y - b1.y).abs();
        double d2 = dx * dx + dy * dy;

        if (d2 < RADIUS2) {
          // Make sure they're actually on a collision path
          // (not intersecting while moving apart).
          // This keeps balls that end up intersecting from getting stuck
          // without all the complexity of keeping them strictly separated.
          if (newDistanceSquared(delta, b0, b1) > d2) {
            return;
          }

          // They've collided. Normalize the collision vector.
          double d = sqrt(d2);

          if (d == 0) {
            // TODO: move balls apart.

            return;
          }

          dx /= d;
          dy /= d;

          // Calculate the impact velocity and speed along the collision vector.
          double impactx = b0.vx - b1.vx;
          double impacty = b0.vy - b1.vy;
          double impactSpeed = impactx * dx + impacty * dy;

          // Bump.
          b0.vx -= dx * impactSpeed;
          b0.vy -= dy * impactSpeed;
          b1.vx += dx * impactSpeed;
          b1.vy += dy * impactSpeed;
        }
      });
    });
  }

  double newDistanceSquared(double delta, Ball b0, Ball b1) {
    double nb0x = b0.x + b0.vx * delta;
    double nb0y = b0.y + b0.vy * delta;
    double nb1x = b1.x + b1.vx * delta;
    double nb1y = b1.y + b1.vy * delta;
    double ndx = (nb0x - nb1x).abs();
    double ndy = (nb0y - nb1y).abs();
    double nd2 = ndx * ndx + ndy * ndy;
    return nd2;
  }

  void add(double x, double y, int color) {
    balls.add(new Ball(root, x, y, color));
  }
}

class Ball {
  static const double GRAVITY = 400.0;
  static const double RESTITUTION = 0.8;
  static const double MIN_VELOCITY = 100.0;
  static const double INIT_VELOCITY = 800.0;
  static const double RADIUS = 14.0;

  static Random random;

  static double randomVelocity() {
    if (random == null) {
      random = new Random();
    }

    return (random.nextDouble() - 0.5) * INIT_VELOCITY;
  }

  Element root;
  ImageElement elem;
  double x, y;
  double vx, vy;
  double ax, ay;
  double age;

  Ball(this.root, this.x, this.y, int color) {
    elem = new ImageElement(src: Balls.PNGS[color]);
    makeAbsolute(elem);
    setElementPosition(elem, x, y);
    root.nodes.add(elem);

    ax = 0.0;
    ay = GRAVITY;

    vx = randomVelocity();
    vy = randomVelocity();
  }

  // return false => remove me
  bool tick(double delta) {
    // Update velocity and position.
    vx += ax * delta;
    vy += ay * delta;

    x += vx * delta;
    y += vy * delta;

    // Handle falling off the edge.
    if ((x < RADIUS) || (x > clientWidth)) {
      elem.remove();
      return false;
    }

    // Handle ground collisions.
    if (y > clientHeight) {
      y = clientHeight.toDouble();
      vy *= -RESTITUTION;
    }

    // Position the element.
    setElementPosition(elem, x - RADIUS, y - RADIUS);

    return true;
  }
}
```

clock.dart

```javascript
// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library clock;

import 'dart:html';
import 'dart:math';

part 'balls.dart';
part 'numbers.dart';

void main() {
  new CountDownClock();
}

num fpsAverage;

/**
 * Display the animation's FPS in a div.
 */
void showFps(num fps) {
  if (fpsAverage == null) {
    fpsAverage = fps;
  } else {
    fpsAverage = fps * 0.05 + fpsAverage * 0.95;

    query("#notes").text = "${fpsAverage.round().toInt()} fps";
  }
}

class CountDownClock {
  static const double NUMBER_SPACING = 19.0;
  static const double BALL_WIDTH = 19.0;
  static const double BALL_HEIGHT = 19.0;

  List<ClockNumber> hours = new List<ClockNumber>(2);
  List<ClockNumber> minutes = new List<ClockNumber>(2);
  List<ClockNumber> seconds = new List<ClockNumber>(2);
  int displayedHour = -1;
  int displayedMinute = -1;
  int displayedSecond = -1;
  Balls balls = new Balls();

  CountDownClock() {
    var parent = query("#canvas-content");

    createNumbers(parent, parent.client.width, parent.client.height);

    updateTime(new DateTime.now());

    window.requestAnimationFrame(tick);
  }

  void tick(num time) {
    updateTime(new DateTime.now());
    balls.tick(time);
    window.requestAnimationFrame(tick);
  }

  void updateTime(DateTime now) {
    if (now.hour != displayedHour) {
      setDigits(pad2(now.hour), hours);
      displayedHour = now.hour;
    }

    if (now.minute != displayedMinute) {
      setDigits(pad2(now.minute), minutes);
      displayedMinute = now.minute;
    }

    if (now.second != displayedSecond) {
      setDigits(pad2(now.second), seconds);
      displayedSecond = now.second;
    }
  }

  void setDigits(String digits, List<ClockNumber> numbers) {
    for (int i = 0; i < numbers.length; ++i) {
      int digit = digits.codeUnitAt(i) - '0'.codeUnitAt(0);
      numbers[i].setPixels(ClockNumbers.PIXELS[digit]);
    }
  }

  String pad3(int number) {
    if (number < 10) {
      return "00${number}";
    }
    if (number < 100) {
      return "0${number}";
    }
    return "${number}";
  }

  String pad2(int number) {
    if (number < 10) {
      return "0${number}";
    }
    return "${number}";
  }

  void createNumbers(Element parent, num width, num height) {
    DivElement root = new DivElement();
    makeRelative(root);
    root.style.textAlign = 'center';
    query("#canvas-content").nodes.add(root);

    double hSize = (BALL_WIDTH * ClockNumber.WIDTH + NUMBER_SPACING) * 6
        + (BALL_WIDTH + NUMBER_SPACING) * 2;
    hSize -= NUMBER_SPACING;

    double vSize = BALL_HEIGHT * ClockNumber.HEIGHT;

    double x = (width - hSize) / 2;
    double y = (height - vSize) / 3;

    for (int i = 0; i < hours.length; ++i) {
      hours[i] = new ClockNumber(this, x, Balls.BLUE_BALL_INDEX);
      root.nodes.add(hours[i].root);
      setElementPosition(hours[i].root, x, y);
      x += BALL_WIDTH * ClockNumber.WIDTH + NUMBER_SPACING;
    }

    root.nodes.add(new Colon(x, y).root);
    x += BALL_WIDTH + NUMBER_SPACING;

    for (int i = 0; i < minutes.length; ++i) {
      minutes[i] = new ClockNumber(this, x, Balls.RED_BALL_INDEX);
      root.nodes.add(minutes[i].root);
      setElementPosition(minutes[i].root, x, y);
      x += BALL_WIDTH * ClockNumber.WIDTH + NUMBER_SPACING;
    }

    root.nodes.add(new Colon(x, y).root);
    x += BALL_WIDTH + NUMBER_SPACING;

    for (int i = 0; i < seconds.length; ++i) {
      seconds[i] = new ClockNumber(this, x, Balls.GREEN_BALL_INDEX);
      root.nodes.add(seconds[i].root);
      setElementPosition(seconds[i].root, x, y);
      x += BALL_WIDTH * ClockNumber.WIDTH + NUMBER_SPACING;
    }
  }
}

void makeAbsolute(Element elem) {
  elem.style.left = '0px';
  elem.style.top = '0px';
  elem.style.position = 'absolute';
}

void makeRelative(Element elem) {
  elem.style.position = 'relative';
}

void setElementPosition(Element elem, double x, double y) {
  elem.style.transform = 'translate(${x}px, ${y}px)';
}

void setElementSize(Element elem, double l, double t, double r, double b) {
  setElementPosition(elem, l, t);
  elem.style.right = "${r}px";
  elem.style.bottom = "${b}px";
}
```


![默认示例的时钟效果](/assets/images/2013/01/clock.jpg)





