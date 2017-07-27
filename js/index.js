

$(document).ready(function () {
    //首页，向上滑动，搜索和消息的底部背景慢慢显现，并且一直漂浮在顶部，给body加margin-top
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();//获取当前滑动位置
   
        var top = $(".swiper-container").offset().top;//获取指定位置
       
        if (top < scrollTop) {
         
            $(".idx_head").delay("slow").addClass("active");
        } else {
          
            $(".idx_head").delay("slow").removeClass("active");
            
        }
    })
});