/**
 * Created by anonimo1 on 16/01/2016.
 */

(function(){

    var peopleNumber, more, less, spanPeopleNumber, name, lastName, dni,
        dateIn, dateOut, email, phone, bankAccount, bankEntity, bankOffice,
        bankDC, bankNumberAccount ,checkbox, message, error;

    function increasePeople(spanPeopleNumber){
        peopleNumber = Number(spanPeopleNumber.text());
        if(peopleNumber <= 11){
            spanPeopleNumber.html(peopleNumber+1+"+");
        }
        if(peopleNumber < 10){
            peopleNumber += 1;
            spanPeopleNumber.html(peopleNumber);
        }
    }

    function decrementedPeople(spanPeopleNumber){
        peopleNumber = Number(spanPeopleNumber.text());
        if(isNaN(peopleNumber)){
            peopleNumber = Number(11);
        }
        if(peopleNumber > 1){
            peopleNumber -= 1;
            spanPeopleNumber.html(peopleNumber);
        }
    }

    // Funciones de validación de campos mediante expresiones regulares
    function isValidName(value){
        return /^[\sa-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{3,}$/.test(value.trim());
    }

    function isValidDni(value){
        return /^\d{8}[a-zA-Z]{1}$/.test(value.trim());
    }

    function isValidEmail(value){
        return /^[a-zA-Z0-9\._-]+[a-zA-Z0-9_-]@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(value.trim());
    }

    function isValidPhone(value){
        return /^\d{9}$/.test(value.trim());
    }

    // Comprueba los botones de decrementar y aumentar número de personas
    function setPeople() {
        less = $('#menos');
        more = $('#mas');
        spanPeopleNumber = $('#mostrar_numero_personas');
        less.click(function (e) {
            e.preventDefault();
            decrementedPeople(spanPeopleNumber)
        });
        more.click('click', function (e) {
            e.preventDefault();
            increasePeople(spanPeopleNumber)
        });
    }

    // Muestra los errores
    function setCssInput(input, error){
        error ? input.css('border', '1px solid red') : input.css('border', '1px solid grey');
    }

    // Muestra mensajes de error
    function showError(tag, error){
        if(error == '' && tag.find('p').length>0) {
            tag.find('p').remove();
        }else if(tag.find('p').length<1){
            message = '<p>' + error + '</p>';
            tag.append(message);
        }
    }

    function showErrorBank(tag, error, id){
        $('p#'+id).remove();
        message = '<p id="'+id+'">' + error + '</p>';
        tag.append(message);
    }

    // Comprueba Nombre y apellidos
    function checkInputName(input, tagDiv) {
        !isValidName(input.val()) ? error = true : error = false;
        if(error){
            setCssInput(input, error);
            showError(tagDiv, 'El campo debe tener un mínimo de tres letras');
        }else{
            setCssInput(input, error);
            showError(tagDiv, '');
        }
    }

    // Comprueba el DNI
    function checkInputDni(input, tagDiv) {
        !isValidDni(input.val()) ? error = true : error = false;
        if(error){
            setCssInput(input, error);
            showError(tagDiv, 'El DNI debe constar de 8 números y una letra (12345678M)');
        }else{
            setCssInput(input, error);
            showError(tagDiv, '');
        }
    }

    function checkInputDate(input, tagDiv){
        var d;
        input.val() == '' ? error = true : error = false;
        input.attr('id') == 'fechaEntrada' ? d = 'entrada' : d = 'salida';
        if(error){
            setCssInput(input, error);
            showError(tagDiv, 'Tienes que elegir una fecha de '+d);
        }else{
            setCssInput(input, error);
            showError(tagDiv, '');
        }
    }

    // Comprueba el email
    function checkInputEmail(input, tagDiv) {
        !isValidEmail(input.val()) ? error = true : error = false;
        if(error){
            setCssInput(input, error);
            showError(tagDiv, 'Formato de email: nombre@servidor.dom');
        }else{
            setCssInput(input, error);
            showError(tagDiv, '');
        }
    }

    // Comprueba el teléfono
    function checkInputPhone(input, tagDiv) {
        !isValidPhone(input.val()) ? error = true : error = false;
        if(error){
            setCssInput(input, error);
            showError(tagDiv, 'El teléfono debe estar formado por 9 números');
        }else{
            setCssInput(input, error);
            showError(tagDiv, '');
        }
    }

    // Comprueba el campo de la cuenta bancaria que pierde el foco
    function checkBankAccount(input){
        var size, info, id;
        bankAccount = $('#bank');
        $('#bank p').tinysort({attr:"id",order:'asc'});
        switch (input.attr('id')){
            case 'entidad':
                size = 4;
                id = 'p1';
                info = 'Entidad: 4 dígitos';
                break;
            case 'oficina':
                size = 4;
                id = 'p2';
                info = 'Oficina: 4 dígitos';
                break;
            case 'dc':
                size = 2;
                id = 'p3';
                info = 'DC: 2 dígitos';
                break;
            default:
                size = 10;
                id = 'p4';
                info = 'Nº Cuenta: 10 dígitos';
                break;
        }
        input.val().length!=size || isNaN(input.val()) || input.val()<0 ? error = true : error = false;
        if(error){
            setCssInput(input, error);
            showErrorBank(bankAccount, info, id);
        }else{
            setCssInput(input, error);
            showErrorBank(bankAccount, '', id);
        }
    }

    // Comprueba que el checkbox de 'condiciones' esté checked
    function checkConditions(input, tagDiv) {
        !input.is(':checked') ? showError(tagDiv, 'Debes aceptar las condiciones') : showError(tagDiv, '');
    }

    // Comprueba el evento 'blur' por cada campo del formulario
    function initVar() {
        name = $('#nombre');
        lastName = $('#apellidos');
        dni = $('#dni');
        dateIn = $('#fechaEntrada');
        dateOut = $('#fechaSalida');
        email = $('#email');
        phone = $('#telefono');
        bankEntity = $('#entidad');
        bankOffice = $('#oficina');
        bankDC = $('#dc');
        bankNumberAccount = $('#nCuenta');
        checkbox = $('#conditions');
    }

    function checkBlur() {
        name.on('blur', function () {
            checkInputName(name, $('#name'));
        });
        lastName.on('blur', function(){
            checkInputName(lastName, $('#lastName'));
        });
        dni.on('blur', function(){
            checkInputDni(dni, $('#nif'));
        });
        dateIn.on({
            change: function () {
                checkInputDate(dateIn, $('#dateIn'));
            },
            blur: function () {
                checkInputDate(dateIn, $('#dateIn'));
            }
        });
        dateOut.on('change', function(){
            checkInputDate(dateOut, $('#dateOut'));
        });
        email.on('blur', function(){
            checkInputEmail(email, $('#e-mail'));
        });
        phone.on('blur', function(){
            checkInputPhone(phone, $('#phone'));
        });
        bankEntity.on('blur', function(){
            checkBankAccount(bankEntity);
        });
        bankOffice.on('blur', function(){
            checkBankAccount(bankOffice);
        });
        bankDC.on('blur', function(){
            checkBankAccount(bankDC);
        });
        bankNumberAccount.on('blur', function(){
            checkBankAccount(bankNumberAccount);
        });
        checkbox.on('blur', function(){
           checkConditions(checkbox, $('#div_check'));
        });
    }

    function setCookie(nameCookie, valueCookie, exp) {
        document.cookie = nameCookie+"="+valueCookie+"; "+exp;
    }

    function getCookie(nameCookie){
        var nc = nameCookie + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(nc) == 0) {
                return c.substring(nc.length, c.length);
            }
        }
        return "";
    }

    function checkClick() {
        $('#enviar_reserva').on('click', function (e) {
            e.preventDefault();
            checkInputName(name, $('#name'));
            checkInputName(lastName, $('#lastName'));
            checkInputDni(dni, $('#nif'));
            checkInputDate(dateIn, $('#dateIn'));
            checkInputDate(dateOut, $('#dateOut'));
            checkInputEmail(email, $('#e-mail'));
            checkInputPhone(phone, $('#phone'));
            checkBankAccount(bankEntity);
            checkBankAccount(bankOffice);
            checkBankAccount(bankDC);
            checkBankAccount(bankNumberAccount);
            checkConditions(checkbox, $('#div_check'));
            if ($('form p').text() == "") {
                setCookie(name.attr('id'), name.val(), 365);
                setCookie(lastName.attr('id'), lastName.val(), 365);
                setCookie(dni.attr('id'), dni.val(), 365);
                setCookie(email.attr('id'), email.val(), 365);
                setCookie(phone.attr('id'), phone.val(), 365);
            }
        });
    }

    function checkCookies(){
        name.val(getCookie(name.attr('id')));
        lastName.val(getCookie(lastName.attr('id')));
        dni.val(getCookie(dni.attr('id')));
        email.val(getCookie(email.attr('id')));
        phone.val(getCookie(phone.attr('id')));
    }

    $(function(){
        initVar();
        checkCookies();
        setPeople();
        checkBlur();
        checkClick();
        $('#atras_reserva').click(function(e){
            e.preventDefault();
            window.location = 'casas_rurales.html';
        });
    });
})();