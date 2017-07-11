function Drag() {
    //初始化
    this.initialize.apply(this, arguments)
}
Drag.prototype = {
    //初始化
    initialize: function(drag, options) {
        this.drag = this.$(drag);
        this._x = this._y = 0;
        this._moveDrag = this.bind(this, this.moveDrag);
        this._stopDrag = this.bind(this, this.stopDrag);
        this.setOptions(options);
        this.handle = this.$(this.options.handle);
        this.maxContainer = this.$(this.options.maxContainer);
        this.onStart = this.options.onStart;
        this.onMove = this.options.onMove;
        this.onStop = this.options.onStop;
        this.handle.style.cursor = "move";
        this.changeLayout();
        this.addHandler(this.handle, "mousedown", this.bind(this, this.startDrag))
    },
    changeLayout: function() {
        this.drag.style.top = this.drag.offsetTop + "px";
        this.drag.style.left = this.drag.offsetLeft + "px";
        this.drag.style.position = "absolute";
        this.drag.style.margin = "0"
    },
    startDrag: function(event) {
        var event = event || window.event;
        this._x = event.clientX - this.drag.offsetLeft;
        this._y = event.clientY - this.drag.offsetTop;
        this.addHandler(document, "mousemove", this._moveDrag);
        this.addHandler(document, "mouseup", this._stopDrag);

        event.preventDefault && event.preventDefault();
        this.handle.setCapture && this.handle.setCapture();

        this.onStart()
    },
    moveDrag: function(event) {
        var event = event || window.event;
        var iTop = event.clientY - this._y;
        var iLeft = event.clientX - this._x;
        this.drag.getAttribute("limit") == "true" ? this.limit = true:this.limit = false;
        if (this.limit) {
            this.maxTop = Math.max(this.maxContainer.clientHeight, this.maxContainer.scrollHeight) - this.drag.offsetHeight + this.maxContainer.offsetTop;
            this.maxLeft = Math.max(this.maxContainer.clientWidth, this.maxContainer.scrollWidth) - this.drag.offsetWidth + this.maxContainer.offsetLeft;
            iTop < this.maxContainer.offsetTop && (iTop = this.maxContainer.offsetTop);
            iLeft < this.maxContainer.offsetLeft && (iLeft = this.maxContainer.offsetLeft);
            iTop > this.maxTop && (iTop = this.maxTop);
            iLeft > this.maxLeft && (iLeft = this.maxLeft);
        }
        if (this.drag.getAttribute("x") !== "true") {
            this.drag.style.top = iTop + "px"
        }
        if (this.drag.getAttribute("y") !== "true") {
            this.drag.style.left = iLeft + "px"
        }
        event.preventDefault && event.preventDefault();
        this.onMove()
    },
    stopDrag: function() {
        this.removeHandler(document, "mousemove", this._moveDrag);
        this.removeHandler(document, "mouseup", this._stopDrag);
        this.handle.releaseCapture && this.handle.releaseCapture();
        this.onStop()
    },
    //参数设置
    setOptions: function(options) {
        this.options = {
            handle: this.drag, //事件对象
            maxContainer: document.getElementById("d_container") || document.body, //指定限制容器
            onStart: function() {}, //开始时回调函数
            onMove: function() {}, //拖拽时回调函数
            onStop: function() {} //停止时回调函数
        };
        for (var p in options) this.options[p] = options[p]
    },
    //获取id
    $: function(id) {
        return typeof id === "string" ? document.getElementById(id) : id
    },
    //添加绑定事件
    addHandler: function(oElement, sEventType, fnHandler) {
        return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
    },
    //删除绑定事件
    removeHandler: function(oElement, sEventType, fnHandler) {
        return oElement.removeEventListener ? oElement.removeEventListener(sEventType, fnHandler, false) : oElement.detachEvent("on" + sEventType, fnHandler)
    },
    //绑定事件到对象
    bind: function(object, fnHandler) {
        return function() {
            return fnHandler.apply(object, arguments)
        }
    }
};
//应用
window.onload = function() {
    var box = document.getElementById("d_box");
    var target = document.getElementById("d_target");
    var oDrag = new Drag(box, {
        handle: target,
    });
};
