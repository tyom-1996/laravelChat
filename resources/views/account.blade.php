<!doctype html>
<html lang="`en`">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('/css/account/account.css')}}">

    {{--ALISA START--}}
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('/js/alisa-2.1/css/alisa.css')}}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <script src="{{asset('/js/alisa-2.1/diff.js')}} " ></script>
    <script src="{{asset('/js/alisa-2.1/alisa.js')}}"></script>
    <script src="{{asset('/js/alisa-2.1/voice-assistant.js')}} " ></script>
    {{--ALISA END--}}

    <title>Document</title>
</head>
<body>
{{--<a href="/logout">Logout</a>--}}
<div class="wrapper">
    <section class="section-1">
        <div class="sect-1-header">
            <div class="logo_bl">
                <img src="{{asset('/img/icon2.png')}}" alt="">
            </div>
            <div class="inp_bl">
                <input type="text" placeholder="Find or start a conversation">
            </div>
        </div>

        <div class="sect-1-leftmenu">
            <ul>

                <li>
                    <div class="leftmenu-item">
                        <i class="fas fa-user"></i>
                    </div>
                </li>
                <li>
                    <div class="leftmenu-item">
                        <i class="fas fa-user-friends"></i>
                    </div>
                </li>

                <li>
                    <div class="leftmenu-item">
                        <i class="fas fa-comments"></i>
                    </div>
                </li>
                <li>
                    <div class="leftmenu-item">
                        <i class="fas fa-bell"></i>
                    </div>
                </li>

            </ul>

            <div class="logout-bl">
                    <div class="leftmenu-item-logout">
                        <i class="fas fa-cog"></i>
                    </div>

                    <div class="leftmenu-item-logout">
                        <a href="/logout">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </div>
            </div>
        </div>

        <div class="sect-1-rightmenu">
            <div class="sect-1-rightmenu-footer">

            </div>
        </div>

    </section>





{{--    SECTION 2--}}

    <section class="section-2">
        <div class="sect-2-left">
            <div class="sect-2-left-header"></div>

            <div class="sect-2-left-content" id="content" ></div>

            <div class="message-inp-bl">
                <input type="text" class="message-inp" placeholder="Type a message...">
            </div>
        </div>

        <div class="sect-2-right">
            <div class="sect-2-right-header"></div>
        </div>
    </section>


</div>


<div id="box1" class="box blurred-bg tinted">
    <div class="content">
    </div>
    <h1 style="color:white;">Alisa</h1>
</div>
<script>

</script>


</body>
</html>
