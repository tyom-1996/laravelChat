Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

class Alisa {

    constructor(){



        this.audio;
        this.speak;
        this.finalTranscript = '';
        this.toggleOnData = [];
        this.toggleOffData = [];
        if (localStorage.getItem('switch') == null)
        {
            localStorage.setItem('switch', true)
        }
        this.switch = JSON.parse(localStorage.getItem(('switch')));

    }



    say(text)
    {
        console.log('micrafon off')
        this.recognition.stop()
        this.speak = new Audio('https://code.responsivevoice.org/getvoice.php?t=' + text + '&tl=ru&sv=g1&vn=&pitch=0.5&rate=0.5&vol=1&gender=female');
        this.speak.id = 'id'
        this.speak.play()
    }

    random_answer (array)
    {
        let num = Math.floor(Math.random() * array.length - 1) + 1;
        array[num].answer()
    }

    say(text)
    {
        console.log('micrafon off')
        this.recognition.stop()
        this.speak = new Audio('https://code.responsivevoice.org/getvoice.php?t=' + text + '&tl=ru&sv=g1&vn=&pitch=0.5&rate=0.5&vol=1&gender=female');
        this.speak.id = 'id'
        this.speak.play()
    }

    alisa_test(comands, my_comand)
    {
        this.defoltComands(comands);
        this.command_execution(comands, my_comand);
        this.toggleOn(this.my_comand, my_comand);
        this.toggleOff(this.my_comand, my_comand)
    }


    alisaActionsBlock(){
        $(document).ready(function(){

            $('body').append(`
                <div id="box1" class="box blurred-bg tinted">
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
                    <div class="voice_wave_left"><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span></div>
                    <div class="voice_wave_right"><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span><span class="span" ></span></div>

                    <div class="animation-wrapper">
                        <div class="sphere-animation">
                            <svg class="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
                                <defs>
                                    <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
                                        <stop stop-color="#373734" offset="0%"/>
                                        <stop stop-color="#242423" offset="50%"/>
                                        <stop stop-color="#0D0D0C" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"/>
                                <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"/>
                                <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"/>
                                <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
                                <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"/>
                                <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
                                <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"/>
                                <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"/>
                                <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"/>
                                <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"/>
                                <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"/>
                                <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"/>
                                <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"/>
                                <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"/>
                                <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"/>
                                <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
                                <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"/>
                                <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
                                <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"/>
                                <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"/>
                                <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"/>
                            </svg>
                        </div>
                    </div>

                    </div>
                    
                    
                </div>
            `)

            var offset = $('.box').offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('.boxX').text('x: ' + xPos);
            $('.boxY').text('y: ' + yPos);

        })
    }

    start()
    {

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



    toggleOn(my_comand, toggleOnData)
    {
        for (let i = 0; i < toggleOnData.length; i++) {
            if (toggleOnData[i].question == my_comand) {
                this.say(toggleOnData[i].answer);
                console.log(toggleOnData[i].answer);
                localStorage.setItem('switch', false)
                this.switch = JSON.parse(localStorage.getItem(('switch')));
            }
        }
    }

    toggleOff(my_comand, toggleOffData)
    {
        for (let i = 0; i < toggleOffData.length; i++) {
            if (toggleOffData[i].question == my_comand) {
                this.say(toggleOffData[i].answer);
                console.log(toggleOffData[i].answer);
                localStorage.setItem('switch', true)
                this.switch = localStorage.getItem(('switch'));
            }
        }
    }

    SetComands(comands)
    {

        comands = comands ? comands : {}

        this.defoltComands(comands)

        this.recognition.onresult = (event) => {

            this.interimTranscript = '';

            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {

                this.transcript = event.results[i][0].transcript.toLowerCase();

                if (event.results[i].isFinal) {

                    this.finalTranscript += '\n<br><br>' + this.transcript;
                    this.my_comand = this.transcript;

                    console.log(`Я:${ this.my_comand }`);

                    if (this.switch == false) {
                        this.command_execution(comands, this.my_comand);
                    }

                    this.toggleOn(this.my_comand, this.toggleOnData);
                    this.toggleOff(this.my_comand, this.toggleOffData)

                } else {

                    this.interimTranscript += this.transcript;

                }

            }

            if (this.switch === false) {
                document.getElementById('result').innerHTML = this.finalTranscript.toLocaleLowerCase() + '<hr><i style="color:#ddd;">' + this.interimTranscript + '</>';
                console.log(this.interimTranscript)
            }
        }
    }




    stop()
    {
        this.recognition.stop();
    }

    command_execution(comands, my_comand)
    {
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

                    for (let j = 0; j < this.diff.length; j++ ) {

                        if ( this.diff[j].added != true ) {
                            this.res1 += this.diff[j].value;
                        }
                        if ( this.diff[j].value != '*' ) {
                            this.res2 += this.diff[j].value
                        }
                        if ( this.diff[j].added == true ) {
                            this.data.push(this.diff[j].value)
                        }

                    }

                    if ( this.res2 == my_comand && this.mycomandfirstWord == this.keyfirstWord ) {
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



    defoltComands(comands)
    {

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
        comands['гидеон самоуничтажение||взарви все к черту||взрыв'] = () => {
            this.say('Смерть лиш начало, грязный ты падлец. Увидемся на том свете')
        }
        comands['открой свои настройки||открой настройки||настройки'] = () => {

            let alisaState = !this.switch  ? 'Alisa Onn' : 'Alisa Off';

            if (!$('div').is('.setting-bl')) {
                $('body').append(`
                 <div class="black-bl" style="background-image: url('http://localhost:8000/js/alisa-2.0/img/setting-bg.jpg');
                   background-repeat: no-repeat;background-position: center;background-size: cover;background-position-y: -3px;">
                    <div class="setting-bl" >
                        <div class="setting-header">
                            <div class="setting-logo">
                                <i class="fas fa-microphone-alt"></i>
                                <h2 >VOICE CONTROL</h2>
                            </div>
                            <ul class="setting-nav-menu">
                                <li><a href="">Home</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">${alisaState}</a></li>
                            </ul>
                        </div>
                        <div class="setting-content">
                
                            <div class="column column-1">
                                <div class="left-menu"></div>
                            </div>
                
                            <div class="column column-right">
                
                            </div>
                
                        </div>
                    </div>
                `)
            }

            this.say('дорогой мой,что именно тебе во мне не устраивает')

        }

    }



}
