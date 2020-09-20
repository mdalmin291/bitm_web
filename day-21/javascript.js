//$(selector).action()

$(window).scroll(function () {
     var windowscrollposition = $(window).scrollTop();
     var stickyDiv = $('#stickyDiv').position();
     if(windowscrollposition>=stickyDiv){
         $('#stickyDiv').css({
             'position' : 'fixed',
             'top' : '0px'
         });
     }else {
         $('#stickyDiv').css({
            'position' : 'relative',
             'top' : '0px'
         });
     }
});







 //var scrollDivPosition = $('#scrollDiv').position();
 //alert(scrollDivPosition.left);

var firstScrollUp = 0;
$('#scrollDiv').scroll(function () {
$('#display').css('display', 'block');
 var scrollPosition = $('#scrollDiv').scrollTop();
 //$('#display').text(scrollPosition);

    if(scrollPosition>firstScrollUp){
        $('#display').text('you are scrolling down');
    }else{
        $('#display').text('you are scrolling up');
    }

     firstScrollUp = scrollPosition;
});





$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
});

$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#res2').text(lastName);
});
$('#lastName').blur(function () {

    var firstName = $('#firstName').val();
    var lastName  = $('#lastName').val();

    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
});







/*
$('#btn').click(function () {
  var firstName = $('#firstName').val();
  var  lastName = $('#LastName').val();
  var fullName  = firstName+' '+lastName;
  $('#fullName').val(fullName);
});*/
