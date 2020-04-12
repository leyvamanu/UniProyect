(function () {
    emailjs.init('user_2T3vXgPtAE1omvimOM7zl');
})();

$(document).ready(function(){
    let succes = '<div id="alert-succes" class="alert alert-primary alert-dismissible fade show" role="alert">'+
                 $('#alert-succes').html()+
                 '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                 '<span aria-hidden="true">&times;</span>'+
                 '</button>'+
                 '</div>';
    let error = '<div id="alert-error" class="alert alert-danger alert-dismissible fade show" role="alert">'+
                 $('#alert-error').html()+
                 '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                 '<span aria-hidden="true">&times;</span>'+
                 '</button>'+
                 '</div>';

    $("#contact-form").submit(function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', this).then(function () {
            $('#contact-form')[0].reset();
            $('#alert').html(succes);
            grecaptcha.reset();
        }, function (error) {
            $('#contact-form')[0].reset();
            $('#alert').html(error);
            grecaptcha.reset();
        });
    });
});