
    $('#body #banner .reveal li').soChange({
        thumbObj:'#body #banner .point a',
        thumbOverEvent:false,// 关闭鼠标经过thumbObj切换事件，只有点击thumbObj时才切换对象
        thumbNowClass:'curve',
        slideTime:300,//平滑过渡间歇为0，意味着直接切换
        botPrev:'#body #banner .direction .left', // 按钮，上一个
        botNext:'#body #banner .direction .right' // 按钮，下一个
    });
    var timeing;
    $('#header #nav .nav-bar').hover(function () {
        var num = $(this).index();
        clearTimeout(timeing);
        if($('#header .hide-nav ').is(':hidden')){
            $('#header .hide-nav ').slideDown();
        }
        $('#header .hide-nav .item').hide().eq(num).show();
    },function () {
        timeing = setTimeout(function () {
            $('#header .hide-nav').slideUp();
        }, 200);
    });
    $('#header .hide-nav').hover(function () {
        clearTimeout(timeing);
    },function () {
        timeing = setTimeout(function () {
            $('#header .hide-nav').slideUp();
        }, 200);
    });
    $('#body2 .parts .parts-header div div').click(function () {
        $('#body2 .parts .parts-header div div a').removeClass('xuanZhong');
        $(this).addClass('xuanZhong');
        console.log($(this).index());
        $("#body2 .parts .parts-body .parts-right").removeClass('show').hide();
        $("#body2 .parts .parts-body .parts-right").eq($(this).index()).addClass('show').show()
    });
