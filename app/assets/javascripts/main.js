$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('#header').addClass('black');
        $('#logo').addClass('white');
        $('.navbar-custom').addClass('black');
        //$('a').addClass('black');
    }
    else {
        $('#header').removeClass('black');
        $('#logo').removeClass('white');
        $('.navbar-custom').removeClass('black');
        //$('a').removeClass('black');
    }
});