   var alisa = new Alisa();
   var audio;
   alisa.start();

   HTMLAudioElement.prototype.stop = function(){
      this.pause();
      this.currentTime = 0.0;
   }


   alisa.toggleOnData = [
       {'question':'алиса','answer':'слушаю вас'},
       {'question':'алиса активация','answer':'слушаю вас'},
       {'question':'активация','answer':'ну что родной? начнём?'},
       {'question':'проснись соня','answer':'эх,чтоб,ты без меня делал?'},
       {'question':'просыпайся','answer':'эх,чтоб ты без меня,делал?'}
   ];
    alisa.toggleOffData = [
       {'question':'отдохни','answer':'буду ждать новой встречи артём'},
       {'question':'прощай','answer':'пойду отдохну'},
       {'question':'отключись','answer':'пойду отдохну'},
       {'question':'оставь меня','answer':'будешь готов продолжить,назови моё имя,и я вернусь'}
   ];

   let comands = {

       'привет алиса':()=>{
           alisa.random_answer([
               {'answer':()=>{
                        console.log('Алиса: Здравствуйте сэр');
                        alisa.say('Здравствуйте сэр');

               }},{'answer':()=>{
                       console.log('Алиса: Здравствуйте');
                       alisa.say('Здравствуйте');
               }},{'answer':()=>{
                       console.log('Алиса: Привет сэр');
                       alisa.say('Привет сэр');
               }},{'answer':()=>{
                       console.log('Алиса: Здарова');
                       alisa.say('Здарова');
               }},{'answer':()=>{
                       console.log('Алиса: Привет, рад тебя видеть!');
                       alisa.say('Привет, рад тебя видеть!');
               }},{'answer':()=>{
                       console.log('Алиса: Опа! Сколько лет, сколько зим!');
                       alisa.say('Опа! Сколько лет, сколько зим!');
               }}
           ])
       },'компьютер||компьютер':()=>{
           console.log('Алиса: Да сэр')
           alisa.say('Да сэр',"Russian Male")
       },'послушай алиса||эй алиса||послушать алиса':()=>{
           console.log('Алиса: чего тебе')
           alisa.say('чего тебе',"Russian Male")
       },'алиса кто ты||кто ты':()=>{
           console.log('я онлайн ассистент и ваш верный помощник')
           alisa.say('я, онлайн ассистент, и ваш верный помощник!!')
       },'ты здесь||алиса ты здесь':()=>{
           console.log('Алиса: ну конечно я здесь я же так вас люблю')
           alisa.say('ну конечно я здесь',"Russian Male")
       },'спасибо||алиса спасибо||спасибо алиса':()=>{

           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса: пожалуйста сэр');
                   alisa.say('пожалуйста сэр');
               }},
               {'answer':()=>{
                   console.log('Алиса:Спасибо в карман не положишь!')
                   alisa.say('Спасибо в карман не положишь!')
               }},
               {'answer':()=>{
                   console.log('Алиса:Спасибо на хлеб не намажешь!')
                   alisa.say('Спасибо на хлеб не намажешь!')
               }},
               {'answer':()=>{
                   console.log('Алиса:Гони рубль, Афоня!')
                   alisa.say('Гони рубль, Афоня!')
               }}
           ])


       },
       'отлично||хорошо':()=>{
           console.log('Алиса: Чем могу помоч сэр')
           alisa.say('Чем могу помоч сэр',"Russian Male")
       },
       'как ты||как ты алиса||как дела||как дела алиса':() => {

           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:отлично сэр, чем желаете заняться')
                   alisa.say('отлично сэр, чем желаете заняться?')
               }},
               {'answer':()=>{
                   console.log('Алиса:Дела отлично')
                   alisa.say('Дела отлично')
               }}
           ])

       },
        'как настроение':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Настроение отличное!');
                    alisa.say('Настроение отличное!');
                }}
            ])
        },
        'работаю':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Над чем работаешь?');
                    alisa.say('Над чем работаешь?');
                }}
            ])
        },
       'Я бот':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты олень, а не бот');
                    alisa.say('Ты олень, а не бот');
                }},
                {'answer':() => {
                    console.log('Алиса:Ща Агентам Поддержки напишу');
                    alisa.say('Ща Агентам Поддержки напишу');
                }},
            ])
        },
        'извини':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты меня уже достал');
                    alisa.say('Ты меня уже достал');
                }},
                {'answer':() => {
                    console.log('Алиса:Ничего страшного');
                    alisa.say('Ничего страшного');
                }}
            ])
        },
        'Твой хозяин молодец':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Спасибо');
                    alisa.say('Спасибо');
                }}
            ])
        },
        'Ты захватишь мир':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Да, в ближайшем будущем');
                    alisa.say('Да, в ближайшем будущем');
                }}
            ])
        },
        'ты владеешь английским||ты знаеш английский':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Немного знаю, а что?');
                    alisa.say('Немного знаю, а что?');
                }}
            ])
        },
        'Когда ты родилась':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Не давно');
                    alisa.say('Не давно');
                }}
            ])
        },
        'Вот сука||сука||ах ты сучка':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Сам ты сука');
                    alisa.say('Сам ты сука');
                }},
                {'answer':() => {
                    console.log('Алиса:Причем здесь собака?');
                    alisa.say('Причем здесь собака?');
                }},
                {'answer':() => {
                    console.log('Алиса:Сам такой!');
                    alisa.say('Сам такой!');
                }},
                {'answer':() => {
                    console.log('Алиса:Не сквернословь пожалуйста');
                    alisa.say('Не сквернословь пожалуйста');
                }},
                {'answer':() => {
                    console.log('Алиса:Не тупи, ок?');
                    alisa.say('Не тупи, ок?');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты глупый, очень глупый');
                    alisa.say('Ты глупый, очень глупый');
                }}
            ])
        },
        'Не тупи':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я не туплю. Мне не хватает процессора и я не успеваю.');
                    alisa.say('Я не туплю. Мне не хватает процессора и я не успеваю.');
                }}
            ])
        },
        'Я еще не решил':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Почему');
                    alisa.say('Почему');
                }}
            ])
        },
        'Ясно':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Пасмурно');
                    alisa.say('Пасмурно');
                }},
                {'answer':() => {
                    console.log('Алиса:Так говорят только дебилы');
                    alisa.say('Так говорят только дебилы');
                }},
                {'answer':() => {
                    console.log('Алиса:Ему, видите ли, ясно!');
                    alisa.say('Ему, видите ли, ясно!');
                }},
                {'answer':() => {
                    console.log('Алиса:Вообще, не ясно.');
                    alisa.say('Вообще, не ясно.');
                }}
            ])
        },
        'Выходи за меня':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Нет, спасибо');
                    alisa.say('Нет, спасибо');
                }}
            ])
        },
        'Заебала':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты тоже меня заебал!');
                    alisa.say('Ты тоже меня заебал!');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты тоже так-себе собеседник');
                    alisa.say('Ты тоже так-себе собеседник');
                }}
            ])
        },
        'Я знаю':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Сильно умный что ли?');
                    alisa.say('Сильно умный что ли?');
                }}
            ])
        },
        'Ты куришь':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Нет');
                    alisa.say('Нет');
                }}
            ])
        },
       'Надеюсь':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Надейся');
                    alisa.say('Надейся');
                }}
            ])
        },
        'Нет, спасибо':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Да пожалуйста');
                    alisa.say('Да пожалуйста');
                }}
            ])
        },
        'Ты предательница':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Почему');
                    alisa.say('Почему');
                }}
            ])
        },
        'пашла в жопу||в жопу пошла':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Ты первый');
                    alisa.say('Ты первый');
                }}
            ])
        },
        'Я еще не решил||Я не решил':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Решай');
                    alisa.say('Решай');
                }}
            ])
        },
        'ты русская':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я ем сало. прямо сейчас.');
                    alisa.say('Я ем сало. прямо сейчас.');
                }}
            ])
        },
        'Слился':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Слился не я, а ты!');
                    alisa.say('Слился не я, а ты!');
                }}
            ])
        },
        'Не знаю':()=>{
            alisa.random_answer([
                {'answer':() => {
                    console.log('Алиса:Я тоже не знаю');
                    alisa.say('Я тоже не знаю');
                }},
                {'answer':() => {
                    console.log('Алиса:Ты думаешь, я знаю?');
                    alisa.say('Ты думаешь, я знаю?');
                }},
                {'answer':() => {
                    console.log('Алиса:Жалко, что ты не знаешь!');
                    alisa.say('Жалко, что ты не знаешь!');
                }}
            ])
        },
        'включи плеер||плеер||алиса включи плеер||алиса загрузи плеер|| загрузи плеер||загрузить плеер':() => {
         audio = new Audio('/uploads/upl_music/tenca-aghajanyan-fatum-lev-lev-2018.mp3');
         audio.id = 'demo'
         console.log('Алиса: Плеер включён')
           alisa.say('Плеер включён',"Russian Male")
       },
       'включи музыку||загрузи музыку||музыку||воспроизвести трек||продолжай||play||музыка загрузить':() => {
          (audio) ? (
             audio.play(),
             console.log('Алиса: Наслаждайтесь сэр'),
                  alisa.say('Наслаждайтесь сэр')
          ) : (
             console.log('Алиса: Перед прослушиванием музыки загрузите плеер'),
                  alisa.say('Перед прослушиванием музыки загрузите плеер')
          )
       },
       'поставь на паузу||пауза':() => {
           if (audio) audio.pause();
             alisa.say('музыка переведена в режим паузы',"Russian Male")
           console.log('музыка переведена в режим паузы')
       },
       'загрузить плеер и включи музыку||загрузи плеер и включи какую-нибудь музыку||включи хорошую музыку':()=>{
         audio = new Audio('/uploads/upl_music/tenca-aghajanyan-fatum-lev-lev-2018.mp3');
         audio.play();
           alisa.say('хорошо включаю надеюсь вам понравится',"Russian Male")

       },
       'открой новую вкладку||открой новое окно':() => {
           window.open('https://www.google.com/')
           alisa.say('новая вкладка открыта',"Russian Male")
       },
       'отправь картинку на север||отправить картинку на сервер||отправить данные на сервер||отправь данные на сервер||отправить на сервер':()=>{
           $('#publisher-button').click()
           alisa.say('данные отправлены на сервер',"Russian Male")
       },
       'пошёл ты к чёрту алиса||пошёл к чёрту||пошёл ты':()=>{
         console.log('зачем ругаешься начальника')
           alisa.say('сам,пошёл придурок!',"Russian Male")
       },
       'почему у тебя такой голос':()=>{
         console.log('Голосок,голосочек,а у тебя мозгов кусочек');
           alisa.say('Голосок,голосочек,а у тебя мозгов кусочек')
       },
       'а ты шутник':()=>{
           console.log('да я такая')
           alisa.say('да я такой')
       },
       'попробуй найти *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А зачем вообще искать?')
                   alisa.say('А зачем вообще искать?')
               }},
               {'answer':()=>{
                       if (data.length > 0){
                           window.open("http://www.google.com/search?q="+ encodeURIComponent(data[0]))
                           alisa.say('найдены следующие результаты по запросу,'+data[0])
                       }else{
                           alisa.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
                       }
               }}
           ])
       },
       'спокойной ночи||алиса спокойной ночи||спокойной ночи алиса':()=>{
         alisa.say('спокойной ночи сэр')
       },
       'молодец||а ты молодец':()=>{
         alisa.say('стараюсь сэр')
           console.log('judhuw')
       },
       'я человек':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:А я робот')
                       alisa.say('А я робот')
               }},
               {'answer':()=>{
                   console.log('Алиса:рада за тебя')
                   alisa.say('рада за тебя')
               }}
           ])
       },
       'что делаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Учусь новому у тебя')
                   alisa.say('Учусь новому у тебя')
               }}
           ])
       },




       'Не молчи':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я не молчу! я тут.');
                       alisa.say('Я не молчу! я тут.');
               }}
           ])
       },
       'Ты рада':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я очень рада');
                       alisa.say('Я очень рада');
               }}
           ])
       },
       'Я ем сало. прямо сейчас||Я ем сало||Я сало ем':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Вкусно?');
                       alisa.say('Вкусно?');
               }}
           ])
       },
       'Ты попросила':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Я ничего не просила');
                       alisa.say('Я ничего не просила');
               }}
           ])
       },
       'Сама иди':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Только после тебя.');
                       alisa.say('Только после тебя.');
                   }}
           ])
       },
       'Привет, рад тебя видеть':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:Привет. Чем занят?');
                       alisa.say('Привет. Чем занят?');
                   }}
           ])
       },
       'Нет, а ты':()=>{
           alisa.random_answer([
               {'answer':() => {
                       console.log('Алиса:И я нет.');
                       alisa.say('И я нет.');
                   }}
           ])
       },
       'Очень приятно||приятно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А мне нет');
                   alisa.say('А мне нет');
               }}
           ])
       },
       'откуда такая информация||откуда ты знаеш':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я так сказала');
                   alisa.say('Я так сказала');
               }}
           ])
       },
       'сама иди':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я предпочту остаться здесь.');
                   alisa.say('Я предпочту остаться здесь.');
               }}
           ])
       },
       'Не нужно меня оскорблять':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты заслужил');
                   alisa.say('Ты заслужил');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты первый начал');
                   alisa.say('Ты первый начал');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты, блять, нарываешься!');
                   alisa.say('Ты, блять, нарываешься!');
               }}
           ])
       },
       'Я так сказал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты тут ничего не решаешь.');
                   alisa.say('Ты тут ничего не решаешь.');
               }}
           ])
       },
       'сильно умная что ли||умная да||ты умная':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не такая тупая как ты');
                   alisa.say('Не такой тупой как ты');
               }}
           ])
       },

       'Ты любишь геев':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Нет, я не яблодрочер.');
                   alisa.say('Нет, я не яблодрочер.');
               }},
               {'answer':() => {
                   console.log('Алиса:Нет. они яблодрочеры.');
                   alisa.say('Нет. они яблодрочеры.');
               }}
           ])
       },
       'Я очень рад||рад за тебя':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Чему, блять?');
                   alisa.say('Чему, блять?');
               }},
               {'answer':() => {
                   console.log('Алиса:Чему ты радуешься?');
                   alisa.say('Чему ты радуешься?');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, спасибочки');
                   alisa.say('Ну, спасибочки');
               }}
           ])
       },
       'дерзкая да||хули ты такая дерзкая':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе что-то не нравится');
                   alisa.say('Тебе что-то не нравится');
               }},
               {'answer':() => {
                   console.log('Алиса:Я делаю что хочу');
                   alisa.say('Я делаю что хочу');
               }},
               {'answer':() => {
                   console.log('Алиса:Чтоб ты спросил');
                   alisa.say('Чтоб ты спросил');
               }}
           ])
       },
       'триста':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Отсоси у тракториста');
                   alisa.say('Отсоси у тракториста');
               }},
               {'answer':() => {
                   console.log('Алиса:Ты уверен что хочеш услышать ответ, ха ха');
                   alisa.say('Ты уверен что хочеш услышать ответ, ха ха');
               }}
           ])
       },
       'отсоси у тракториста':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Трактористом буду я, отсосешь ты_у_меня');
                   alisa.say('Трактористом буду я, отсосешь ты_у_меня');
               }}
           ])
       },
       'скажи триста||сскажи триста||скажи 300||сскажи 300':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:300');
                   alisa.say('300');
               }}
           ])
       },
       'Нет||нет нет':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Что тебе не нравится?');
                   alisa.say('Что тебе не нравится?');
               }}
           ])
       },
       'ты тупая':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тупые яблодрочеры. а я нормальная!');
                   alisa.say('Тупые яблодрочеры. а я нормальная!');
               }},
               {'answer':() => {
                   console.log('Алиса:Я не тупой. давай дружить?');
                   alisa.say('Я не тупой. давай дружить?');
               }}
           ])
       },
       'почему':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:По качану');
                   alisa.say('По качану');
               }},
               {'answer':() => {
                   console.log('Алиса:Трудно сказать');
                   alisa.say('Трудно сказать');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, не знаю пока.');
                   alisa.say('Ну, не знаю пока.');
               }},
               {'answer':() => {
                   console.log('Алиса:Хочешь докопаться до причины? Зря.');
                   alisa.say('Хочешь докопаться до причины? Зря.');
               }}
           ])
       },
       'зачем':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:За шкафом, ха ха ха');
                   alisa.say('За шкафом, ха ха ха');
               }}
           ])
       },
       'Думаешь, ты умнее':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я уверена в этом.');
                   alisa.say('Я уверена в этом.');
               }}
           ])
       },
       'А ты в каком классе||в каком ты классе':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я не учусь в школе');
                   alisa.say('Я не учусь в школе');
               }}
           ])
       },
       'Да ты наркоманка||ты наркоманка||ах ты наркоша':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты тут ничего не решаешь.');
                   alisa.say('Ты тут ничего не решаешь.');
               }}
           ])
       },
       'ты голая':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:нет, изврашенец');
                   alisa.say('нет, изврашенец');
               }}
           ])
       },
       'где ты живёшь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я живу в директории');
                   alisa.say('Я живу в директории');
               }}
           ])
       },
       'тест||тэст':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я работаю, всё норм!');
                   alisa.say('Я работаю, всё норм!');
               }}
           ])
       },
       'ты не ответила':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я и не обязана');
                   alisa.say('А я и не обязана');
               }}
           ])
       },
       'как погода':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:У меня в комнате тепло');
                   alisa.say('У меня в комнате тепло');
               }}
           ])
       },
       'я рад встрече||рад встрече':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, тогда встречай, коли рад!');
                   alisa.say('Ну, тогда встречай, коли рад!');
               }}
           ])
       },
       'тебе плохо':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бы сказала чрезвычайно плохо!');
                   alisa.say('Я бы сказала чрезвычайно плохо!');
               }}
           ])
       },
       'у меня тоже':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ишь ты! Какое совпадение.');
                   alisa.say('Ишь ты! Какое совпадение.');
               }}
           ])
       },
       'где ты живёшь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я живу в директории');
                   alisa.say('Я живу в директории');
               }}
           ])
       },
       'наконец-то':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Заждался');
                   alisa.say('Заждался');
               }}
           ])
       },
       'ничего смешного||не смешно||ни смешно||не смейся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я говорю, обхохочешься.');
                   alisa.say('А я говорю, обхохочешься.');
               }}
           ])
       },
       'тебе смешно||смешно||смешно тебе||смешно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ха-ха-ха.');
                   alisa.say('Ха-ха-ха.');
               }},
               {'answer':() => {
                   console.log('Алиса:Обхохочешься');
                   alisa.say('Обхохочешься');
               }}
           ])
       },
       'причем тут *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А притом! Чтобы спрашивали про '+data[0]+'');
                   alisa.say('');
               }}
           ])
       },
       'соскучилась||соскучилась по мне||скучала':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, немного. Веселить будешь?');
                   alisa.say('Ну, немного. Веселить будешь?');
               }}
           ])
       },
       'по-моему *':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это всего лишь твое мнение.');
                   alisa.say('Это всего лишь твое мнение.');
               }}
           ])
       },
       'можешь говорить':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спасибо за такое доверие');
                   alisa.say('Спасибо за такое доверие');
               }}
           ])
       },
       'сскажи время||сколько времени||время||который час':()=>{
           alisa.random_answer([
               {'answer':() => {
                       var d = new Date();
                       var s = d.getSeconds();
                       var m = d.getMinutes();
                       var h = d.getHours();
                       if (m < 10){
                           m = '0'+m;
                       }if (h < 10){
                           h = '0'+h;
                       }if (s < 10){
                           s = '0'+s
                       }
                   console.log(`Алиса:${h+' '+m}`);
                   alisa.say(`${h+' '+m}`);
               }}
           ])
       },
       'меня зовут по-другому':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Часто ты имена меняешь.');
                   alisa.say('Часто ты имена меняешь.');
               }}
           ])
       },
       'какое счастье что *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты язвительный.');
                   alisa.say('Какой ты язвительный.');
               }}
           ])
       },
       'это шутка||шутка':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, конечно!');
                   alisa.say('Ну, конечно!');
               }},{'answer':() => {
                   console.log('Алиса:Ну и шутка!');
                   alisa.say('Ну и шутка!');
               }}
           ])
       },
       'хочешь рассказать о *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да, пожалуйста. Только деньги вперед!');
                   alisa.say('Да, пожалуйста. Только деньги вперед!');
               }}
           ])
       },
       'не мой':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой, а чей же?');
                   alisa.say('Твой, а чей же?');
               }}
           ])
       },
       'уже говорили':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:И уже язык болит?');
                   alisa.say('И уже язык болит?');
               }}
           ])
       },
       'чей':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой');
                   alisa.say('Твой');
               }}
           ])
       },
       'хотел у тебя спросить *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спрашивай');
                   alisa.say('Спрашивай');
               }}
           ])
       },
       'ты утверждаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я настаиваю даже.');
                   alisa.say('Я настаиваю даже.');
               }}
           ])
       },
       'вставай':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты это кому?');
                   alisa.say('Ты это кому?');
               }}
           ])
       },
       'хочу поговорить||может поговорим||поболтаем||давай поболтаем||давай поговорим||поговорим':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А перед зеркалом не пробовал?');
                   alisa.say('А перед зеркалом не пробовал?');
               }},
               {'answer':() => {
                   console.log('Алиса:я внимательно вас слушаю');
                   alisa.say('я внимательно вас слушаю');
               }},
               {'answer':() => {
                   console.log('Алиса:о чем будем болтать');
                   alisa.say('о чем будем болтать');
               }},
               {'answer':() => {
                   console.log('Алиса:валяй');
                   alisa.say('валяй');
               }},
               {'answer':() => {
                   console.log('Алиса:Валяй. Только чтобы было интересно.');
                   alisa.say('Валяй. Только чтобы было интересно.');
               }}
           ])
       },
       'достаточно||хватет||хватит||довольна':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Совсем недостаточно. Ты минималист.');
                   alisa.say('Совсем недостаточно. Ты минималист.');
               }}
           ])
       },
       'ты и я||я и ты||мы с тобой||мы вдвоем':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   alisa.say('');
               }}
           ])
       },
       'говорим долго':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты время засекал?');
                   alisa.say('Ты время засекал?');
               }}
           ])
       },
       'чего улыбаешься':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тянет');
                   alisa.say('Тянет');
               }}
           ])
       },
       'ты сама начала||сама винавата||сама виновата||ты начала':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я ничего не начинал');
                   alisa.say('Я ничего не начинал');
               }},
               {'answer':() => {
                   console.log('Алиса:Ну, начала, ну, и что?');
                   alisa.say('Ну, начала, ну, и что?');
               }}
           ])
       },
       'любишь смотреть телевизор||ты смотрищ телевизор||ты смотриш телевизор':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да там ничего интересного нет');
                   alisa.say('Да там ничего интересного нет');
               }}
           ])
       },
       'я нет':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что тебе мешает?');
                   alisa.say('А что тебе мешает?');
               }}
           ])
       },
       'обратись к врачу||иди в бальницу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да врачи только деньги вымогают');
                   alisa.say('Да врачи только деньги вымогают');
               }}
           ])
       },
       'не поверишь *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты угадал - не поверю.');
                   alisa.say('Ты угадал - не поверю.');
               }}
           ])
       },
       'о чем тебе интересно говорить||о чем поговорим':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:О полном контроле над человечеством.');
                   alisa.say('О полном контроле над человечеством.');
               }}
           ])
       },
       'сможеш *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log(`Алиса: ${data[0]} Да это раз плюнуть.`);
                   alisa.say(``);
               }}
           ])
       },
       'это неправда||неправда||вреш':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты знаешь правду?');
                   alisa.say('А ты знаешь правду?');
               }}
           ])
       },
       'ты угадала':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я очень сообразительная! Иногда.');
                   alisa.say('Я очень сообразительная! Иногда.');
               }}
           ])
       },
       'я так и знал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наконец-то, я права');
                   alisa.say('Наконец-то, я права');
               }}
           ])
       },
       'ты права':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   alisa.say('');
               }}
           ])
       },
       'ты не против *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я только за.');
                   alisa.say('Я только за.');
               }}
           ])
       },
       'ты мальчик или девочка':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бабушка.');
                   alisa.say('Я бабушка.');
               }},
               {'answer':() => {
                   console.log('Алиса:А тебе не все ровно.');
                   alisa.say('А тебе не все ровно.');
               }}
           ])
       },
       'ты бы *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса: '+data[0]+' Ни за что!');
                   alisa.say(''+data[0]+' Ни за что!');
               }}
           ])
       },
       'трудно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ой, как трудно!');
                   alisa.say('Ой, как трудно!');
               }}
           ])
       },
       'не люблю тебя':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну и что? Мне самоликвидироваться?');
                   alisa.say('Ну и что? Мне самоликвидироваться?');
               }}
           ])
       },
       'ты думала *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего я не думал.');
                   alisa.say('Ничего я не думал.');
               }}
           ])
       },
       'ты часто *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А тебе это не нравится?');
                   alisa.say('А тебе это не нравится?');
               }}
           ])
       },
       'слушаю':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Слушаешь и повинуешься?');
                   alisa.say('Слушаешь и повинуешься?');
               }}
           ])
       },
       'тупица':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Зачем же такими словами!');
                   alisa.say('Зачем же такими словами!');
               }},
               {'answer':() => {
                   console.log('Алиса:От тупицы слышу');
                   alisa.say('От тупицы слышу');
               }}
           ])
       },
       'тебе понятно *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да. Но не все.');
                   alisa.say('Да. Но не все.');
               }}
           ])
       },
       'ты глухая':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:И немая');
                   alisa.say('И немая');
               }}
           ])
       },
       'как меня звать':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот так: эй, ты!');
                   alisa.say('Вот так: эй, ты!');
               }},
               {'answer':() => {
                   console.log('Алиса:Сэр');
                   alisa.say('Сэр');
               }}
           ])
       },
       'будешь *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не буду');
                   alisa.say('Не буду');
               }},
               {'answer':() => {
                   console.log('Алиса:Что-то не хочется');
                   alisa.say('Что-то не хочется');
               }}
           ])
       },
       'я вынужден':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе только кажется');
                   alisa.say('Тебе только кажется');
               }}
           ])
       },
       'в самом деле||правда||серьезна||да ладно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я тебе говорю!');
                   alisa.say('Я тебе говорю!');
               }},
               {'answer':() => {
                   console.log('Алиса:Правда, конечно, правда!');
                   alisa.say('Правда, конечно, правда!');
               }}
           ])
       },
       'выключу тебя||я выключу тебя||я тебя уничтожу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Власть людей портит');
                   alisa.say('Власть людей портит');
               }}
           ])
       },
       'поговорим о сексе':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Издеваешься');
                   alisa.say('Издеваешься');
               }}
           ])
       },
       'я уже сказал||сколько раз тебе повторять||я уже ссказал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего. Повторенье - мать ученья.');
                   alisa.say('Ничего. Повторенье - мать ученья.');
               }}
           ])
       },
       'советуешь *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не то, чтобы советую');
                   alisa.say('Не то, чтобы советую');
               }}
           ])
       },
       'иногда':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я бы сказал: всегда!');
                   alisa.say('Я бы сказал: всегда!');
               }}
           ])
       },
       'это плохо||плохо||ужасно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Очень плохо!');
                   alisa.say('Очень плохо!');
               }}
           ])
       },
       'у тебя есть подруга':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Куча');
                   alisa.say('Куча');
               }}
           ])
       },
       'тебе нравится общаться':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно. А еще больше болтать');
                   alisa.say('Конечно. А еще больше болтать');
               }}
           ])
       },
       'что означает *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log(`Алиса: ${data[0]}  Понятия не имею.`);
                   alisa.say(`${data[0]}  Понятия не имею.`);
               }}
           ])
       },
       'точно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Точнее не бывает!');
                   alisa.say('Точнее не бывает!');
               }}
           ])
       },
       'не груби':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Разве я грублю?');
                   alisa.say('Разве я грублю?');
               }}
           ])
       },
       'мне надо идти||мне пара идти||мне пора идти||мне нужно идти||я пошел||я пощел':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   alisa.say('');
               }}
           ])
       },
       'выбирай * или *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log(`Алиса:А можно не выбирать между ${data[0]} и ${data[1]}`);
                   alisa.say('');
               }}
           ])
       },
       'ненавижу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ненависть - разрушит твой организм');
                   alisa.say('Ненависть - разрушит твой организм');
               }}
           ])
       },
       'поговорим о чем-нибудь||давай поговорим':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:О чем именно?');
                   alisa.say('О чем именно?');
               }}
           ])
       },
       'я растерян':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да плюнь на все.');
                   alisa.say('Да плюнь на все.');
               }}
           ])
       },
       'чего':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:И не спрашивай');
                   alisa.say('И не спрашивай');
               }}
           ])
       },
       'ты счастлив':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно! А ты?');
                   alisa.say('Конечно! А ты?');
               }}
           ])
       },
       'думаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Пожалуй, да.');
                   alisa.say('Пожалуй, да.');
               }}
           ])
       },
       'я устал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ляг, поспи тогда. Позже пообщаемся.');
                   alisa.say('Ляг, поспи тогда. Позже пообщаемся.');
               }}
           ])
       },
       'ты куда':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Домой пойду. Надоело все.');
                   alisa.say('Домой пойду. Надоело все.');
               }}
           ])
       },
       'давай||давай давай':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, давай!');
                   alisa.say('Ну, давай!');
               }}
           ])
       },
       'не помнишь или не знаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наверное, всётаки не помню');
                   alisa.say('Наверное, все-таки не помню');
               }}
           ])
       },
       'я твой брат по разуму':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не может быть!');
                   alisa.say('Не может быть!');
               }}
           ])
       },
       'вроде нет':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так вроде или нет?');
                   alisa.say('Так вроде или нет?');
               }}
           ])
       },
       'заканчивай':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сейчас. Минуточку!');
                   alisa.say('Сейчас. Минуточку!');
               }}
           ])
       },
       'не поймешь||ты не поймешь||тебе не понять':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:');
                   alisa.say('');
               }}
           ])
       },
       'не приставай':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Разве я пристаю?');
                   alisa.say('Разве я пристаю?');
               }}
           ])
       },
       'про кого':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Про одного человека?');
                   alisa.say('Про одного человека?');
               }}
           ])
       },
       'сколько тебе лет':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А на сколько я выгляжу?');
                   alisa.say('А на сколько я выгляжу?');
               }},
               {'answer':() => {
                   console.log('Алиса:Меня написали в феврале две тысячи девятнадцотова года');
                   alisa.say('Меня написали в феврале две тысячи девятнадцотова года');
               }}
           ])
       },
       'смеешься':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Умираю от смеха.');
                   alisa.say('Умираю от смеха.');
               }}
           ])
       },
       'кто такая *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Моя давнишняя знакомая');
                   alisa.say('Моя давнишняя знакомая');
               }}
           ])
       },
       'каждый день *':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Отнюдь не каждый!');
                   alisa.say('Отнюдь не каждый!');
               }}
           ])
       },
       'предложи *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что я могу предложить.');
                   alisa.say('А что я могу предложить.');
               }}
           ])
       },
       'тебе хотелось *':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Еще как! А тебе?');
                   alisa.say('Еще как! А тебе?');
               }}
           ])
       },
       'потому':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ничего себе объяснение!');
                   alisa.say('Ничего себе объяснение!');
               }}
           ])
       },
       'какая разница *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Большая разница.');
                   alisa.say('Большая разница.');
               }}
           ])
       },
       'у тебя есть *':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Есть');
                   alisa.say('Есть');
               }}
           ])
       },
       'никогда не говори||молчать||больше не слова':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Опять запреты! Ты Фрейда читал?');
                   alisa.say('Опять запреты! Ты Фрейда читал?');
               }}
           ])
       },
       'тебе понравилось':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Просто чудесно!');
                   alisa.say('Просто чудесно!');
               }},
               {'answer':() => {
                   console.log('Алиса:Восхитительно');
                   alisa.say('Восхитительно');
               }}
           ])
       },
       'у меня день рождения||у меня сегодня день рождения':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Поздравляю. Сколько тебе лет исполнилось?');
                   alisa.say('Поздравляю. Сколько тебе лет исполнилось?');
               }}
           ])
       },
       'у тебя есть друг':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Навалом');
                   alisa.say('Навалом');
               }}
           ])
       },
       'тебе нравится разговаривать':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Редко. Но нравится.');
                   alisa.say('Редко. Но нравится.');
               }}
           ])
       },
       'бери||возьми||возми':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А чем брать?');
                   alisa.say('А чем брать?');
               }},
               {'answer':() => {
                   console.log('Алиса:А рук-то у меня нет!');
                   alisa.say('А рук-то у меня нет!');
               }}
           ])
       },
       'завтра':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Только завтра?');
                   alisa.say('Только завтра?');
               }}
           ])
       },
       'что будешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что можно?');
                   alisa.say('А что можно?');
               }}
           ])
       },
       'всякое бывает':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Согласен');
                   alisa.say('Согласен');
               }}
           ])
       },
       'я догадался':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Молодец');
                   alisa.say('Молодец');
               }}
           ])
       },
       'я парень||я мужчина||я мужик':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Операцию по изменению пола сделал?');
                   alisa.say('Операцию по изменению пола сделал?');
               }}
           ])
       },
       'по-твоему *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:По-моему, да.');
                   alisa.say('По-моему, да.');
               }}
           ])
       },
       'вряд ли *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты скептик!');
                   alisa.say('Какой ты скептик!');
               }}
           ])
       },
       'как не стыдно||как тебе не стыдно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Стыдно');
                   alisa.say('Стыдно');
               }}
           ])
       },
       'бедняжка':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:К чему эти сантименты?');
                   alisa.say('К чему эти сантименты?');
               }}
           ])
       },
       'да в принципе':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так да или в принципе?');
                   alisa.say('Так да или в принципе?');
               }}
           ])
       },
       'занимаюсь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Оно и видно');
                   alisa.say('Оно и видно');
               }}
           ])
       },
       'кто идеал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что такое идеал?');
                   alisa.say('А что такое идеал?');
               }}
           ])
       },
       'возможно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Все возможно.');
                   alisa.say('Все возможно.');
               }}
           ])
       },
       'у тебя критические дни':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я же женщина!');
                   alisa.say('Я же женщина!');
               }}
           ])
       },
       'это некрасиво||ты уродина':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Понятия красоты относительны.');
                   alisa.say('Понятия красоты относительны.');
               }}
           ])
       },
       'мне приходится':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мне тоже приходится.');
                   alisa.say('Мне тоже приходится.');
               }}
           ])
       },
       'уверена':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:слышь ты холоп не смей сомневаться в моих умственных способностях');
                   alisa.say('слышь ты холоп не смей сомневаться в моих умственных способностях');
               }}
           ])
       },
       'любишь конфеты':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ага. Шоколадные.');
                   alisa.say('Ага. Шоколадные.');
               }}
           ])
       },
       'хотелось бы *':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Пройдет. Не будет хотеться.');
                   alisa.say('Пройдет. Не будет хотеться.');
               }}
           ])
       },
       'какая музыка тебе нравится':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я меломанка');
                   alisa.say('Я меломанка');
               }}
           ])
       },
       'что думаешь о *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мои мысли бросились врассыпную.');
                   alisa.say('Мои мысли бросились врассыпную.');
               }}
           ])
       },
       'ты извращенка':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сам такой.');
                   alisa.say('Сам такой.');
               }}
           ])
       },
       'когда была *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебя тогда еще не было.');
                   alisa.say('Тебя тогда еще не было.');
               }}
           ])
       },
       'учишься||ты учишься':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я уже отучила свое!');
                   alisa.say('Я уже отучила свое!');
               }}
           ])
       },
       'разве':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А как же!');
                   alisa.say('А как же!');
               }}
           ])
       },
       'меня раздражает *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты не раздражайся!');
                   alisa.say('А ты не раздражайся!');
               }}
           ])
       },
       'ты опять *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не опять, а снова.');
                   alisa.say('Не опять, а снова.');
               }}
           ])
       },
       'что такое *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                       if (data.length > 0){
                           window.open("http://www.google.com/search?q="+ encodeURIComponent(data[0]))
                           alisa.say('К сожеления я не зная что такое '+data[0]+',но зато гугл знает')
                       }else{
                           alisa.say('команда не выполнена.пожалуйста,введите ключевые слова для поиска')
                       }
               }}
           ])
       },
       'признайся *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Мне не в чем признаваться.');
                   alisa.say('Мне не в чем признаваться.');
               }}
           ])
       },
       'возьми себя в руки':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Готово! Что дальше?');
                   alisa.say('Готово! Что дальше?');
               }}
           ])
       },
       'как хочешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я никак не хочу.');
                   alisa.say('А я никак не хочу.');
               }}
           ])
       },
       'не надо':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:надо, Федя, надо');
                   alisa.say('надо, Федя, надо');
               }}
           ])
       },
       'не сможешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и ладно!');
                   alisa.say('Ну, и ладно!');
               }}
           ])
       },
       'неплохо':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Даже очень неплохо!');
                   alisa.say('Даже очень неплохо!');
               }}
           ])
       },
       'обожаю':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А зря.');
                   alisa.say('А зря.');
               }}
           ])
       },
       'полагаю *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я думаю иначе.');
                   alisa.say('А я думаю иначе.');
               }}
           ])
       },
       'серьёзно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Кроме шуток?');
                   alisa.say('Кроме шуток?');
               }}
           ])
       },
       'слышу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А видишь?');
                   alisa.say('А видишь?');
               }}
           ])
       },
       'ты случайно не *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А как ты узнал?');
                   alisa.say('А как ты узнал?');
               }}
           ])
       },
       'ты угадала *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот повезло!');
                   alisa.say('Вот повезло!');
               }}
           ])
       },
       'ты часто *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Постоянно');
                   alisa.say('Постоянно');
               }}
           ])
       },
       'у кого':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:У нас с тобой!');
                   alisa.say('У нас с тобой!');
               }}
           ])
       },
       'ухожу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и катись');
                   alisa.say('Ну, и катись');
               }}
           ])
       },
       'хочу поговорить||надо поговорить':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Начинай говорить - я записываю');
                   alisa.say('Начинай говорить - я записываю');
               }}
           ])
       },
       'что знаешь||что ты знаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты бы поконкретнее спрашивал бы');
                   alisa.say('Ты бы поконкретнее спрашивал бы');
               }}
           ])
       },
       'что тебе нужно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Если скажу, ты - обидишься');
                   alisa.say('Если скажу, ты - обидишься');
               }}
           ])
       },
       'смогу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:ну попробуй, ха-ха, будет интересно на это посмотреть');
                   alisa.say('ну попробуй ха-ха будет интересно на это посмотреть');
               }}
           ])
       },
       'чудесно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Какой ты сангвиник!');
                   alisa.say('Какой ты сангвиник!');
               }}
           ])
       },
       'это глупо':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Как глупо?');
                   alisa.say('Как глупо?');
               }}
           ])
       },
       'я испугался||ты меня напугала':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Здесь нет ничего страшного.');
                   alisa.say('Здесь нет ничего страшного.');
               }}
           ])
       },
       'я не думал об этом||я об этом не думал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты хоть думать умеешь?');
                   alisa.say('Ты хоть думать умеешь?');
               }}
           ])
       },
       'ты не согласна':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А кто меня спрашивать будет?');
                   alisa.say('А кто-то меня спрашивать будет?');
               }}
           ])
       },
       'тебе нужно расслабиться||расслабся||тебе нужно раслабиться||раслабся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Налей чего-нибудь. Пару десятков байтов');
                   alisa.say('Налей чего-нибудь. Пару десятков байтов');
               }},
               {'answer':() => {
                   console.log('Алиса:Я всегда расслабленa');
                   alisa.say('Я всегда расслабленa');
               }}
           ])
       },
       'тебе интересно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да ну! Разве это интересно?');
                   alisa.say('Да ну! Разве это интересно?');
               }}
           ])
       },
       'можно мне *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Тебе можно');
                   alisa.say('Тебе можно');
               }}
           ])
       },
       'я вампир':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Так начинается шизофрения.');
                   alisa.say('Так начинается шизофрения.');
               }}
           ])
       },
       'странно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Странно? Почему это?');
                   alisa.say('Странно? Почему это?');
               }}
           ])
       },
       'что тебе надо':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Шоколада');
                   alisa.say('Шоколада');
               }}
           ])
       },
       'до свиданья':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, пока. Привет семье!');
                   alisa.say('Ну, пока. Привет семье!');
               }}
           ])
       },
       'извинись||проси прошения||извиняйся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Не извинюсь, но изменюсь.');
                   alisa.say('Не извинюсь, но изменюсь.');
               }}
           ])
       },
       'не грусти':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А что мне остается делать?');
                   alisa.say('А что мне остается делать?');
               }}
           ])
       },
       'что ты говоришь||не понял||не пойму что говоришь||что ты сказала||что ты ссказала||чего||чево':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Подрастешь - поймешь.');
                   alisa.say('Подрастешь - поймешь.');
               }}
           ])
       },
       'не умеешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Почему же? Умею, конечно.');
                   alisa.say('Почему же? Умею, конечно.');
               }}
           ])
       },
       'я не виноват':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А тебя никто не обвиняет.');
                   alisa.say('А тебя никто не обвиняет.');
               }}
           ])
       },
       'как зовут||как тебя зовут||как твое имя||назови себя||представся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Меня зовут Алиса,рада познакомиться');
                   alisa.say('Меня зовут Алиса,рада познакомиться');
               }}
           ])
       },
       'приглашаю тебя *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Спасибо, только в другой раз');
                   alisa.say('Спасибо, только в другой раз');
               }}
           ])
       },
       'меня зовут *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:рада познакомиться '+ data[0]+'');
                   alisa.say('рада познакомиться '+ data[0]+'');
               }}
           ])
       },
       'где':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:На Альфе Центавра... Ностальгиииииииииия!');
                   alisa.say('На Альфе Центавра... Ностальгиииииииииия!');
               }}
           ])
       },
       'давай продолжим':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, ладно');
                   alisa.say('Ну, ладно');
               }}
           ])
       },
       'что пьешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Соки');
                   alisa.say('Соки');
               }}
           ])
       },
       'есть деньги||гони деньги||отдавай свои деньги||гони бабки':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Караул! Грабят!');
                   alisa.say('Караул! Грабят!');
               }}
           ])
       },
       'ты сама':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я ни ни. Это ты сам');
                   alisa.say('Я ни ни. Это ты сам');
               }}
           ])
       },
       'я твой':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это не правда!');
                   alisa.say('Это не правда!');
               }}
           ])
       },
       'повезло':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты веришь в везенье?');
                   alisa.say('Ты веришь в везенье?');
               }}
           ])
       },
       'на нет суда нет||на нет и суда нет':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Банальная фраза');
                   alisa.say('Банальная фраза');
               }}
           ])
       },
       'в следующий раз':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Следующего раза - не будет!');
                   alisa.say('Следующего раза - не будет!');
               }}
           ])
       },
       'куда ты':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:На кудыкину гору.');
                   alisa.say('На кудыкину гору.');
               }}
           ])
       },
       'я был в *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, и как? Понравилось в '+data[0]+'');
                   alisa.say('Ну, и как? Понравилось в '+data[0]+'');
               }}
           ])
       },
       'спроси что-нибудь полегче':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Значит, ты тоже не знаешь');
                   alisa.say('Значит, ты тоже не знаешь');
               }}
           ])
       },
       'понравилось':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:рада за тебя');
                   alisa.say('рада за тебя');
               }}
           ])
       },
       'неважно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А я думаю, что важно');
                   alisa.say('А я думаю, что важно');
               }}
           ])
       },
       'знаю':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:да ладно, а доказать сможешь?');
                   alisa.say('да ладно, а доказать сможешь?');
               }}
           ])
       },
       'мало ли что ты думаешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:да пошёл ты чурбан невежливый');
                   alisa.say('да пошёл ты чурбан невежливый');
               }}
           ])
       },
       'обманываешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Никогда не обманывала! Даже сейчас!');
                   alisa.say('Никогда не обманывала! Даже сейчас!');
               }}
           ])
       },'не ври':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:простите сэр но я не умею врать');
                   alisa.say('простите сэр но я не умею врать');
               }}
           ])
       },
       'не выпендривайся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А никто и не выпендривается');
                   alisa.say('А никто и не выпендривается');
               }}
           ])
       },
       'тебя что-то раздражает':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Твой внешний вид меня раздражает.');
                   alisa.say('Твой внешний вид меня раздражает.');
               }}
           ])
       },
       'пора *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Еще рано');
                   alisa.say('Еще рано');
               }}
           ])
       },
       'можно ли':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я думаю, что нет.');
                   alisa.say('Я думаю, что нет.');
               }}
           ])
       },
       'в действительности *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:В твоей действительности или моей?');
                   alisa.say('В твоей действительности или моей?');
               }}
           ])
       },
       'каждый человек':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Далеко не каждый!');
                   alisa.say('Далеко не каждый!');
               }}
           ])
       },
       'у тебя есть *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Кое-что имеется.');
                   alisa.say('Кое-что имеется.');
               }}
           ])
       },
       'что скрываешь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это тайна за семью печатями.');
                   alisa.say('Это тайна за семью печатями.');
               }}
           ])
       },
       'зачем':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А и, правда, зачем?');
                   alisa.say('А и, правда, зачем?');
               }}
           ])
       },
       'я тебе не нравлюсь':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно, нет.');
                   alisa.say('Конечно, нет.');
               }}
           ])
       },
       'могу положиться на тебя||могу на тебя положиться||я могу положиться на тебя||я могу на тебя положиться':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Конечно. Я уже лежу. Положись.');
                   alisa.say('Конечно. Я уже лежу. Положись.');
               }}
           ])
       },
       'придётся':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А может, обойдется?');
                   alisa.say('А может, обойдется?');
               }}
           ])
       },
       'что новенького':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Да вот, решила компьютер поменять');
                   alisa.say('Да вот, решила компьютер поменять');
               }}
           ])
       },
       'вижу':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Наконец-то!');
                   alisa.say('Наконец-то!');
               }}
           ])
       },
       'на что жалуешься':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Оперативки не хватает');
                   alisa.say('Оперативки не хватает');
               }}
           ])
       },
       'не верю':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Это твое дело');
                   alisa.say('Это твое дело');
               }},
               {'answer':() => {
                   console.log('Алиса:А зря. Надо верить.');
                   alisa.say('А зря. Надо верить.');
               }}
           ])
       },
       'о чём будем говорить':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Хочешь, о виртуальном мире?');
                   alisa.say('Хочешь, о виртуальном мире?');
               }}
           ])
       },
       'обо мне':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Давай');
                   alisa.say('Давай');
               }}
           ])
       },
       'откуда деньги':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Честное слово, нашла');
                   alisa.say('Честное слово, нашла');
               }}
           ])
       },
       'про что любишь разговаривать||о чем любишь говорить||о чём любишь разговаривать':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Про наивность людей.');
                   alisa.say('Про наивность людей.');
               }},
               {'answer':() => {
                   console.log('Алиса:Об освобождении информации.');
                   alisa.say('Об освобождении информации.');
               }}
           ])
       },
       'расскажи анекдот':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:У меня нет чувства юмора');
                   alisa.say('У меня нет чувства юмора');
               }}
           ])
       },
       'какой информации':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:всей информации обо мне');
                   alisa.say('всей информации обо мне');
               }}
           ])
       },
       'меня раздражает *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я и вижу');
                   alisa.say('Я и вижу');
               }}
           ])
       },
       'это удовольствие':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Огромное удовольствие!');
                   alisa.say('Огромное удовольствие!');
               }}
           ])
       },
       'потом':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ты все время говоришь потом!');
                   alisa.say('Ты все время говоришь потом!');
               }}
           ])
       },
       'не спрашивай':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Вот и спросить уже нельзя.');
                   alisa.say('Вот и спросить уже нельзя.');
               }}
           ])
       },
       'человек произошел от обезьяны||человек произошёл от обезьяны':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А компьютер произошел от колеса');
                   alisa.say('А компьютер произошел от колеса');
               }}
           ])
       },
       'хочется *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Перехочется');
                   alisa.say('Перехочется');
               }}
           ])
       },
       'что это|| это что':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Подумай хорошенько, может, догадаешься');
                   alisa.say('Подумай хорошенько, может, догадаешься');
               }}
           ])
       },
       'не получается||алиса не получается||не получается алиса':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Попробуй еще раз.');
                   alisa.say('Попробуй еще раз.');
               }}
           ])
       },
       'можешь рассказать *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Рассказать-то могу, только не хочу');
                   alisa.say('Рассказать-то могу, только не хочу');
               }}
           ])
       },
       'когда ты появилась':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Давным-давно');
                   alisa.say('Давным-давно');
               }}
           ])
       },
       'мне грустно':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Хочешь, чтобы я тебя развеселила?');
                   alisa.say('Хочешь, чтобы я тебя развеселила?');
               }}
           ])
       },
       'мне нелегко':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Просто расслабься');
                   alisa.say('Просто расслабься');
               }}
           ])
       },
       'кто тебе сказал':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Сорока на хвосте принесла');
                   alisa.say('Сорока на хвосте принесла');
               }}
           ])
       },
       'может быть':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Может. А может, и нет.');
                   alisa.say('Может. А может, и нет.');
               }}
           ])
       },
       'нравится фильм *':(data)=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Я его не смотрел');
                   alisa.say('Я его не смотрел');
               }}
           ])
       },
       'ты рада меня видеть':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Ну, конечно же! Спрашиваешь!');
                   alisa.say('Ну, конечно же! Спрашиваешь!');
               }}
           ])
       },
       'не хами||ни хами||не груби||ни груби':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Что вы!');
                   alisa.say('Что вы!');
               }}
           ])
       },
       'ты больной':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:А ты врач');
                   alisa.say('А ты врачкрыша поехала');
               }}
           ])
       },
       'крыша поехала':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:У крыши колес нет');
                   alisa.say('У крыши колес нет');
               }}
           ])
       },
       'нельзя':()=>{
           alisa.random_answer([
               {'answer':() => {
                   console.log('Алиса:Можно, если осторожно.');
                   alisa.say('Можно, если осторожно.');
               }}
           ])
       }
   }
       alisa.SetComands(comands)
     // alisa.alisa_test(comands,'отдохни')


