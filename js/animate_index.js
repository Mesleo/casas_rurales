/**
 * Created by Javier Benítez del Pozo on 23/02/2016.
 */

(function () {

    var altura = screen.availHeight;
    var alturaCasa = altura/3+'px';


    function mostrarDisplay(){
        $('#principal').fadeIn(400);
        $('#images-index').css('display', 'none');
    }

    function desplazarImagenes(){
        $('.casa-1, .casa-2, .casa-3').css('height', alturaCasa);
        $('.casa-1, .casa-3').animate({
            'margin-left': '105%'
        }, 5000, mostrarDisplay);
        $('.casa-2, .casa-4').animate({
            'margin-left': '-105%'
        }, 5000);
    }

    $(function(){

        setTimeout(function(){
            desplazarImagenes();
        }, 1200);
    });
})();