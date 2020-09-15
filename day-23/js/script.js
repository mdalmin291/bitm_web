
function checkFirstName(){
        var firstName = $('#firstName').val();
        var reg = /^[a-zA-Z -.]{2,10}$/;
        if(reg.test(firstName)){
            $('#firstNameError').text(' ');
        }else{
            $('#firstNameError').text('FirstName should be 2 to 10 character');
        }

}

$('#firstName').keyup(function () {
   checkFirstName();
});

function checkLastName(){
    var LastName = $('#lastName').val();
    var reg = /^[a-zA-Z -.]{2,10}$/;
    if(reg.test(LastName)){
        $('#lastNameError').text(' ');
    }else{
        $('#lastNameError').text('lastName should be 2 to 10 character');
    }
}

$('#lastName').keyup(function () {
   checkLastName();
});

function checkEmailAddress(){
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text(' ');
    }else{
        $('#emailAddressError').text('emailaddress is invalid');
    }
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});


function checkPassword(){
     var password = $('#password').val();
     var reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
     if(reg.test(password)){
         $('#passwordError').text(' ');
     }else{
         $('#passwordError').text('password must be uppercase and lowercase, 1 special character like #$%');
     }
}


$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    $('#passwordError').text(' ');

});

$('#password').click(function () {
    $('#passwordError').text('password must be uppercase and lowercase, 1 special character like #$%');
});

function checkConfirmPassword() {
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();

    if (password == confirmPassword) {

        $('#confirmPasswordError').text(' ');
    } else {
        $('#confirmPasswordError').text('password & confirm password does not match');
    }
}

$('#confirmPassword').blur(function () {
   checkConfirmPassword();
});
$('#confirmPassword').keyup(function () {
    $('#confrmPasswordError').text(' ');
});

$('#confrmPassword').click(function () {
    $('#confrmPasswordError').text('password & confirm password should be same');
});




$(window).scroll(function () {
  var  MenuPosition = $('#menu').position();
  //menu position
  //alert(MenuPosition.left);

    var WindowScrollPosition = $(window).scrollTop();
    if (WindowScrollPosition>=MenuPosition.top) {
        $('#menu').css({
            'position' : 'fixed',
             'top' :    '0px',
             'width' :'90%',
        });
    } else {
        $('#menu').css({
            'position' : 'relative',
            'top'      : '0px',

        });
    }
});