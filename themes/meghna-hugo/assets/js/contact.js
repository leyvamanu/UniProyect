(function () {
    emailjs.init('user_2T3vXgPtAE1omvimOM7zl');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', this).then(function(response) {
            document.getElementById('contact-form').reset();
            //document.getElementById('alert').classList.add("show");
            location.reload();
         }, function(error) {
            console.log('FAILED...', error);
         });
    });
}
