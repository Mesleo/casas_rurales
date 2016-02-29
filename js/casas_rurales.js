/**
 * Created by Javier Benítez del Pozo on 25/02/2016.
 */

(function(){

    var galeria, availableTags = [
        "Córdoba",
        "Granada",
        "Málaga",
        "Torremolinos, Málaga",
        "Torre del Mar, Málaga",
        "Benálmadena, Málaga",
        "Benidorm, Valencia",
        "Valencia",
        "Alicante",
        "Torrevieja, Alicante",
        "Oropesa del mar, Castellón",
        "Castellón",
        "Alpujarra granadina",
        "Lugo, Galicia",
        "Pozoblanco, Córdoba",
        "Palma del Río, Córdoba",
        "Linares, Jaén",
        "Segovia",
        "Valladolid",
        "Tomelloso, Ciudad Real",
        "Ciudad Real",
        "Badajoz"
    ];

    // Función para mostrar la galería de cada casa
    function mostrarGaleria(){
        galeria = this.id.split('-')[2];
        $('#galeria-casa-'+galeria).fadeIn(200).delay(2000);
    }

    // Función para ocultar la galería de las casas
    function ocultarGaleria(){
        galeria = this.id.split('-')[2];
        $('#galeria-casa-'+galeria).css('display', 'none');
    }

    // Eventos para las galerías de fotos de las distintas casas rurales
    function showGalery() {
        $('#fotos-casa-1').on({
            click: mostrarGaleria
        });
        $('#fotos-casa-2').on({
            click: mostrarGaleria
        });
        $('#fotos-casa-3').on({
            click: mostrarGaleria
        });
        $('.galeria-lightbox').on({
            click: ocultarGaleria
        });
    }

    $(function(){
        showGalery();
        $("#destino").autocomplete({
            source: availableTags
        });
    });
})();