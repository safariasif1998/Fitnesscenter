
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