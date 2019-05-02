$(document).on('click','.login-btn',function(){
    $('.login-bg').fadeIn()
    $('.login-wr').fadeIn()
})
$(document).on('click','.login-bg',function(){
    $(this).fadeOut()
    $('.login-wr').fadeOut()
})

$(document).on('input','.row3-block input',function(){
     $(this).removeClass('error-border')
     $(this).parent().find('.error-bl').removeClass('show_error_bl')
})

$(document).on('change','.row4-block select',function(){
     $(this).removeClass('error-border')
     $(this).parent().find('.error-bl').removeClass('show_error_bl')
})

