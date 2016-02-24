/**
 * Created by Javier Benítez del Pozo on 23/02/2016.
 */

(function () {

    var altura = screen.availHeight;
    var anchura = screen.availWidth;
    var alturaCasa = altura/3+'px';


    function mostrarDisplay(){
        $('#principal').fadeIn(400);
        $('#images-index').css('display', 'none');
    }

    function efectoEscritorio(){
        $('.casa-1').animate({
            'translate': '-110%'
        }, 3000, mostrarDisplay);
        $('.casa-2').animate({
            'top': '-110%'
        }, 5600, mostrarDisplay);
        $('.casa-3').animate({
            'margin-top': '150%'
        }, 5300);
        $('.casa-4').animate({
            'translate': '200%'
        }, 5900);
    }

    function efectoMovil(){
        $('.casa-1, .casa-2, .casa-3').css('height', alturaCasa);
        $('.casa-1, .casa-3').animate({
            'margin-left': '105%'
        }, 5000, mostrarDisplay);
        $('.casa-2, .casa-4').animate({
            'margin-left': '-105%'
        }, 5000);
    }

    function efectoPrincipal(){
        if(anchura >= 683){
            efectoEscritorio();
        }else{
            efectoMovil();
        }

    }

    $(function(){
        $('body').css('max-height', alturaCasa);
        setTimeout(function(){
            efectoPrincipal();
        }, 1200);
    });
})();