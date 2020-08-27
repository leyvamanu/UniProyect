
/*workaround para minimizar el menú del boton del movil 
cuando se selecciona una opcion*/

$( document ).ready(function() {
    console.log( "testing..." );
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

});