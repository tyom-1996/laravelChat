$(document).ready(function(){

    $(document).on('click','.alisa-box-actions-close',function(){
        console.log('close')
        $('#box1').fadeOut()
    })

    $(document).on('click','.alisa-box-actions-expand',function(){
        $('#box1').toggleClass('beeg_box')
    })

    if ( !$('#box1').has('beeg_box')){

        $(".box").draggable({
            width:'300px'
        });
    }

})
