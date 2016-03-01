/**
 * Created by Javier Benítez del Pozo on 22/02/2016.
 */
(function(){

    var divCookies;

    function setCookie(name,value,exp) {
        document.cookie = name+"="+value+"; "+exp;
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

    function abrirActivarCookies(){
        window.open("http://www.benchmarkemail.com/es/help-FAQ/answer/como-puedo-activar-las-cookies-en-mi-navegador-web", "");
    }


    $(function () {
        setCookie("cookiePrueba", "5821", 5);
        divCookies = document.getElementById('divCookies');
        if(getCookie('cookiePrueba') != '5821'){
            $("#dialog-confirm" ).dialog({
                display: 'block',
                dialogClass: "no-close",
                resizable: false,
                draggable: false,
                buttons: [
                    {
                        text: "Aceptar",
                        click: function() {
                            $( this ).dialog( "close" );
                        }
                    },
                    {
                        text: "Ayuda",
                        click: function() {
                            abrirActivarCookies();
                        }
                    }
                ]
            });
        }

    })
}());