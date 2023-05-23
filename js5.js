$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault(); // Prevent form submission
  
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      var isValid = true;
  
      // Perform form validation
      if (name === '') {
        $('#name').addClass('error');
        isValid = false;
      } else {
        $('#name').removeClass('error');
      }
  
      if (email === '') {
        $('#email').addClass('error');
        isValid = false;
      } else {
        $('#email').removeClass('error');
      }
  
      if (message === '') {
        $('#message').addClass('error');
        isValid = false;
      } else {
        $('#message').removeClass('error');
      }
  
      if (isValid) {
        // Form is valid, submit data to server or perform other operations
        // Here, we'll simply display a success message
        $('#contact-form').hide();
        $('#success-message').show();
      }
    });
  });

  function navigateToPage(page) {
    window.location.href = page;
  }