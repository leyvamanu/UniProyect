/*workaround para minimizar el menú del boton del movil 
cuando se selecciona una opcion*/

$(document).ready(function () {
  console.log("testing...");
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // mostrar fecha actual
  let pDate = document.querySelector(".copyright");
  const date = new Date().getFullYear();
  pDate.children[02].innerHTML = `<p>Copyright © ${date} <a href="https://www.uniproyect.com">Uniproyect</a> todos los derechos reservados.</p>`;
  ('<p>Copyright © 2021 <a href="https://www.uniproyect.com">Uniproyect</a> todos los derechos reservados.</p>');
});
