# Drag

原生JavaScript，利用面向对象思想实现拖拽模块

## 演示
This is a [demo](http://htmlpreview.github.io/?https://github.com/AdBrandon/module/blob/master/drag/demo/demo.html) .

## 使用方法
1，在HTML中导入
```html
<script type="text/javascript" src="drag.js"></script>
```
2，需要拖拽的元素id为"d_drag"，拖拽指针元素id为"d_target"。

3，固定x轴：#d_drag元素添加属性```x="true"```;
固定y轴：#d_drag元素添加属性```y="true"```。
(可使用js动态修改)

4，添加范围：创建范围元素id为"d_container"，设置margin值即可，并为#d_drag元素添加属性```limit="true"```。
(可使用js动态修改)


```html
<body>
  	<div id="d_container">
        <div id="d_box" x="false" y="true" limit="true">
            <div id="d_target"></div>
        </div>
    </div>
</body>
```
