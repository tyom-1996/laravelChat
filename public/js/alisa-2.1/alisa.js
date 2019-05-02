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
                         <div class="alisa-box-actions-item alisa-box-actions-rollup"><i class="far fa-window-minimize"></i></div> <!--свернуть -->
                         <div class="alisa-box-actions-item alisa-box-actions-expand"><i class="far fa-window-restore"></i></div>  <!--развернуть -->
                         <div class="alisa-box-actions-item alisa-box-actions-close"><i class="fas fa-times"></i></div> <!--закрыть-->
                    </div>
                    
                    <div class="alisa-box-bg"></div>
                    
                    <div class="alisa-box-content">
                         <h1 style="color:white;">Alisa</h1>
                    </div>
                </div>
            `)
            $(".box").draggable({
                width:'300px'
            });
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
