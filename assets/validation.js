
$(document).ready(function() {
    $('#CustomerEmail').on('keyup', function() {
        var email = $(this).val();
        var num_start = /^[0-9].+$/;
        var minNumberofChars = 8;
        var newPassword = $('input[type=password]').val();
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        console.log(email, pattern1.test(email));
        if (email.includes(".")) {
            arr1 = email.split(".");
        }
        if (email.length == 0) {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        } else if (email == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('button').attr('disabled', true);
        } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
            $('.custom').hide();
            if (newPassword.length < minNumberofChars) {
                $('.custom1').text("Your password must be at least 8 characters");
                $('.custom1').show();
                $('button').attr('disabled', true);
            } else {
                $('.custom1').hide();
                //             $('.custom_login ').hide();
                $('button').attr('disabled', false);
            }
        } else {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        }
    })
    $('#CustomerPassword').on('keyup', function() {
        var email = $("#CustomerEmail").val();
        var num_start = /^[0-9].+$/;
        var minNumberofChars = 8;
        var newPassword = $('#CustomerPassword').val();
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        console.log(email, pattern1.test(email));
        if (email.includes(".")) {
            arr1 = email.split(".");
        }
        if (email.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.custom').show();
            $('button').attr('disabled', true);
        } else if (email == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('button').attr('disabled', true);
        } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
            $('.custom').hide();
            if (newPassword.length < minNumberofChars) {
                $('.custom1').text("Your password must be at least 8 characters");
                $('.custom1').show();
                $('button').attr('disabled', true);
            } else {
                $('.custom1').hide();
                //             $('.custom_login ').hide();
                $('button').attr('disabled', false);
            }
        } else {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        }
    })
    $('#RegisterForm-email').on('keyup', function() {
        var email = $(this).val();
        var num_start = /^[0-9].+$/;
        var minNumberofChars = 8;
        var f_name = $('#RegisterForm-FirstName').val();
        var f_match = /^[A-Za-z]+$/;
        var newPassword = $('input[type=password]').val();
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        console.log(email, email.match(pattern1));
        if (email.includes(".")) {
            arr1 = email.split(".");
        }
        if (f_name.length == 0) {
            $('.f_name_error').show();
        } else if (f_match.test(f_name) == false) {
            $('.f_name_error').show();
            $('.f_name_error').text("First Name Should Contains Only Alphabets");
            $('button').attr('disabled', true);
        } else if (email.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.custom').show();
            $('button').attr('disabled', true);
        } else if (email == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('button').attr('disabled', true);
        } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
            $('.custom').hide();
            if (newPassword.length < minNumberofChars) {
                $('.custom1').text("Your password must be at least 8 characters");
                $('.custom1').show();
                $('button').attr('disabled', true);
            } else {
                $('.custom1').hide();
                //             $('.custom_login ').hide();
                $('button').attr('disabled', false);
            }
        } else {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        }
    })
    $('#RegisterForm-password').on('keyup', function() {
        var newPassword = $(this).val();
        var f_name = $('#RegisterForm-FirstName').val();
        var num_start = /^[0-9].+$/;
        var email1 = $("input[type=email]").val();
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        var f_match = /^[A-Za-z]+$/;
        var minNumberofChars = 8;
        if (email1.includes(".")) {
            arr1 = email1.split(".");
        }
        if (f_name.length == 0) {
            $('.f_name_error').show();
        } else if (f_match.test(f_name) == false) {
            $('.f_name_error').show();
            $('.f_name_error').text("First Name Should Contains Only Alphabets");
            $('button').attr('disabled', true);
        } else if (email1.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.custom').show();
        } else if (email1 == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
        } else if (email1.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email1) == false) {
            $('.custom').hide();
            if (newPassword.length == 0) {
                $('.custom1').text("Password cannot be empty");
                $('.custom1').show();
                $('button').attr('disabled', true);
            } else if (newPassword.length < minNumberofChars) {
                $('.custom1').text("Your password must be at least 8 characters");
                $('.custom1').show();
                $('button').attr('disabled', true);
            } else {
                $('.custom1').hide();
                $('.custom').hide();
                $('button').attr('disabled', false);
            }
        } else {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        }
    })
    $('#RegisterForm-FirstName').on('keyup', function() {

        var newPassword = $('input[type=password]').val();
        var f_name = $('#RegisterForm-FirstName').val();
        var f_match = /^[A-Za-z]+$/;
        var num_start = /^[0-9].+$/;
        var email1 = $("input[type=email]").val();
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        var minNumberofChars = 8;
        if (email1.includes(".")) {
            arr1 = email1.split(".");
        }
        if (f_name.length == 0) {
            $('.f_name_error').show();
            $('button').attr('disabled', true);
        } else if (f_match.test(f_name) == false) {
            $('.f_name_error').show();
            $('.f_name_error').text("First Name Should Contains Only Alphabets");
            $('button').attr('disabled', true);
        } else if (email1.length == 0) {
            $('.custom').text("Email cannot be empty");
            //             $('.custom').show();
            $('.f_name_error').hide();
        } else if (email1 == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('.f_name_error').hide();
        } else if (email1.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email1) == false) {
            $('.custom').hide();
            if (newPassword.length == 0) {
                $('.custom1').text("Email cannot be empty");
                $('.custom1').show();
                $('button').attr('disabled', true);
                $('.f_name_error').hide();
            } else if (newPassword.length < minNumberofChars) {
                $('.custom1').text("Your password must be at least 8 characters");
                $('.custom1').show();
                $('button').attr('disabled', true);
                $('.f_name_error').hide();
            } else {
                $('.custom1').hide();
                $('.custom').hide();
                $('.f_name_error').hide();
                $('button').attr('disabled', false);
            }
        } else {
            $('.custom').text("Invalid email address");
            $('.custom').show();
            $('button').attr('disabled', true);
        }
    })
    $('#AddressFirstNameNew').on('keyup', function() {
        var f_name = $('#AddressFirstNameNew').val();
        var number = $('#AddressPhoneNew').val();
        var pat = /^[0-9]+$/;
        var f_match = /^[A-Za-z]+$/;
        console.log(f_match.test(f_name));
        if (f_name.length == 0) {
            $('.f_name_error').show();
            $('button').attr('disabled', true);
        } else if (f_match.test(f_name) == false) {
            $('.f_name_error').show();
            $('.f_name_error').text("First Name Should Contains Only Alphabets");
            $('button').attr('disabled', true);
        } else if (number.length == 0) {
            $('.number_error').show();
            $('.f_name_error').hide();
            $('button').attr('disabled', true);
        } else if (pat.test(number) == false) {
            $('.number_error').show();
            $('.number_error').text('Phone number must be a number');
            $('button').attr('disabled', true);
        } else {
            $('.f_name_error').hide();
            $('.number_error').hide();
            $('button').attr('disabled', false);
        }
    })
    $('#AddressPhoneNew').on('keyup', function() {
        var f_name = $('#AddressFirstNameNew').val();
        var number = $('#AddressPhoneNew').val();
        var pat = /^[0-9]+$/;
        var f_match = /^[A-Za-z]+$/;
        console.log(pat.test(number));
        if (f_name.length == 0) {
            $('.f_name_error').show();
            $('button').attr('disabled', true);
        } else if (f_match.test(f_name) == false) {
            $('.f_name_error').show();
            $('.f_name_error').text("First Name Should Contains Only Alphabets");
            $('button').attr('disabled', true);
        } else if (number.length == 0) {
            $('.number_error').show();
            $('.f_name_error').hide();
            $('button').attr('disabled', true);
        } else if (pat.test(number) == false) {
            $('.number_error').show();
            $('.number_error').text('Phone number must be a number');
            $('button').attr('disabled', true);
        } else {
            $('.f_name_error').hide();
            $('.number_error').hide();
            $('button').attr('disabled', false);
        }
    })

    $('#Contact_Name').on('keyup', function() {
        var f_name = $(this).val();
        var number = $('#ContactForm-phone').val();
        var pat = /^[0-9]+$/;
        var f_match = /^[A-Za-z]+$/;
        var num_start = /^[0-9].+$/;
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        var email1 = $("input[type=email]").val();
        console.log(pat.test(number),f_name.match(f_match));
        if (email1.includes(".")) {
            arr1 = email1.split(".");
        }
        if (f_name.length == 0) {
            $('.f_name_error').show();
            $('button').attr('disabled', true);
        }  else if (email1.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.f_name_error').hide();
        } else if (email1 == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('.f_name_error').hide();
        } else if (pattern1.test(email1)==false) {
            $('.custom').hide();
        }  else {
            $('.f_name_error').hide();
            $('.number_error1').hide();
          	$('.custom').hide();
            $('button').attr('disabled', false);
        }
    });
    $('#ContactForm-phone').on('keyup', function() {
        var f_name = $('#Contact_Name').val();
        var number = $('#ContactForm-phone').val();
        var pat = /^[0-9]+$/;
        var f_match = /^[A-Za-z]+$/;
        var num_start = /^[0-9].+$/;
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        var email1 = $("input[type=email]").val();
        console.log(pat.test(number));
        if (email1.includes(".")) {
            arr1 = email1.split(".");
        }
        if (number.length == 0) {
            $('.number_error1').show();
            $('button').attr('disabled', true);
        } else if (pat.test(number) == false) {

            $('.number_error1').show();
            $('.number_error1').text('Phone number must be a number');
            $('button').attr('disabled', true);
        } else if (f_name.length == 0) {
            $('.number_error1').hide();
            $('.f_name_error').show();
            $('button').attr('disabled', true);
        } else if (email1.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.f_name_error').hide();
        } else if (email1 == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('.f_name_error').hide();
        } else if (pattern1.test(email1)==false) {
            $('.custom').hide();
        } else {
       
             $('.f_name_error').hide();
            $('.number_error1').hide();
          	$('.custom').hide();
            $('button').attr('disabled', false);
        }
    })
    $('.email_contact').on('keyup', function() {
//       	alert('mail');
      	var arr1=0;
        var f_name = $('#Contact_Name').val();
        var number = $('#ContactForm-phone').val();
        var pat = /^[0-9]+$/;
        var f_match = /^[A-Za-z]+$/;
        var num_start = /^[0-9].+$/;
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        var email1 = $(this).val();
        console.log("asa", pattern1.test(email1));
        if (email1.includes(".")) {
            arr1 = email1.split(".");
        }
        if (email1.length == 0) {
            $('.custom').text("Email cannot be empty");
            $('.f_name_error').hide();
        } else if (email1 == "test@gmail.com") {
            $('.custom').text("Invalid email address");
            $('.custom').show()
            $('.f_name_error').hide();
        } else if (pattern1.test(email1)==false) {
           $('.custom').text("Invalid email address");
            $('.custom').show();
        }  else if (f_name.length == 0) {
            $('.number_error1').hide();
            $('.f_name_error').show();
          	$('.custom').hide();
            $('button').attr('disabled', true);
        } else {
          	$('.custom').hide();
            $('.f_name_error').hide();
            $('.number_error1').hide();
            $('button').attr('disabled', false);
        }
    })

})
$(document).ready(function() {
    $('.field__input1').on('keyup', function() {
        var email = $('input[type=email]').val();
        var num_start = /^[0-9].+$/;
        console.log(num_start.test(email));
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        console.log(email, email.match(pattern1));
        if (email.includes(".")) {
            arr1 = email.split(".");
        }
        if (email == "test@gmail.com") {
            $('.error').show();
        } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
            $('.error').hide();
            $('#validate').hide();
            $('#Subscribe').show();
//             $('.field__button').attr('disabled', false);
//             $('.button').attr('disabled', false);

        } else {
            $('.error').show();
        }
    })
    recovery_email();
})

function news() {
    var email = $('input[type=email]').val();
    var num_start = /^[0-9].+$/;
    console.log(num_start.test(email));
    var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
    console.log(email, email.match(pattern1));
    if (email.includes(".")) {
        arr1 = email.split(".");
    }
    if (email == "test@gmail.com") {
        $('.error').show();
    } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
        $('.error').hide();
        $('#validate').hide();
        $('#Subscribe').show();

    } else {
        $('.error').show();
    }
}


// Slideshow Animation

(function () {
  $(window).on('scroll', onScroll);
})();

function onScroll() {
  let wst = $(window).scrollTop(),
  dh = $(document).height(),
  wh = $(window).height();

  let scrollPercent = wst / (dh - wh) * 100;

  $('.slideshow__media img').each((i, e) => {
    let zoom = $(e).attr('data-zoom');
    let variant = +zoom * scrollPercent / 100;
    let bgSize = `${130 - variant}%`;
    $(e).css('transform', 'scale(' + bgSize + ')');
  });

};

function recovery_email(){
  $('#recover-email').keyup(function(){
  		var email=$(this).val();
    	var num_start = /^[0-9].+$/;
        console.log(num_start.test(email));
        var pattern1 = /^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z]+)$/;
        console.log(email, email.match(pattern1));
        if (email.includes(".")) {
            arr1 = email.split(".");
        }
        if (email == "test@gmail.com") {
            $('.for-custom').show();
        } else if (email.match(pattern1) && arr1[1].length < 4 && arr1[1].length >= 2 && num_start.test(email) == false) {
            $('.for-custom').hide();

        } else {
            $('.for-custom').show();
        }
      });
}