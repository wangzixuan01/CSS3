/**
 * Created by 10989 on 2017/8/22.
 */
define(["jquery"],function ($) {
    function Carousel(settings){
       this.$container=$("<div class='carousel-container'></div>");
       this.$tabs=$("<ul class='carousel-tabs'><ul>");
       this.$imgs=$("<div class='carousel-imgs'></div>");
        this.$prev=$("<span class='carousel-prev'>&lt;</span>");
        this.$next=$("<span class='carousel-next'>&gt;</span>");
        this.defaultSettings={
            selector: document.body,
            imgArr:[],
            speed:1000,
            btnStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings,settings);
    }
    Carousel.prototype.init = function(){
        // 拼装dom结构
        this.$container.append(this.$tabs).append(this.$imgs);
        this.$container.append(this.$next).append(this.$prev);
        for(var i=0;i<this.defaultSettings.imgArr.length;i++){
            var $li = $("<li></li>").html(i+1);
            this.$tabs.append($li);
            var $img=$("<img/>").attr("src",this.defaultSettings.imgArr[i]);
            this.$imgs.append($img);
        }
        if(this.defaultSettings.btnStyle=="circle"){
            $("li",this.$tabs).html("").css({
                borderRadius :"50%"
            });
        }
        this.$prev.addClass(this.defaultSettings.arrowPos);
        this.$next.addClass(this.defaultSettings.arrowPos);
        $("img",this.$imgs).eq(0).addClass("selected")
        $(this.defaultSettings.selector).append(this.$container);
    };
    return Carousel;
});






























































