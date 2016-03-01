/**
 * Created by anonimo1 on 01/03/2016.
 */
(function(){

    $(function(){
        $('nav a').click(function (e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 900);
        });
    })
})();