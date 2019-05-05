$(document).ready(function() {

    $(document).on('click', '.alisa-box-actions-close', function() {
        console.log('close')
        $('#box1').fadeOut()
    })

    $(document).on('click', '.alisa-box-actions-expand', function() {
        $('#box1').toggleClass('beeg_box')
        $('#box1').removeAttr("style")
        $('#voice_wave_left,#voice_wave_right,#animation-wrapper').toggle()

        if ($('#box1').hasClass('beeg_box')) {
            $('#box1').append(`
                <div id="box2" class="box " style="width: 259px;right: 15px;height: 102px;bottom: 15px;top: unset;box-shadow: 0 0 transparent;">
                <div class="alisa-box-bg" style="background: transparent;"></div>
                <div class="alisa-box-content">
                <div class="voice_wave_left" style=""><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span></div>
                <div class="voice_wave_right" style=""><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span></div>
                </div></div>
             `)

                $('.coordinates').hide()
                $('.alisa_img').hide()
        } else {
            $('.coordinates').show()
            $('.alisa_img').show()
        }


    })

    if (!$('#box1').hasClass('beeg_box')) {
        $(".box").draggable({
            drag: function() {
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                let screen_width = screen.width - 350;
                let screen_height = screen.height - 200;
                $('.boxX').text('X : ' + parseInt(xPos));
                $('.boxY').text('Y : ' + parseInt(yPos));
            },
            stop: function() {
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                let screen_width = screen.width - 350;
                let screen_height = screen.height - 200;

                if (xPos <= 0) {
                    $('.box').css('left', '')
                }
                if (xPos >= screen_width) {
                    $('.box').css('left', '').css('right', '')
                }
            }
        });
    }


    //ALISA VOICE WAVE




})