{{--https://cdn.dribbble.com/users/1858541/screenshots/4800529/attachments/1079458/chat_ui_shot_2x.png--}}

<!doctype html>
<html >
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="icon" href="{{asset('/img/icon2.png  ')}}">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<link rel="stylesheet" href="{{asset('/css/account/account.css')}}">
{{--ALISA START--}}
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
<link rel="stylesheet" href="{{asset('/js/alisa-2.1/css/alisa.css')}}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel="stylesheet" href="{{asset('/js/alisa-2.1/alisa-model/css/alisa-model-animation.css')}}">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="{{asset('/js/alisa-2.1/js/alisa.js')}}"></script>
<script src="{{asset('/js/alisa-2.1/alisa-model/alisa-model.js')}}"></script>
    <script src="{{asset('/js/alisa-2.1/js/voice-assistant.js')}}"></script>

    <script class="alisa_action" src="{{asset('/js/alisa-2.1/js/alisa-actions.js')}}"></script>

    {{--ALISA END--}}
<title>Document</title>

</head>
<body>
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
            <div class="sect-1-rightmenu-content">

            </div>

            <div class="sect-1-rightmenu-footer">
                    <div class="sect-1-rightmenu-footer-left">
{{--                        <div class="my_photo_bl" >--}}
{{--                            <img src="{{asset('/img/default_user.jpg')}}" alt="">--}}
{{--                        </div>--}}
{{--                        <p>User</p>--}}
                    </div>

                    <div class="sect-1-rightmenu-footer-right">

                    </div>
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

        </div>
    </section>


</div>

</body>
</html>


