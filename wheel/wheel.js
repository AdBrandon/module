window.addEventListener("load", function() {
	var sectionList = document.getElementsByClassName("section"),
		parent = sectionList[0].parentNode,
		container = document.createElement("div"),
		page = document.createElement("div"),
		aside = document.createElement("div"),
		ul = document.createElement("ul"),
		liPointer = document.createElement("li"),
		height = innerHeight,
		pageNow = 1,
		pageAll = sectionList.length;
	//重建DOM结构，增加container视口、page整体网页
	container.appendChild(page);
	container.appendChild(aside);
	aside.appendChild(ul);
	parent.insertBefore(container, sectionList[0]);
	for (var i = 0; i < sectionList.length; i++) {
		page.appendChild(sectionList[i]);
		sectionList[i].style.height = height + "px";
		var li = document.createElement("li");
		ul.appendChild(li);
		li.setAttribute("data-index", i + 1);
		setStyle(li, {
			color: "#fff",
			listStyleType: "circle",
			fontSize: "35px",
			lineHeight: "30px",
			cursor: "pointer"
		});
	};
	//取得所有固定li列表
	var liList = ul.getElementsByTagName("li");

	ul.appendChild(liPointer);
	//CSS设置
	setStyle(document.body, {
		margin: 0,
		padding: 0
	});
	setStyle(container, {
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	});
	page.style.transition = "all ease 1s";
	setStyle(aside, {
		position: "fixed",
		top: "50%",
		marginTop: -aside.offsetHeight / 2 + "px",
		right: 0,
		zIndex: 99,
		width: "45px"
	});
	setStyle(ul, {
		margin: 0,
		position: "relative"
	});
	setStyle(liPointer, {
		position: "absolute",
		color: "#fff",
		fontSize: "35px",
		lineHeight: "30px",
		top: 0,
		transition: "top ease 1s",
		cursor: "pointer"
	});
	//创建动画对象
	var animation = {
		scrolling: false,
		down: function() {
			if ((pageNow + 1) <= pageAll) {
				pageNow += 1;
				animation.move(pageNow);
			}else{
				pageNow = 1;
				animation.move(pageNow);
			}
		},
		up: function() {
			if ((pageNow - 1) > 0) {
				pageNow -= 1;
				animation.move(pageNow);
			}
		},
		move: function(pageNow) {
			animation.scrolling = true;
			var step = -(pageNow - 1) * height + "px";
			page.style.transform = "translateY(" + step + ")";
			liPointer.style.top = (pageNow - 1) * 30 + "px";
		},
		moveEnd: function() {
			animation.scrolling = false;
		}
	};
	//窗口改变大小事件（自适应）
	var resizeEvent = function() {
		var width = window.innerWidth;
		if (width < 500) {
			aside.style.display = "none";
		} else {
			aside.style.display = "block";
		};
		if (height != innerHeight) {
			height = innerHeight;
			for (var i = 0; i < sectionList.length; i++) {
				sectionList[i].style.height = height + "px";
			}
		}
	};
	//鼠标滚轮事件
	var mousewheelEvent = function(event) {
		if (animation.scrolling) return false;
		if (event.wheelDelta > 0) {
			animation.up()
		} else if (event.wheelDelta < 0) {
			animation.down()
		}
	};
	//键盘事件
	var keyboardEvent = function(event) {
		var key = event.keyCode;
		switch (key) {
			case 37:
				animation.up();
				break;
			case 38:
				animation.up();
				break;
			case 39:
				animation.down();
				break;
			case 40:
				animation.down();
				break;
		}
	};
	//导航点击事件
	document.addEventListener
	var clickEvent = function(event) {
		var key = event.keyCode;
		switch (key) {
			case 37:
				animation.up();
				break;
			case 38:
				animation.up();
				break;
			case 39:
				animation.down();
				break;
			case 40:
				animation.down();
				break;
		}
	};
	//liList绑定点击事件
	for (var i = 0; i < liList.length; i++) {
		liList[i].addEventListener("click", function() {
			pageNow = parseInt(this.getAttribute("data-index"));
			animation.move(pageNow);
		})
	}
	//动画结束后触发
	page.addEventListener("webkitTransitionEnd", animation.moveEnd);
	window.addEventListener("resize", resizeEvent);
	document.addEventListener("mousewheel", mousewheelEvent);
	document.addEventListener("keydown", keyboardEvent);
	//批量设置CSS；参数：元素对象，js描述对象
	function setStyle(element, descriptionObj) {
		for (var i in descriptionObj) {
			element.style[i] = descriptionObj[i] + "";
		}
	}
})