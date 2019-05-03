$(document).ready(function(){

    $(document).on('click','.alisa-box-actions-close',function(){
        console.log('close')
        $('#box1').fadeOut()
    })

    $(document).on('click','.alisa-box-actions-expand',function(){
        $('#box1').toggleClass('beeg_box')
        $('#box1').removeAttr("style")

    })

    if (!$('#box1').hasClass('beeg_box')){
        $(".box").draggable({
            drag: function() {
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                let screen_width = screen.width-350;
                let screen_height = screen.height-200;
                $('.boxX').text('X : ' + parseInt(xPos));
                $('.boxY').text('Y : ' + parseInt(yPos));
            },
            stop:function(){
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                let screen_width = screen.width-350;
                let screen_height = screen.height-200;

                if (xPos <= 0){
                    $('.box').css('left', '')
                }
                if (xPos >= screen_width){
                    $('.box').css('left', '').css('right', '')
                }
            }
        });
    }
    var num = 0;
    setInterval(function(){
        num--
        $('.sphere-animation').attr("style", "transform:rotate("+num+"deg)!important");
    },50)



    //ALISA VOICE WAVE





    //ALISA MODEL SCRIPT

    function fitElementToParent(el, padding) {
        var timeout = null;
        function resize() {
            if (timeout) clearTimeout(timeout);
            anime.set(el, {scale: 1});
            var pad = padding || 0;
            var parentEl = el.parentNode;
            var elOffsetWidth = el.offsetWidth - 500;
            var parentOffsetWidth = parentEl.offsetWidth - 500;
            var ratio = parentOffsetWidth / elOffsetWidth;
            timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
        }
        resize();
        window.addEventListener('resize', resize);
    }

    var sphereAnimation = (function() {

        var sphereEl = document.querySelector('.sphere-animation');
        var spherePathEls = sphereEl.querySelectorAll('.sphere path');
        var pathLength = spherePathEls.length;
        var hasStarted = false;
        var aimations = [];

        fitElementToParent(sphereEl);

        var breathAnimation = anime({
            begin: function() {
                for (var i = 0; i < pathLength; i++) {
                    aimations.push(anime({
                        targets: spherePathEls[i],
                        stroke: {value: ['#5e7ecc'], duration: 500},
                        translateX: [2, -4],
                        translateY: [2, -4],
                        easing: 'easeOutQuad',
                        autoplay: false
                    }));
                }
            },
            update: function(ins) {
                aimations.forEach(function(animation, i) {
                    var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
                    animation.seek(animation.duration * percent);
                });
            },
            duration: Infinity,
            autoplay: false
        });

        var introAnimation = anime.timeline({
            autoplay: false
        })
            .add({
                targets: spherePathEls,
                strokeDashoffset: {
                    value: [anime.setDashoffset, 0],
                    duration: 3900,
                    easing: 'easeInOutCirc',
                    delay: anime.stagger(10, {direction: 'reverse'})
                },
                duration: 2000,
                delay: anime.stagger(60, {direction: 'reverse'}),
                easing: 'linear'
            }, 0);

        var shadowAnimation = anime({
            targets: '#sphereGradient',
            x1: '25%',
            x2: '25%',
            y1: '0%',
            y2: '75%',
            duration: 30000,
            easing: 'easeOutQuint',
            autoplay: false
        }, 0);

        function init() {
            introAnimation.play();
            breathAnimation.play();
            shadowAnimation.play();
        }

        init();

    })();



})
