/*
document.addEventListener("DOMContentLoaded", function() {
    var test2 = document.getElementById("registerr");
    
   
    var test5 = document.getElementById("hreftomainmenu");
    var mainbodyvar = document.getElementById("mainpagebodyid");
    var test334 = document.getElementById("userpage2");
    window.onload = function() {
       // Your JavaScript code here
  
    function first(){
 
      
      mainbodyvar.style.display = "grid";
    
       test2.style.display="none";
      //test5.style.color ="red";
    }
 
    first();
 };
 });
 
 /*document.addEventListener('DOMContentLoaded', function() {
    if(vispropmain==="visible"){
      
 
    
    };
 });
 */

 var Slide = document.getElementById("slideit");
var images1234 = new Array('virtualassistant.jpeg','doctorsmartphone.jpeg','healthdigital.jpeg');
var i = 0;
var len = images1234.length;
function slider12(){
  if(i>len-1){
    i = 0;
  };
  
  Slide.src = images1234[i];
  
  i++;
  setTimeout('slider12()',3000);
};

const texts = document.querySelectorAll('.ticker-text');
let currentIndex = 0;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fadeInNextText() {
  const currentText = texts[currentIndex];
  const nextIndex = (currentIndex + 1) % texts.length;
  const nextText = texts[nextIndex];

  currentText.style.opacity = 0;
  nextText.style.opacity = 1;
  nextText.style.color = getRandomColor(); // Change text color to a random color

  currentIndex = nextIndex;

  setTimeout(fadeInNextText, 2000); // Change text every 2 seconds (adjust as needed)
}

// Start the animation
fadeInNextText();
/*
console.log("Script is running.");


var buttonexit2= document.getElementById("exit12");
var overlayIframe2 = document.getElementById("LogpageinOverlay");
var button3= document.getElementById("Contact");
var bodyy = document.body;

var button = document.getElementById("Login");
var overlayIframe = document.getElementById("LogpageinOverlay");

button.addEventListener("click",function(){

  

    overlayIframe.style.display="block";   

    buttonexit2.style.display="block";
    

});
buttonexit2.addEventListener("click",function(){
    overlayIframe.style.display="none";   
    buttonexit2.style.display="none";
});
*/
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE
//SLIDE TILL HERE

/*
if(overlayIframe.style.display===block && buttonexit2.style.display===block)
{
bodyy.addEventListener("click", function(){
    
        if(Event.target !== overlayIframe2){
            overlayIframe.style.display="none";   
            buttonexit2.style.display="none";
        };
    
});
};
*/

// Get a reference to the button element by its id
/*var button = document.getElementById("Login");
var overlayIframe = document.getElementById("LogpageinOverlay");
button.addEventListener("click",function(){

  

    overlayIframe.style.display="block";   

    
    

});*/





//var stateofstyle =  function statestyle()
//{overlayIframe.style.display="block";};

//function exittt(){
  //  overlayIframe.style.display="none";
//}

/*body2.addEventListener("click",function(){
    
        if (Event.target !== overlayIframe){
            alert("w");
};   
});*/

 
 
 
 
 /*buttonedprof.addEventListener("click", function(){
 
     editprofile1.style.display="none";});/*/
 
 /*
 buttonedprof.addEventListener("click", function () {
     if(window.computedStyle===)
 });
 */