
/**
 * Created by Javier Benítez del Pozo on 15/01/2016.
 */



(function(){

    var divCookies;

    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000)); // Para crear un tiempo de expiración en días, por defecto es en milisegundos
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    window.addEventListener('load', function(){
        setCookie("cookiePrueba", "5821", 5);
        divCookies = document.getElementById('divCookies');
        if(getCookie('cookiePrueba') == '5821'){
            divCookies.style.display = 'none';
        }else{
            divCookies.style.display = 'block';
        }
    }, false);
})();
