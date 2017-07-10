$(function() {
    function autoPlay() {
        if (!$(".c_box")[0]) return false;
        this.initialize();
    }
    autoPlay.prototype = {
        box: $(".c_box"),
        img: $(".c_box img"),
        ul: null,
        timer: null,
        autoTimer: null,
        iNow: 0,
        btn: null,
        top:0,
        initialize: function() {
        	var that = this;
            this.creatTree();
            this.ul = $(".c_box .list ul");
            this.btn = $(".c_box .count li");
            this.toggle();
            this.autoTimer = setInterval(function(){
            	that.next();
            },3000);
            this.box.mouseover(function(){
            	clearInterval(that.autoTimer)
            });
            this.box.mouseout(function(){
            	that.autoTimer = setInterval(function() {
                    that.next()
                }, 3000)
            });
            this.btn.mouseover(function(){
            	that.iNow = $(this).attr("data-index");
            	that.toggle();
            })   
        },
        creatTree: function() {
            this.img.wrapAll("<div class='list'></div>").wrapAll("<ul></ul>").wrap("<li></li>");
            this.box.append("<ul class='count'></ul>");
            var $count = $(".c_box .count");
            for (var i = 0; i < this.img.length; i++) {
                $count.append("<li data-index='"+ i+"'>" + (i + 1) + "</li>")
            }
        },
        toggle: function() {
            this.btn.removeClass("current");
            this.btn.slice(this.iNow, parseInt(this.iNow)+ 1).addClass("current");
            this.doMove(-(this.iNow * this.img[0].offsetHeight));
        },
        doMove: function(iTarget) {
        	var that = this;
            clearInterval(that.timer);
            that.timer = setInterval(function() {
            	var top = that.top;
                var iSpeed = (iTarget - that.top) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if (that.top == iTarget ) {
                	clearInterval(that.timer)
                } else{
                	that.top = that.top + iSpeed
                	that.ul.css("transform","translateY("+that.top+"px)")
                }
            }, 30)
        },
        next:function(){
        	this.iNow++;
            this.iNow == this.btn.length && (this.iNow = 0);
            this.toggle()
        }
    }
    new autoPlay();
})
