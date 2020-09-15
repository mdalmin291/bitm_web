
function checkFirstName(){
        var firstName = $('#firstName').val();
        var reg = /^[a-zA-Z -.]{2,10}$/;
        if(reg.test(firstName)){
            $('#firstNameError').text(' ');
            return true;
        }else{
            $('#firstNameError').text('FirstName should be 2 to 10 character');
            return false;
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
        return true;
    }else{
        $('#lastNameError').text('lastName should be 2 to 10 character');
        return false;
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
        return true;
    }else{
        $('#emailAddressError').text('please enter your email address');
        return false;
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
         return true;
     }else{
         $('#passwordError').text('password must be uppercase and lowercase, 1 special character like #$%');
         return false;
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
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (password == confirmPassword) {

        $('#confirmPasswordError').text(' ');
        return true;
    } else {
        $('#confirmPasswordError').text('password & confirm password should be same');
        return false;
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

$('#showHide').click(function () {
   var attrValue = $('#password').attr('type');
   if(attrValue == 'password'){
       $('#password').attr('type', 'text');
   }else{
       $('#password').attr('type', 'password');
   }
});


$('#showHides').click(function () {
    var attrValue = $('#confirmPassword').attr('type');
    if(attrValue == 'confirmPassword'){
        $('#confirmPassword').attr('type', 'text');
    }else{
        $('#confirmPassword').attr('type', 'confirmPassword');
    }
});





function checkgenderInfo(){
    var genderInfo = $('input[type="radio"]:checked').val();
    if(genderInfo == 'male' || genderInfo == 'Female'){
         $('#genderInfoError').text(' ');
         return true;
    }else{
        $('#genderInfoError').text('please select any gender');
        return false;
    }

}
function checkDistrictName(){
    var districtValue = $('#district').val();
    if(districtValue== ' '){
        $('#DistrictNameError').text('please select district name');
        return false;
    }else{
        $('#DistrictNameError').text(' ');
        return true;
    }

}

$('#form').submit(function () {
   if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkgenderInfo() == true && checkDistrictName() == true){
       return true;
   }else{
       return false;
   }


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