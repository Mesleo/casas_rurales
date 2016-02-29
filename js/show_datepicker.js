/**
 * Created by Javier Benítez del Pozo on 27/02/2016.
 */

(function(){

    var lockDate;

    // Modifico el objeto DatePicker para que se muestre con formato de fecha español
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        //editable: false,
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    // La fecha de entrada debe ser a partir del día actual como mínimo
    // La fecha de salida parte del día posterior a la fecha de entrada
    function setFecha() {
        $("#fechaEntrada").datepicker({
            minDate: 0,
            onClose: function (selectedDate) {
                lockDate = new Date($('#fechaEntrada').datepicker('getDate'));
                lockDate.setDate(lockDate.getDate() + 1);
                $("#fechaSalida").datepicker("option", "minDate", lockDate);
                if($(window).width()>683) {
                    $('.salida').css({
                        display: 'block',
                        visibility: 'visible'
                    });
                    $('#fechaSalida').css({
                        visibility: 'visible'
                    });
                }
            }
        }).attr('readonly','readonly');
        $("#fechaSalida").datepicker({
            minDate: 1
        }).attr('readonly','readonly');
    }

    $(function(){
        $.datepicker.setDefaults($.datepicker.regional['es']);
        setFecha();
    });

})();