---
layout: post
title: "Preloading and the JavaScript Image Object"
description: "<p class='justify'>Lots of high-res images can really spruce up a Web site. But they can also slow it down—images are files, files use bandwidth, and bandwidth is directly related to wait times. It's time you get yourself an education on how to speed things up with a little trick called image preloading.</p>"
category: javascript
tags: [js, images]
---
{% include JB/setup %}

转自：[http://www.techrepublic.com](http://www.techrepublic.com/article/preloading-and-the-javascript-image-object/5214317)

序：

我们在开发中，经常使用 JS Image 对象，但一直没有仔细的研究。今天找到了 Mozilla 手册：

Mozilla：[HTMLImageElement](https://developer.mozilla.org/en-US/docs/DOM/HTMLImageElement)

*Example*

```javascript
var img1 = new Image(); // DOM 0
img1.src = 'image1.png';
img1.alt = 'alt';
document.body.appendChild(img1);

var img2 = document.createElement('img'); // use DOM HTMLImageElement
img2.src = 'image2.jpg';
img2.alt = 'alt text';
document.body.appendChild(img2);

// using first image in the document
alert(document.images[0].src);
```

同时也看下 W3schools 的描述：

W3schools：[HTML DOM Document Object](http://www.w3schools.com/jsref/dom_obj_document.asp)

*Image Object*

The Image object represents an embedded image.

For each `<img>` tag in an HTML document, an Image object is created.

Notice that images are not technically inserted into an HTML page, images are linked to HTML pages. The `<img>` tag creates a holding space for the referenced image.

除了 Image 之外，还有 Option 可以用 new 创建：

```javascript
var sel = document.createElement("select");
//var sel = new Select();// not work

var opt1 = new Option();
var opt2 = new Option();
 
opt1.value = "1";
opt1.text = "Option: Value 1";
 
opt2.value = "2";
opt2.text = "Option: Value 2";
 
sel.add(opt1, null);
sel.add(opt2, null);
 
document.body.appendChild(sel);
```

可能 DOM 设计者，秉承了最小需求原则，Image 和 Option 在实际开发中，动态生成的场合相对较多，所以才允许直接 new？

补记：据我不完全统计，只有 Image 和 Option 支持 new 操作符，可在 Chorome 控制台测试。

```
new Image
<img>​
new Option
<option>​​</option>​
new Button
ReferenceError: Button is not defined
```

----

<p class='justify'>Lots of high-res images can really spruce up a Web site. But they can also slow it down—images are files, files use bandwidth, and bandwidth is directly related to wait times. It's time you get yourself an education on how to speed things up with a little trick called image preloading.</p>

### Image preloading

<p class='justify'>The way a browser normally works, images are loaded only after an HTTP request is sent for them, either passively via an &lt;img> tag or actively through a method call. So if you have JavaScript that swaps an image on mouseover, or changes an image automatically after a timeout, you can expect to wait anywhere from a few seconds to a few minutes while the image is retrieved from the server. This is especially noticeable if you have a slow connection to the Internet, or if the images being retrieved are very large...and the delay usually ruins the effect you were hoping for.</p>

<p class='justify'>Some browsers try to mitigate this problem by storing the images in the local cache so that subsequent calls to the image are satisfied immediately...but there's still a delay the very first time the image is needed. Preloading is a technique where the image is downloaded to the cache before it's needed. That way when the image is really needed it can be retrieved from the cache and displayed immediately.</p>

### The Image() object

<p class='justify'>The simplest way to preload an image is to instantiate a new Image() object in JavaScript and pass it the URL of the image you want preloaded. Say we have an image called heavyimagefile.jpg, which we want to display when the user mouses over an already-displayed image. In order to preload this image for faster response time, we simply create a new Image() object, called heavyImage, and load it simultaneously to the page with the onLoad() event handler:</p>

```html
<html>
 <head>
 <script>
 function preloader() 
 {
 heavyImage = new Image(); 
 heavyImage.src = "heavyimagefile.jpg";
 }
 </script>
 </head>
 <body onLoad="javascript:preloader()">
 <a href="#" onMouseOver="javascript:document.img01.src='heavyimagefile.jpg'">
 <img name="img01" src="justanotherfile.jpg"></a>
 </body>
 </html>
 ```

Note that the image tag does not itself handle onMouseOver() and onMouseOut() events, which is why the `<img>` tag in the example above has been enclosed in an `<a>` tag, which does include support for those event types.


<h3>Loading multiple images with arrays</h3>

<p class='justify'>In practice, you will probably need to preload more than just one image; for example, in a menu bar containing multiple image rollovers, or if you're trying to create a smooth animation effect. This is not difficult; all you need to do is make use of JavaScript's arrays, as in the example below:</p>

```javascript
 function preloader() 
 {
 
     // counter
     var i = 0;
 
     // create object
     imageObj = new Image();
 
     // set image list
     images = new Array();
     images[0]="image1.jpg"
     images[1]="image2.jpg"
     images[2]="image3.jpg"
     images[3]="image4.jpg"
 
     // start preloading
     for(i=0; i<=3; i++) 
     {
          imageObj.src=images[i];
     }
 
 } 
 ```

<p class='justify'>In the above example, you define a variable i and an Image() object cleverly named imageObj. You then define a new array called images[], where each array element stores the source of the image to be preloaded. Finally, you create a for() loop to cycle through the array and assign each one of them to the Image() object, thus preloading it into the cache.</p>

<h3>The onLoad() event handler</h3>

<p class='justify'>Like many other objects in JavaScript, the Image() object also comes with some event handlers. The most useful of these is undoubtedly the onLoad() handler, which is invoked when the image has completed loading. This handler can be hooked up with a custom function to perform specific tasks after the image has completed loading. The following example illustrates this by displaying a "please wait" screen while the image loads, and then sending the browser to a new URL once it's finished loading.</p>

```html
<html>
 <head>
 <script>
 
 // create an image object
 objImage = new Image();
     
 // set what happens once the image has loaded objImage.onLoad=imagesLoaded();
     
 // preload the image file
 objImage.src='images/image1n.gif';
 
 // function invoked on image load
 function imagesLoaded()
 {    
     document.location.href='index2.html';
 }
 
 </script>
 </head>
 
 <body>
 
 Please wait, loading images...
 
 </body>
 </html>
 ```

<p class='justify'>Of course, you can also create an array of images and loop over it, preloading each one and keeping track of the number of images loaded at each stage. Once all the images are loaded, the event handler can be programmed to take the browser to the next page (or do any other task).</p>

<h3>Preloading and Multi-State Menus</h3>

<p class='justify'>Now, how about using all the theory you just learned in an actual application? This next one is a little piece of code I recently had occasion to write - a menu bar consisting of buttons (image links), each of which can be in any one of three states: normal, hover and click. Since the buttons have multiple states, it is necessary to use image preloading to ensure that the menu responds quickly to changes in its state. The code:</p>

 ```html
 <html>
<head>

<script>

// array of "normal state" images
var normalImages = new Array('images/image1n.gif', 'images/image2n.gif', 'images/image3n.gif', 'images/image4n.gif');

// array of "hover state" images
var hoverImages = new Array('images/image1h.gif', 'images/image2h.gif', 'images/image3h.gif', 'images/image4h.gif');

// array of "click state" images
var clickImages = new Array('images/image1c.gif', 'images/image2c.gif', 'images/image3c.gif', 'images/image4c.gif');

// this function is called on page load
// it preloads all the hover and click images
// for faster swap response time
function preloadImages() 
{
	var i=0;

	objImage = new Image();

	for	(i=1; i<=hoverImages.length; i++)
	{
		objImage.src = hoverImages[i];
	}

	for	(i=1; i<=clickImages.length; i++)
	{
		objImage.src = clickImages[i];
	}

}

// this function resets all the images to their "normal" state // used when clicking on an image, to reset all images 
function resetAll()
{
	for	(i=1; i<=normalImages.length; i++)
	{
		obj = eval('document.image' + i);
		obj.src = normalImages[i-1];
	}

}

// used on mouseover
// swap the named image into "hover" state
// but only if it is not already in "click" state
function setHover(num)
{
	obj = eval('document.image' + num);
	str = obj.src;

	if (str.search(clickImages[num-1]) == -1)
	{
		obj.src = hoverImages[num-1];
	}
}

// swap the named image into "click" state
// previously clicked images must go back to "normal" state first function setClick(num) {
	resetAll();
	obj = eval('document.image' + num);
	obj.src = clickImages[num-1];
}

// used on mouseout
// swap the named image into "normal" state
// but only if it is not already in "click" state
function setNormal(num)
{
	obj = eval('document.image' + num);
	str = obj.src;

	if (str.search(clickImages[num-1]) == -1)
	{
		obj.src = normalImages[num-1];
	}
}
</script>

</head>

<body onLoad="javascript:preloadImages();">

<a href="#" onMouseOver="setHover(1)" onMouseOut="setNormal(1)" onClick="setClick(1)"><img name="image1" src="images/image1n.gif" width=100 height=25></a>

<p>

<a href="#" onMouseOver="setHover(2)" onMouseOut="setNormal(2)" onClick="setClick(2)"><img name="image2" src="images/image2n.gif" width=100 height=25></a>

<p>

<a href="#" onMouseOver="setHover(3)" onMouseOut="setNormal(3)" onClick="setClick(3)"><img name="image3" src="images/image3n.gif" width=100 height=25></a>

<p>

<a href="#" onMouseOver="setHover(4)" onMouseOut="setNormal(4)" onClick="setClick(4)"><img name="image4" src="images/image4n.gif" width=100 height=25></a>

</body>
</html>
```
The HTML code sets up a menu bar consisting of four buttons, each of which has thee states: normal, hover, and click. The requirements are as follows:

* On mouse move over a button in normal state, it changes to hover state. On mouse out, it goes back to normal state.

* On mouse click on a button, it changes to its click state. It remains in this state until another button is clicked.

* If a button is clicked, no other button may be in click state. Other buttons can only be in their hover or normal states.

* Only one button may be clicked at a time.

* Only one button can be in hover state at a time.

The first task is to set up arrays holding the images for each state of the menu. The `<img> `elements corresponding to these array elements are also created in the HTML document body, and named sequentially. Note that array values are indexed starting from 0, while the corresponding `<img>` elements are named starting from 1—this gives rise to certain calculation adjustments in the latter half of the script.

<p class='justify'>The preloadImages() function takes care of loading all the images into the cache, so that response time on mouse movement is minimal. A for() loop is used to iterate over the images created in the first step and preload each one.</p>

<p class='justify'>The resetAll() function is a convenient way to reset all the images to their normal state. This is necessary because, when an item of the menu is clicked, all other items in the menu must revert to their normal state before the clicked item can change to its click state.</p>

<p class='justify'>The setNormal(), setHover() and setClick() functions take care of changing the source of a particular image (image number passed as function argument) to its normal, hover, or click state respectively. Since images which are clicked must remain in that state until another image is clicked (see rule #2), they are temporarily immune to mouse movements; thus, the setNormal() and setHover() functions include code to only change a button's state if it is not already in its click state.</p>

<p class='justify'>The above is just one of the many ways in which preloading can help you speed up the response time of your JavaScript effects. Use the techniques outlined above in your site, and alter them where needed to fit your requirements. Good luck!</p>
