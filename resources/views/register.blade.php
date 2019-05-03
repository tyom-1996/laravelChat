{{-- COPY SITE https://beta.meetme.com/#home--}}


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{asset('/img/icon2.png  ')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('/css/register/register.css')}}">
    <link rel="stylesheet" href="{{asset('/css/register/register-response.css')}}">
    <link rel="stylesheet" href="{{asset('/css/login/login.css')}}">

{{--ALISA START--}}
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('/js/alisa-2.1/css/alisa.css')}}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>--}}
{{--    <script src="{{asset('/js/alisa-2.1/diff.js')}} " ></script>--}}
{{--    <script src="{{asset('/js/alisa-2.1/alisa.js')}}"></script>--}}
{{--    <script src="{{asset('/js/alisa-2.1/voice-assistant.js')}} " ></script>--}}
{{--ALISA END--}}
    <script src="{{asset('/js/register/script.js')}}"></script>
    <title>Document</title>
</head>
<style>
    .content{
        background-image: url("{{asset('/img/register-bg.jpg')}}");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
<body>


@php
    $show_error_border_email = $errors->has('login_email') ? 'error-border' : '' ;
    $show_error_border_password = $errors->has('login_email') ? 'error-border' : '' ;
    $form_state = $errors->has('login_email') || $errors->has('login_email') ? 'open-login-form' : '';
@endphp

<div class="login-bg {{$form_state}}"></div>
<div class="login-wr {{$form_state}}">
    <div class="login-bl">
        <form class="login-form" action="/login" method="POST">
            {{ csrf_field() }}


            <label for="">{{$errors->first('login_email')}}</label>
            <input type="email" name="login_email" class="login_email {{$show_error_border_email}}" placeholder="Email">

            <label for="">{{$errors->first('login_password')}}</label>
            <input type="password" name="login_password" class="login_password {{$show_error_border_password}}" placeholder="Password">

            <button id="login-btn">Log In</button>
        </form>

        <div class="content-form-block-row2">
            <span>or</span>
        </div>
        <button class="facebook-btn-login" >
           <span>
               <i class="fab fa-facebook-f"></i>
           </span>
           Quick signup with Facebook
        </button>
    </div>
</div>


    <header>
        <div class="header-wrapp">
            <div class="header-wrapp-left">
                <p>
                    Meet, chat, and have fun with new people — free!
                </p>
            </div>
            <div class="header-wrapp-right">
                <button class="login-btn" >Member Login >></button>
            </div>
        </div>
    </header>

    <section class="content">
        <div class="content-wrapp">
            <div class="content-form-block">
                <div class="content-form-block-left">
                    <div class="content-form-block-left-top">


                        <div class="logo-bl">
                            <img src="{{asset('/img/icon2.png')}}" alt="">
                        </div>
                        <div class="content-form-block-left-top-title">
                            Meet Friends
                        </div>
                    </div>
                    <div class="content-form-block-left-bottom">
                        <a class="btn btn-android" href="https://play.google.com/store/apps/details?id=com.myyearbook.m" >
                            <i class="fab fa-android"></i>
                            Get it for<br><b>ANDROID</b>
                        </a>
                        <a class="btn btn-ios" href="https://itunes.apple.com/us/app/meetme-chat-meet-new-people/id372648912?mt=8" >
                            <i class="fab fa-apple"></i>
                            Get it for<br><b>IOS</b>
                        </a>
                        <a class="btn btn-windows" href="https://www.microsoft.com/store/apps/9wzdncrd25l0?ocid=badge" target="_blank">
                            <i class="fab fa-windows"></i>
                            Get it for<br><b>Windows 10</b>
                        </a>

                    </div>
                </div>

                    {{--FORM--}}



                <form method="POST" action="/register" class="content-form-block-right" id="register-form">
                          {{ csrf_field() }}
                        <div class="content-form-block-row1" >
                            <h3>New to MeetMe?</h3>
                            <button class="facebook-btn" type="button">
                           <span>
                               <i class="fab fa-facebook-f"></i>
                           </span>
                                Quick signup with Facebook
                            </button>
                        </div>

                        <div class="content-form-block-row2" >
                            <span>or sign up with email</span>
                        </div>



                        <div class="content-form-block-row3" >
                            <div class="name-bl row3-block">
                                @php
                                    $show_error_border = $errors->has('name') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('name') ? 'show_error_bl' : '' ;
                                @endphp
                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('name') }}</div>
                                <input placeholder="Name"  type="text" class="name-inp row3-inp {{$show_error_border}}" name="name" value="{{ old('name') }}">
                           </div>

                            <div class="email-bl row3-block">
                                @php
                                    $show_error_border = $errors->has('email') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('email') ? 'show_error_bl' : '' ;
                                @endphp
                                <input placeholder="Email"  type="email" class="email-inp row3-inp {{$show_error_border}}" name="email" value="{{ old('email') }}">
                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('email') }}</div>
                            </div>

                            <div class="password-bl row3-block">
                                @php
                                    $show_error_border = $errors->has('password') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('password') ? 'show_error_bl' : '' ;
                                @endphp
                                <input placeholder="Password"  type="password" class="password-inp row3-inp {{$show_error_border}}" name="password" >
                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('password') }}</div>
                            </div>
                        </div>


                        <div class="content-form-block-row4" >

                            <div class="gender-bl row4-block">
                                @php
                                    $show_error_border = $errors->has('gender') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('gender') ? 'show_error_bl' : '' ;
                                @endphp

                                <select  name="gender" class="row4-select gender-select {{$show_error_border}}">
                                    <option selected disabled>Gender</option>
                                    <option value="Female"   {{ old('gender') == 'Female' ? 'selected' : '' }}>Female</option>
                                    <option value="Male"   {{ old('gender') == 'Male' ? 'selected' : '' }}>Male</option>
                                </select>
                                <div class="error-bl {{$show_error_bl}}">{{$errors->first('gender')}}</div>
                            </div>

                            <div class="month-bl row4-block">
                                @php
                                    $show_error_border = $errors->has('month') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('month') ? 'show_error_bl' : '' ;
                                @endphp

                                <select name="month" class="row4-select month-select {{$show_error_border}}">
                                    <option selected disabled >Month</option>
                                    <option value="1"  {{ old('month') == '1' ? 'selected' : '' }} >January</option>
                                    <option value="2"  {{ old('month') == '2' ? 'selected' : '' }} >February</option>
                                    <option value="3"  {{ old('month') == '3' ? 'selected' : '' }} >March</option>
                                    <option value="4"  {{ old('month') == '4' ? 'selected' : '' }} >April</option>
                                    <option value="5"  {{ old('month') == '5' ? 'selected' : '' }} >May</option>
                                    <option value="6"  {{ old('month') == '6' ? 'selected' : '' }} >June</option>
                                    <option value="7"  {{ old('month') == '7' ? 'selected' : '' }} >July</option>
                                    <option value="8"  {{ old('month') == '8' ? 'selected' : '' }} >August</option>
                                    <option value="9"  {{ old('month') == '9' ? 'selected' : '' }} >September</option>
                                    <option value="10" {{ old('month') == '10' ? 'selected' : '' }} >October</option>
                                    <option value="11" {{ old('month') == '11' ? 'selected' : '' }} >November</option>
                                    <option value="12" {{ old('month') == '12' ? 'selected' : '' }} >December</option>
                                </select>

                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('month')}}</div>
                            </div>


                            <div class="day-bl row4-block">
                                @php
                                    $show_error_border = $errors->has('day') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('day') ? 'show_error_bl' : '' ;
                                @endphp

                                <select name="day" class="row4-select day-select {{$show_error_border}}">
                                    <option selected disabled >Day</option>
                                    @for($i=31; $i>0; $i-- )
                                        <option value="{{$i}}" {{old('day') == $i ? 'selected' : '' }}>{{$i}}</option>
                                    @endfor
                                </select>

                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('day')}}</div>
                            </div>


                            <div class="year-bl row4-block">
                                @php
                                    $show_error_border = $errors->has('year') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('year') ? 'show_error_bl' : '' ;
                                @endphp

                                <select name="year" class="row4-select year-select {{$show_error_border}}">
                                    <option selected disabled>Year</option>
                                    @for($i=2019; $i>1960; $i-- )
                                        <option value="{{$i}}" {{old('year') == $i ? 'selected' : ''}}>{{$i}}</option>
                                    @endfor
                                </select>

                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('year')}}</div>
                            </div>


                            <div class="country-bl row4-block">
                                @php
                                    $show_error_border = $errors->has('country') ? 'error-border' : '' ;
                                    $show_error_bl = $errors->has('country') ? 'show_error_bl' : '' ;
                                @endphp

                                <select name="country" class="country-select row4-select {{$show_error_border}}" >
                                    <option selected disabled>Country</option>
                                    @for($i = 0; $i < count($country_data); $i++ )
                                        {{$value = $country_data[$i]->country_name }}
                                        <option value='{{$value}}' {{ old('country') == $value ? 'selected' : '' }}>
                                            {{$value}}
                                        </option>
                                    @endfor
                                </select>

                                <div  class="error-bl {{$show_error_bl}}">{{$errors->first('country')}}</div>
                            </div>


                        </div>


                        <div class="content-form-block-row5" >
                            <div class="row5-left-bl">
                                <small>
                                    By clicking "Sign Up Free!" you are agreeing to the <a href="#terms">Terms</a>, and to receive MeetFriends email. You are also agreeing that others will be able to see info you provide on your profile.
                                </small>
                            </div>

                            <div class="row5-right-bl">
                                <button>Sign Up Free!</button>
                            </div>
                        </div>

                </form>

            </div>
        </div>

    </section>

    <footer>
        <div class="footer-wrapp">
            <div class="footer-wrapp-left">
                <div class="link-block">
                    <ul>
                        <li><span style="color: #ccc;" >© 2019 MeetFriends</span></li>
                        <li><span class="link"> English</span></li>
                        <li><span class="link">Español</span></li>
                        <li><span class="link">Português</span></li>
                        <li><span class="link">Русский</span></li>
                    </ul>
                </div>

                <div class="icon-block">
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-square"></i>
                </div>

            </div>

            <div class="footer-wrapp-right">

                <ul>
                    <li><a href=""> About Us</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Social Theater</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Suggestions?</a></li>
                </ul>

                <ul>
                    <li><a href=""> Terms & Privacy</a></li>
                    <li><a href="">COPPA</a></li>
                    <li><a href="">Online Safety</a></li>
                </ul>
            </div>
        </div>
    </footer>
</body>
</html>
