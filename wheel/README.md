# wheel
>使用原生JavaScript，简单模仿jQuery的fullpage插件的全屏滚动

## 演示
This is a [demo](http://htmlpreview.github.io/?https://github.com/AdBrandon/module/blob/master/wheel/demo.html) .

## 使用方法
1，在HTML中导入
```html
<script type="text/javascript" src="wheel.js"></script>
```
2，直接在body下创建classNmae为“section”的div即可（每一个div代表一页）
```html
<body>
  	<div class="section"></div>
  	<div class="section"></div>
    //需要几页就创建几个div即可
</body>
```

## 兼容性
支持Chrome、Firefox、Safari、opera、IE10及以上。
>因为用的原生JavaScript，没有做IE兼容，有空用jQuery再写一个╮(╯▽╰)╭
