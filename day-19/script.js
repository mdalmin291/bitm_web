


$('.heading').click(function () {
    $('.heading').css({
        'color'             : 'red',
        'font-size'         :    '100px',
        'background-color'  : 'green'
    });
});














/* var heading = document.getElementById('heading');
 heading.onclick = function () {
     var content = document.getElementById('heading');
     content.style.color = 'green';
 }*/






var demo = {
    name : 'alamin khan',
    name : 'uddin',
    add : function () {
        document.write('hello add');
    },

};


demo.add();







var imageData = ['images/image1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
var index = 0;

function changeImage() {
     var mainImage = document.getElementById('mainimage');
     mainImage.setAttribute('src', imageData[index] );
     index++;

     if (index >= imageData.length){
         index = 0;
     }
}

setInterval(changeImage, 2000);

function demo() {
    var newDate = new Date();

    var hour     = newDate.getHours();
    var minutes  = newDate.getMinutes();
    var second   = newDate.getSeconds();


    document.getElementById('watch').innerHTML = hour+':'+minutes+':'+second;
}
setInterval(demo, 1000);


var imgOne = document.getElementById('img1');
imgOne.onclick = function () {
    var imgOne = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainimage').setAttribute('src', imgOne);
};

var imgTwo = document.getElementById('img2');
imgTwo.onclick = function () {
    var imgtwo = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainimage').setAttribute('src', imgtwo);
};

var imgThree = document.getElementById('img3');
imgThree.onclick = function () {
    var imgthree = document.getElementById('img3').getAttribute('src');
    document.getElementById('mainimage').setAttribute('src', imgthree);
};

var imgFour = document.getElementById('img4');
imgFour.onclick = function () {
    var imgfour = document.getElementById('img4').getAttribute('src');

    document.getElementById('mainimage').setAttribute('src', imgfour);
};













//var newDate =  new Date();
//alert(newDate);
//alert(newDate.getMinutes());