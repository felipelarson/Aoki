$(window).scroll(function(){

    var current_scroll = $(window).scrollTop();

    if( current_scroll > 20 ){
        $('.main-header').addClass('white-header');
    }else{
        $('.main-header').removeClass('white-header');
    }

});

$('.main-menu a').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').stop().animate({scrollTop:top},1000);
});

$('h1').click(function(){
    $('html,body').stop().animate({scrollTop:0},1000);
});

$('.work-thumbs img').click(function(){
    var src = $(this).attr('src');

    $('#work-image').attr('src',src);
    $('#work-window').css('left','0');
});

$('#work-close').click(function(){
    $('#work-window').css('left','-100%');
});

$('#budget-form').on('submit',function(e){

    e.preventDefault();

    var value = $('#price-input').val();

    if( value >= 99 ){
        $('#price3').addClass('best-price');
    }else if(value >= 69){
        $('#price2').addClass('best-price');
    }else{
        $('#price1').addClass('best-price');
    }

    $('#budget-form').fadeOut();
    $('.price-box').css('opacity','1');

});

$('.blog-button').click(function(){

    var this_index = $(this).index();
    var active_index = $('.active-button').index();

    if(this_index != active_index){

        $('.active-button').removeClass('active-button');
        $(this).addClass('active-button');

        $('.blog-post').eq(this_index).css('z-index','1');

        $('.blog-post').eq(this_index).animate({'left':'0'},function(){
            $('.blog-post').eq(active_index).css('left','100%');
            $('.blog-post').eq(this_index).css('z-index','0');
        });

    }

});

$('.contacts-map i').click(function(){

    var index = $(this).index();
    var index2 = $('.active-marker').index();

    $('.active-marker').removeClass('active-marker');
    $(this).addClass('active-marker');

    $('.contact-text').eq(index2).fadeOut(function(){
        $('.contact-text').eq(index).fadeIn();
    });

});
