var JsDiff=function(){function v(e){return{newPos:e.newPos,components:e.components.slice(0)}}function n(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n}var e=function(e){this.ignoreWhitespace=e};e.prototype={diff:function(e,n){if(n===e)return[{value:n}];if(!n)return[{value:e,removed:!0}];if(!e)return[{value:n,added:!0}];n=this.tokenize(n),e=this.tokenize(e);var t=n.length,o=e.length,r=t+o,i=[{newPos:-1,components:[]}],s=this.extractCommon(i[0],n,e,0);if(i[0].newPos+1>=t&&o<=s+1)return i[0].components;for(var u=1;u<=r;u++)for(var l=-1*u;l<=u;l+=2){var d,a=i[l-1],f=i[l+1];s=(f?f.newPos:0)-l,a&&(i[l-1]=void 0);var p=a&&a.newPos+1<t,h=f&&0<=s&&s<o;if(p||h){!p||h&&a.newPos<f.newPos?(d=v(f),this.pushComponent(d.components,e[s],void 0,!0)):((d=v(a)).newPos++,this.pushComponent(d.components,n[d.newPos],!0,void 0));s=this.extractCommon(d,n,e,l);if(d.newPos+1>=t&&o<=s+1)return d.components;i[l]=d}else i[l]=void 0}},pushComponent:function(e,n,t,o){var r=e[e.length-1];r&&r.added===t&&r.removed===o?e[e.length-1]={value:this.join(r.value,n),added:t,removed:o}:e.push({value:n,added:t,removed:o})},extractCommon:function(e,n,t,o){for(var r=n.length,i=t.length,s=e.newPos,u=s-o;s+1<r&&u+1<i&&this.equals(n[s+1],t[u+1]);)s++,u++,this.pushComponent(e.components,n[s],void 0,void 0);return e.newPos=s,u},equals:function(e,n){var t=/\S/;return!(!this.ignoreWhitespace||t.test(e)||t.test(n))||e===n},join:function(e,n){return e+n},tokenize:function(e){return e}};var t=new e,o=new e(!0),r=new e;o.tokenize=r.tokenize=function(e){return n(e.split(/(\s+|\b)/))};var i=new e(!0);i.tokenize=function(e){return n(e.split(/([{}:;,]|\s+)/))};var P=new e;return P.tokenize=function(e){return e.split(/^/m)},{Diff:e,diffChars:function(e,n){return t.diff(e,n)},diffWords:function(e,n){return o.diff(e,n)},diffWordsWithSpace:function(e,n){return r.diff(e,n)},diffLines:function(e,n){return P.diff(e,n)},diffCss:function(e,n){return i.diff(e,n)},createPatch:function(e,n,t,o,r){var i=[];i.push("Index: "+e),i.push("==================================================================="),i.push("--- "+e+(void 0===o?"":"\t"+o)),i.push("+++ "+e+(void 0===r?"":"\t"+r));var s=P.diff(n,t);function u(e){return e.map(function(e){return" "+e})}function l(e,n,t){var o=s[s.length-2],r=n===s.length-2,i=n===s.length-3&&(t.added!==o.added||t.removed!==o.removed);/\n$/.test(t.value)||!r&&!i||e.push("\\ No newline at end of file")}s[s.length-1].value||s.pop(),s.push({value:"",lines:[]});for(var d=0,a=0,f=[],p=1,h=1,v=0;v<s.length;v++){var c=s[v],g=c.lines||c.value.replace(/\n$/,"").split("\n");if(c.lines=g,c.added||c.removed){if(!d){var m=s[v-1];d=p,a=h,m&&(d-=(f=u(m.lines.slice(-4))).length,a-=f.length)}f.push.apply(f,g.map(function(e){return(c.added?"+":"-")+e})),l(f,v,c),c.added?h+=g.length:p+=g.length}else{if(d)if(g.length<=8&&v<s.length-2)f.push.apply(f,u(g));else{var w=Math.min(g.length,4);i.push("@@ -"+d+","+(p-d+w)+" +"+a+","+(h-a+w)+" @@"),i.push.apply(i,f),i.push.apply(i,u(g.slice(0,w))),g.length<=4&&l(i,v,c),a=d=0,f=[]}p+=g.length,h+=g.length}}return i.join("\n")+"\n"},applyPatch:function(e,n){for(var t=n.split("\n"),o=[],r=!1,i=!1,s="I"===t[0][0]?4:0;s<t.length;s++)if("@"===t[s][0]){var u=t[s].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);o.unshift({start:u[3],oldlength:u[2],oldlines:[],newlength:u[4],newlines:[]})}else"+"===t[s][0]?o[0].newlines.push(t[s].substr(1)):"-"===t[s][0]?o[0].oldlines.push(t[s].substr(1)):" "===t[s][0]?(o[0].newlines.push(t[s].substr(1)),o[0].oldlines.push(t[s].substr(1))):"\\"===t[s][0]&&("+"===t[s-1][0]?r=!0:"-"===t[s-1][0]&&(i=!0));var l=e.split("\n");for(s=o.length-1;0<=s;s--){for(var d=o[s],a=0;a<d.oldlength;a++)if(l[d.start-1+a]!==d.oldlines[a])return!1;Array.prototype.splice.apply(l,[d.start-1,+d.oldlength].concat(d.newlines))}if(r)for(;!l[l.length-1];)l.pop();else i&&l.push("");return l.join("\n")},convertChangesToXML:function(e){for(var n,t=[],o=0;o<e.length;o++){var r=e[o];r.added?t.push("<ins>"):r.removed&&t.push("<del>"),t.push((n=r.value,void 0,n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))),r.added?t.push("</ins>"):r.removed&&t.push("</del>")}return t.join("")},convertChangesToDMP:function(e){for(var n,t=[],o=0;o<e.length;o++)n=e[o],t.push([n.added?1:n.removed?-1:0,n.value]);return t}}}();"undefined"!=typeof module&&(module.exports=JsDiff);



Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

class Alisa {

    constructor() {
        this.audio;
        this.speak;
        this.finalTranscript = '';
        this.toggleOnData = [];
        this.toggleOffData = [];
        if (localStorage.getItem('switch') == null) {
            localStorage.setItem('switch', true)
        }
        this.switch = JSON.parse(localStorage.getItem(('switch')));
    }


    say(text) {
        console.log('micrafon off')
        this.recognition.stop()
        this.speak = new Audio('https://code.responsivevoice.org/getvoice.php?t=' + text + '&tl=ru&sv=g1&vn=&pitch=0.5&rate=0.5&vol=1&gender=female');
        this.speak.id = 'id'
        this.speak.play()
    }

    random_answer(array) {
        let num = Math.floor(Math.random() * array.length - 1) + 1;
        array[num].answer()
    }

    say(text) {
        console.log('micrafon off')
        this.recognition.stop()
        this.speak = new Audio(
            `https://code.responsivevoice.org/getvoice.php?t=${text}&tl=ru&sv=g1&vn=&pitch=0.5&rate=0.5&vol=1&gender=female`
        );
        this.speak.id = 'id'
        this.speak.play()
    }

    alisa_test(comands, my_comand) {
        this.defoltComands(comands);
        this.command_execution(comands, my_comand);
        this.toggleOn(this.my_comand, my_comand);
        this.toggleOff(this.my_comand, my_comand)
    }


    alisaActionsBlock() {
        $(document).ready(function() {
            $('body').append(`
                <div id="box1" class="box blurred-bg tinted">
                    <div class="phone-style">
                    
                    </div>
                
                    <div class="setting-bl">
                                                
                    </div>
                    <div class="alisa-box-actions">
                         <div id="rollup" class="alisa-box-actions-item alisa-box-actions-rollup"><i class="far fa-window-minimize"></i></div> <!--свернуть -->
                         <div id="expand" class="alisa-box-actions-item alisa-box-actions-expand"><i class="far fa-window-restore"></i></div>  <!--развернуть -->
                         <div id="close" class="alisa-box-actions-item alisa-box-actions-close"><i class="fas fa-times"></i></div> <!--закрыть-->
                    </div>
                    <div class="alisa-box-bg"></div>
                    <div class="coordinates">
                        <h4 class="boxX"></h4>
                        <h4 class="boxY"></h4>
                    </div>
                    <div class="alisa-box-content">
                        <div class="alisa_text_bl" >
                            <textarea id="alisa_text_bl" class="alisa_text_bl_textarea" ></textarea>
                        </div>

                        <img class="alisa_img" src="http://smartimes.ru/wp-content/uploads/2014/09/assistant.png" >
                        <div id="voice_wave_left" class="voice_wave_left"><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span></div>
                        <div id="voice_wave_right" class="voice_wave_right"><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span></div>
                        <div class="microfon_icon_bl microfon_icon_bl_mini" >
                            <i id="microfon_icon" class="fas fa-microphone-alt"></i>
                        </div>
                    </div>
                </div>
            `);


            if (JSON.parse(localStorage.getItem(('switch'))) == false) {
                $('body').append(`
                    <style class="voice_wave_active_bl" >
                        @keyframes audio-wave {
                            0% {height:5px;transform:translateY(0px);background:#9b59b6;}
                            25% {height:40px;transform:translateY(20px);background:#3498db;}
                            50% {height:5px;transform:translateY(0px);background:#9b59b6;}
                            100% {height:5px;transform:translateY(0px);background:#9b59b6;}
                        }
                    </style>   
                 `);
            } else {
                $('.alisa-box-content').css({
                    'opacity': '0.1'
                })
                $('.microfon_icon_bl').html(`<i class="fas fa-microphone-alt-slash"></i>`)
                $('.voice_wave_left').fadeOut()
                $('.voice_wave_right').fadeOut()
            }

            var offset = $('.box').offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('.boxX').text('x: ' + xPos);
            $('.boxY').text('y: ' + yPos);

        })
    }

    start() {
        this.alisaActionsBlock();
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        this.recognition = new window.SpeechRecognition();
        this.recognition.lang = 'ru-RU';
        this.recognition.maxAlternatives = 1;
        this.recognition.interimResults = true;
        this.recognition.start()

        console.log(this.recognition)

        this.recognition.onend = () => {

            if (screen.width > 600) {
                this.interval = setInterval(() => {
                    if (this.speak) {
                        if (this.speak.playing) {
                            console.log('play')
                        } else {
                            this.recognition.start()
                            console.log('micrafon on')
                            clearInterval(this.interval)
                        }
                    } else {
                        this.recognition.start()
                        console.log('micrafon on')
                        clearInterval(this.interval)
                    }
                }, 100);
            }

        };
    }



    toggleOn(my_comand, toggleOnData) {
        for (let i = 0; i < toggleOnData.length; i++) {
            if (toggleOnData[i].question == my_comand) {
                this.say(toggleOnData[i].answer);
                console.log(toggleOnData[i].answer);
                localStorage.setItem('switch', false)
                this.switch = JSON.parse(localStorage.getItem(('switch')));

                if (!$('style').is('.voice_wave_active_bl')) {
                    $('body').append(`
                        <style class="voice_wave_active_bl" >
                            @keyframes audio-wave {
                                0% {height:5px;transform:translateY(0px);background:#9b59b6;}
                                25% {height:40px;transform:translateY(20px);background:#3498db;}
                                50% {height:5px;transform:translateY(0px);background:#9b59b6;}
                                100% {height:5px;transform:translateY(0px);background:#9b59b6;}
                            }
                        </style>   
                    `)
                }
                $('.microfon_icon_bl').html(`<i class="fas fa-microphone-alt"></i>`)
                $('.voice_wave_left').fadeIn()
                $('.voice_wave_right').fadeIn()

                $('.alisa-box-content').css({
                    'opacity': '1'
                })


            }
        }
    }

    toggleOff(my_comand, toggleOffData) {
        for (let i = 0; i < toggleOffData.length; i++) {
            if (toggleOffData[i].question == my_comand) {
                this.say(toggleOffData[i].answer);
                console.log(toggleOffData[i].answer);
                localStorage.setItem('switch', true)
                this.switch = localStorage.getItem(('switch'));

                $('.voice_wave_active_bl').remove()
                $('#sphere').removeClass('sphere-animation')
                $('.alisa-box-content').css({
                    'opacity': '0.1'
                })

                $('.microfon_icon_bl').html(`<i class="fas fa-microphone-alt-slash"></i>`)
                $('.voice_wave_left').fadeOut()
                $('.voice_wave_right').fadeOut()
            }
        }
    }

    SetComands(comands) {

        comands = comands ? comands : {}
        this.defoltComands(comands)

        this.recognition.onresult = (event) => {

            this.interimTranscript = '';

            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {

                this.transcript = event.results[i][0].transcript.toLowerCase();

                if (event.results[i].isFinal) {
                    // this.finalTranscript += '\n<br><br>' + this.transcript;
                    this.finalTranscript += this.transcript;
                    this.my_comand = this.transcript;

                    console.log(`Я:${ this.my_comand }`);

                    if (this.switch == false) this.command_execution(comands, this.my_comand);
                    this.toggleOn(this.my_comand, this.toggleOnData);
                    this.toggleOff(this.my_comand, this.toggleOffData)

                } else {
                    $('#alisa_text_bl').val('')
                    this.interimTranscript += this.transcript;
                }

            }

            if (this.switch === false) {


                $('#alisa_text_bl').val(
                    this.finalTranscript.toLocaleLowerCase() + this.interimTranscript
                    // this.finalTranscript.toLocaleLowerCase() + '<hr><i style="color:#ddd;">' + this.interimTranscript + '</>'
                )
                // document.getElementById('alisa_text_bl').innerHTML = this.finalTranscript.toLocaleLowerCase() + '<hr><i style="color:#ddd;">' + this.interimTranscript + '</>';
                console.log(this.interimTranscript)
            }
        }
    }




    stop() {
        this.recognition.stop();
    }

    command_execution(comands, my_comand) {
        for (let key in comands) {
            //-----DBOYNAYA KOMANDA------------------
            if (key.indexOf('||') > -1) {
                this.two_comands_arr = key.split('||')
                if (this.two_comands_arr.length > 1) {
                    if (this.two_comands_arr.indexOf(my_comand) != -1) {
                        this.recognition.stop()
                        comands[key]();
                    }
                }
            }
            //-----MANY TAG------------------
            if (key.indexOf('*') > -1) {
                if (key.split('*').length > 1) {
                    this.diff = JsDiff.diffChars(key, my_comand);
                    this.data = []
                    this.res1 = '';
                    this.res2 = '';
                    this.keyfirstWord = key.replace(/ .*/, '');
                    this.mycomandfirstWord = my_comand.replace(/ .*/, '');

                    for (let j = 0; j < this.diff.length; j++) {

                        if (this.diff[j].added != true) {
                            this.res1 += this.diff[j].value;
                        }
                        if (this.diff[j].value != '*') {
                            this.res2 += this.diff[j].value
                        }
                        if (this.diff[j].added == true) {
                            this.data.push(this.diff[j].value)
                        }

                    }

                    if (this.res2 == my_comand && this.mycomandfirstWord == this.keyfirstWord) {
                        this.recognition.stop()
                        comands[key](this.data);
                    }

                } else {

                    continue;

                }
            }
            //-----ODINOCHNAYA KOMANDA------------------
            else {

                if (my_comand == key) {
                    this.recognition.stop()
                    comands[key]();
                }

            }
        }
    }



    defoltComands(comands) {

        comands['перезагрузить||обновить||обнови страницу||обновить страницу||перезагрузи страницу'] = () => {
            this.say('команда принята,обновляю страницу', "Russian Male")
            console.log('команда принята обновляю страницу')
            setTimeout(() => {
                location.reload()
            }, 3000)
        }
        comands['открой новую вкладку||открой новое окно'] = () => {
            window.open('https://www.google.com/')
            this.say('новая вкладка открыта', "Russian Male")
        }

        comands["кто твой создатель"] = () => {
            this.say("Мой создатель, артём арменович")
        }
        comands["начнем"] = () => {
            this.say("чем желаете заняться?")
        }
        comands["перевод слова *"] = (data) => {
            window.open(
                `https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text=${encodeURIComponent(data[0])}`
            )
            this.say(`выполняю перевод слова,${data[0]}`)
        }
        comands["найди в интернете *"] = (data) => {
            if (data.length > 0) {
                window.open(`http://www.google.com/search?q=${encodeURIComponent(data[0])}`)
                alisa.say(`найдены следующие результаты по запросу,${data[0]}`)
            } else {
                alisa.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
            }
        }



        comands['сколько будет * * *'] = (data) => {
            var number_one, number_two, action
            if (data.length == 3) {
                if (data[0] == 'пять' || data[0] == '5') {
                    number_one = '5'
                } else if (data[0] == 'два' || data[0] == '2') {
                    number_one = '2'
                } else {
                    number_one = data[0]
                }
                if (data[2] == 'пять' || data[2] == '5') {
                    number_two = '5'
                } else if (data[2] == 'два' || data[2] == '2') {
                    number_two = '2'
                } else {
                    number_two = data[2]
                }
                if (data[1] == 'x' || data[1] == 'умножить' || data[1] == '*' || data[1] == 'умножить на ') {
                    action = '*';
                } else if (data[1] == 'делить' || data[1] == 'разделить' || data[1] == '/') {
                    action = '/';
                } else if (data[1] == 'плюс' || data[1] == '+') {
                    action = '+';
                } else if (data[1] == 'минус' || data[1] == '-') {
                    action = '-';
                } else {
                    action = '*';
                }
                try {
                    let result = `${number_one} ${action} ${number_two}`.replace(/D/g, '');
                    this.say('результат' + eval(result))
                } catch (err) {
                    this.say('не могли бы вы говорить более четко')
                }
            }
        }
        comands['выйди из сайта'] = () => {
            location.href = '/logout'
        }
        comands['открой свои настройки||открой настройки||настройки'] = () => {

            if (!$('#box1').hasClass('beeg_box')) {
                // let alisaState = !this.switch  ? 'Alisa Onn' : 'Alisa Off';
                $('#box1').addClass('beeg_box')
                $('#box1').removeAttr("style")
                $('.voice_wave_left,.voice_wave_right').hide()
                $('.coordinates').hide()
                $('.alisa_img').hide()

                $('#box1').append(`
                    <div id="box2" class="box " style="width: 259px;right: 15px;height: 102px;bottom: 15px;top: unset;box-shadow: 0 0 transparent;">
                    <div class="alisa-box-bg" style="background: transparent;"></div>
                    <div class="alisa-box-content">
                    <div class="voice_wave_left" style=""><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span></div>
                    <div class="voice_wave_right" style=""><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span><span class="span"></span></div>
                    </div></div>
                `)

                this.say('настройки открыты')
            }


        }

        comands['закрой свои настройки||закрой настройки||закрой'] = () => {

            if ($('#box1').hasClass('beeg_box')) {
                $('#box1').removeClass('beeg_box')
                $('.voice_wave_left,.voice_wave_right,.animation-wrapper').show()
                $('#box2').remove()
                $('.coordinates').show()
                $('.alisa_img').show()

                this.say('настройки закрыты')
            }

        }




    }

}
