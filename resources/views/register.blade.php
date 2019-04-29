{{-- COPY SITE https://beta.meetme.com/#home--}}


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{asset('/img/icon.png  ')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('/css/register/register.css')}}">
    <link rel="stylesheet" href="{{asset('/css/register/register-response.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="{{asset('/js/alisa-2.1/diff.js')}} " ></script>
    <script src="{{asset('/js/alisa-2.1/alisa.js')}}"></script>
    <script src="{{asset('/js/alisa-2.1/voice-assistant.js')}} " ></script>

    <title>Document</title>
</head>
<style>
    .content{
        background-image: url("{{asset('/img/register-bg.jpg')}}");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>


<body>
    <header>
        <div class="header-wrapp">
            <div class="header-wrapp-left">
                <p>
                    Meet, chat, and have fun with new people — free!
                </p>
            </div>
            <div class="header-wrapp-right">
                <button>Member Login >></button>
            </div>
        </div>
    </header>

    <section class="content">
        <div class="content-wrapp">
            <div class="content-form-block">
                <div class="content-form-block-left">
                    <div class="content-form-block-left-top">


                        <div class="logo-bl">
                            <img src="{{asset('/img/icon.png')}}" alt="">
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
                <div class="content-form-block-right">
                    <div class="content-form-block-row1" >
                        <h3>New to MeetMe?</h3>
                        <button class="facebook-btn">
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
                            <input placeholder="Name" type="text" class="name-inp row3-inp" name="name_inp">
                        </div>
                        <div class="email-bl row3-block">
                            <input placeholder="Email" type="email" class="email-inp row3-inp" name="email_inp">
                        </div>
                        <div class="password-bl row3-block">
                            <input placeholder="Password" type="password" class="password-inp row3-inp" name="password_inp">
                        </div>
                    </div>


                    <div class="content-form-block-row4" >

                        <div class="gender-bl row4-block">
                            <select name="gender_select" class="row4-select gender-select">
                                <option selected disabled>Gender</option>
                                <option value="">Female</option>
                                <option value="">Male</option>
                            </select>
                        </div>

                        <div class="month-bl row4-block">
                            <select name="month_select" class="row4-select month-select">
                                <option disabled="" selected="">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div class="day-bl row4-block">
                            <select name="day_select" class="row4-select day-select">
                                <option disabled="" selected="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div class="year-bl row4-block">
                            <select name="year_select" class="row4-select year-select">
                                <option disabled="" selected="">Year</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                            </select>
                        </div>

                        <div class="country-bl row4-block">
                            <input  type="text" class="country-btn row4-select" value="">
                        </div>
                    </div>


                    <div class="content-form-block-row5" >
                        <div class="row5-left-bl">
                            <small>
                                By clicking "Sign Up Free!" you are agreeing to the <a href="#terms">Terms</a>, and to receive MeetMe email. You are also agreeing that others will be able to see info you provide on your profile.
                            </small>
                        </div>

                        <div class="row5-right-bl">
                            <button>Sign Up Free!</button>
                        </div>
                    </div>

                </div>

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
