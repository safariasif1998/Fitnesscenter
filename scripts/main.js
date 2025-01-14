
/* start of change class to nav-button */
$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})
/* end of change class */

/* start of custom-class to nav-menu */
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position>=200){
        $('.navbar-menu').addClass('custom-navbar')
    }
    else{
        $('.navbar-menu').removeClass('custom-navbar')
    }
})
/* end of custom-class  */
/* start from animation of achievements   */
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position>=700){
        $('.achievements-right').addClass("animationRight");
        $('.achievements-left').addClass("animationLeft");
    }
    else{
        $('.achievements-right').removeClass("animationRight");
        $('.achievements-left').removeClass("animationLeft");
    }
})
/* end animation of achievements */
/* gallery */
$('.gallary-list').click(function(){
    let value = $(this).attr("data-filter");
    $(this).addClass("active").siblings().removeClass("active");
    console.log(value);
    if(value==="all"){
        $('.filter').show(300);
    }
    else{
        $('.filter').not("." + value).hide(300);
        $('.filter').filter("." + value).show(300);
    }
})
/* end of gallery */

/* plans und membership */
$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position>=4400){
        $('.card-1').addClass("fromLeft");
        $('.card-2').addClass("fromBottom");
        $('.card-3').addClass("fromRight");
    }
    else{
        $('.card-1').removeClass("fromLeft");
        $('.card-2').removeClass("fromBottom");
        $('.card-3').removeClass("fromRight");
    }
})
/* end of plans und membership */