$(document).ready(menu);

function menu() {
    
    $('#bottom-ham').on('click',function(){
        $('#overlay-bot').toggleClass('active');
        $('#close-bot').toggleClass('active');
        $('#bottom-ham').toggleClass('active');
        ham_check=1;
        for(let j=0;j<10;j++)
        {
            if(list5[j]==1)
            {
                document.getElementById(String(j+1)).style.color="#F38445";
            }
            else
            {
                document.getElementById(String(j+1)).style.color="black";
            }
        }
    });

    $('#close-bot').on('click',function(){
        $('#overlay-bot').toggleClass('active');
        $('#close-bot').toggleClass('active');
        $('#bottom-ham').toggleClass('active');
        for(let j=0;j<10;j++)
        {
            if(list5[j]==1)
            {
                document.getElementById(String(j+1)).style.color="#F38445";
            }
            else
            {
                document.getElementById(String(j+1)).style.color="black";
            }
        }
        ham_check=0;
    });

    $('#photo1').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[0][1]=1;
    });
    $('#photo3').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[1][1]=1;
    });
    $('#photo4').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[2][1]=1;
    });
    $('#close').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[0][1]=0;
    });
    $('#close1').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[1][1]=0;
    });
    $('#close2').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[2][1]=0;
    });
    // DANCE
    $('#dance1').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[3][1]=1;
    });
    $('#dance3').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[4][1]=1;
    });
    $('#dance4').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[5][1]=1;
    });
    $('#close3').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[3][1]=0;
    });
    $('#close4').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[4][1]=0;
    });
    $('#close5').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[5][1]=0;
    });
    // ART
    $('#art1').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[6][1]=1;
    });
    $('#art3').on('click', function () {
        $('#overlay7').toggleClass('active');
        $('#close7').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[7][1]=1;
    });
    $('#art4').on('click', function () {
        $('#overlay8').toggleClass('active');
        $('#close8').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[8][1]=1;
    });
    $('#close6').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[6][1]=0;
    });
    $('#close7').on('click', function () {
        $('#overlay7').toggleClass('active');
        $('#close7').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[7][1]=0;
    });
    $('#close8').on('click', function () {
        $('#overlay8').toggleClass('active');
        $('#close8').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[8][1]=0;
    });
    // MUSIC
    $('#music1').on('click', function () {
        $('#overlay9').toggleClass('active');
        $('#close9').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[9][1]=1;
    });
    $('#music3').on('click', function () {
        $('#overlay10').toggleClass('active');
        $('#close10').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[10][1]=1;
    });
    $('#close9').on('click', function () {
        $('#overlay9').toggleClass('active');
        $('#close9').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[9][1]=0;
    });
    $('#close10').on('click', function () {
        $('#overlay10').toggleClass('active');
        $('#close10').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[10][1]=0;
    });

    //Gaming
    $('#game1').on('click', function () {
        $('#overlay11').toggleClass('active');
        $('#close11').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[11][1]=1;
    });
    $('#game2').on('click', function () {
        $('#overlay12').toggleClass('active');
        $('#close12').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[12][1]=1;
    });
    $('#game3').on('click', function () {
        $('#overlay13').toggleClass('active');
        $('#close13').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[13][1]=1;
    });
    $('#close11').on('click', function () {
        $('#overlay11').toggleClass('active');
        $('#close11').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[11][1]=0;
    });
    $('#close12').on('click', function () {
        $('#overlay12').toggleClass('active');
        $('#close12').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[12][1]=0;
    });
    $('#close13').on('click', function () {
        $('#overlay13').toggleClass('active');
        $('#close13').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[13][1]=0;
    });
    //Drama-Spur of the moment
    $('#drama17').on('click', function () {
        $('#overlay17').toggleClass('active');
        $('#close17').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[14][1]=1;
    });
    $('#drama18').on('click', function () {
        $('#overlay18').toggleClass('active');
        $('#close18').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[15][1]=1;
    });
    $('#drama19').on('click', function () {
        $('#overlay19').toggleClass('active');
        $('#close19').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[16][1]=1;
    });
    $('#close17').on('click', function () {
        $('#overlay17').toggleClass('active');
        $('#close17').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[14][1]=0;
    });
    $('#close18').on('click', function () {
        $('#overlay18').toggleClass('active');
        $('#close18').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[15][1]=0;
    });
    $('#close19').on('click', function () {
        $('#overlay19').toggleClass('active');
        $('#close19').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[16][1]=0;
    });
    //Quiz
    $('#quiz20').on('click', function () {
        $('#overlay20').toggleClass('active');
        $('#close20').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[17][1]=1;
    });
    $('#quiz21').on('click', function () {
        $('#overlay21').toggleClass('active');
        $('#close21').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[18][1]=1;
    });
    $('#quiz22').on('click', function () {
        $('#overlay22').toggleClass('active');
        $('#close22').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[19][1]=1;
    });
    $('#close20').on('click', function () {
        $('#overlay20').toggleClass('active');
        $('#close20').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[17][1]=0;
    });
    $('#close21').on('click', function () {
        $('#overlay21').toggleClass('active');
        $('#close21').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[18][1]=0;
    });
    $('#close22').on('click', function () {
        $('#overlay22').toggleClass('active');
        $('#close22').toggleClass('active');
        $('.nav-item').toggleClass('active');
        $('#social').toggleClass('active');
        list4[19][1]=0;
    });
}
