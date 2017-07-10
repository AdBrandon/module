# carousel
> 基于jQuery，利用面向对象思想实现图片轮播模块

定义构造函数的原型对象，创建该构造函数的对象即可实现。

## 演示
This is a [demo](http://htmlpreview.github.io/?https://github.com/AdBrandon/module/blob/master/carousel/demo/demo.html) .

## 使用方法
1，在HTML中导入
```html
<script type="text/javascript" src="carousel.js"></script>
```
2，把需要轮播的img标签，用className为"c_box"的div包裹即可。
```html
<body>
  	<div class="c_box">
  		<img src="img/1.jpg" alt="">
		<img src="img/2.jpg" alt="">
		<img src="img/3.jpg" alt="">
  		...
  	</div>
</body>
```
3，css需要额外定义（导航选中指针className为"current"），[参考](http://htmlpreview.github.io/?https://github.com/AdBrandon/module/blob/master/carousel/demo/demo.css)

## 截图
![](https://ws4.sinaimg.cn/large/006tKfTcly1fher3fk9kzj309605yadp.jpg)


