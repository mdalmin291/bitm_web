
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








 var mainimage = document.getElementById('mainimage');
  //get attribute
//var srcAttributeValue = mainimage.getAttribute('height');
//set attribute

 //var srcAttributeValue = mainimage.setAttribute('height','300');

 //set image and change

  var srcAttributeValue = mainimage.setAttribute('src', 'images/img4.jpg');
  //alert(srcAttributeValue);







var homebtn = document.getElementById('homebtn');
homebtn.onclick = function () {
      var content = document.getElementById('heading').innerHTML = 'This is heading';
};

var aboutbtn = document.getElementById('aboutbtn');
aboutbtn.onclick = function () {
     var paragraph = document.getElementById('para').innerHTML = 'This is a paragraph';
};





 var greenbtn = document.getElementById('greenbtn');
 greenbtn.onclick = function(){
 	var divone = document.getElementById('div-one');
      //id catching and giving color
 	//divone.style.backgroundColor = 'green';
     // class catching
 	divone.className = 'class-one new-one';
 };



/*
var reedbtn = document.getElementById('redbtn');
reedbtn.onclick = function () {
     var divone = document.getElementById('div-one');
     divone.style.backgroundColor = 'red';
};

var yellowbtn =  document.getElementById('yellowbtn');
yellowbtn.onclick = function () {
    var divone = document.getElementById('div-one');
    divone.style.backgroundColor = 'yellow';
};

var defaultbtn = document.getElementById('defaultbtn');
defaultbtn.onclick = function () {
    var divone = document.getElementById('div-one');
    divone.style.backgroundColor = 'pink';
};
*/









 var elementBtn = document.getElementById('btn');
 elementBtn.onclick = function(){
 	var startingNumber = document.getElementById('startingNumber').value;
    var endingNumber   = document.getElementById('endingNumber').value;
    var result=' ';
    for (var i= startingNumber; i<=endingNumber; i++){
    	
    	result = result+i+' ';
    }
    document.getElementById('result').innerHTML = result;
 };