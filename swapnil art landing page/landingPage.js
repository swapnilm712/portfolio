document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("service_jt95z59");

  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');

  console.log(contactForm)

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // let formData = new FormData(this);
    // formData.append('service_id', 'service_jt95z59');
    // formData.append('template_id', 'template_lrno6f9');
    // formData.append('user_id', 'QuIIJyAT7oKjCDv8F');

    emailjs.sendForm('service_jt95z59', 'template_lrno6f9', contactForm, 'QuIIJyAT7oKjCDv8F')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
});