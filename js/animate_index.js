/**
 * Created by Javier Benítez del Pozo on 23/02/2016.
 */

(function () {

    var anchura = $(window).width();

    function mostrarDisplay(){
        $('#principal').fadeIn(400);
        $('#images-index').css('display', 'none');
    }

    function quitarCasa(){
        $(this).css('display', 'none');
    }

    function efectoEscritorio(){
        $('.casa-1').animate({
            left: "-100%"
        }, 3900, mostrarDisplay );
        $('.casa-2').animate({
            top: '-100%'
        }, 5800);
        $('.casa-3').animate({
            bottom: '-100%'
        }, 3200, quitarCasa);
        $('.casa-4').animate({
            right: '-100%'
        }, 4700);
    }

    function efectoMovil(){
        $('.casa-1, .casa-3').animate({
            marginLeft: '-101%'
        }, 3200, mostrarDisplay);
        $('.casa-2').fadeOut(3300);
    }

    function efectoPrincipal(){
        console.log(anchura);
        if(anchura >= 683){
            efectoEscritorio();
        }else{
            console.log('movil');
            efectoMovil();
        }
    }

    $(function(){
        setTimeout(function(){
            efectoPrincipal();
        },2000);
    });
})();