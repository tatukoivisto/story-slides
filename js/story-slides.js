$(document).ready(function(){

var requestURL = "https://koivist9.firebaseio.com/.json"
var position = 1;


/* SLIDE TEXT CHANGE */
var slideContents = $.getJSON(requestURL, function (data) {

    	var mainJSON = data;	
    	console.log(mainJSON);
    
    	function changeOne() {
    		$(".text-1-1").html(mainJSON.slide1.content);
    	}
        changeOne();
    	function changeTwo() {
    		$(".text-2-1").html(mainJSON.slide2.content);
    	}
        changeTwo();
    	function changeThree() {
    		$(".text-3-1").html(mainJSON.slide3.content);
    	}
        changeThree();
        function changeFour() {
            $(".text-4-1").html(mainJSON.slide4.content);
        }
        changeFour();


    }
);

var slideAmount = $('.story-comtainer').length;
console.log(slideAmount);
var text11 = $(".text-1-1");
var text21 = $(".text-2-1");
var text31 = $(".text-3-1");
var text41 = $(".text-4-1");

var textAnimation1 = function(){
    TweenMax.to(text11, 0.3, { y: "-=10",autoAlpha:"1", delay:0.5});
}
textAnimation1();
var textAnimation2 = function(){
    TweenMax.to(text21, 0.3, { y: "-=10",autoAlpha:"1", delay:0.5});
}
var textAnimation3 = function(){
    TweenMax.to(text31, 0.3, { y: "-=10",autoAlpha:"1", delay:0.5});
}
var textAnimation4 = function(){
    TweenMax.to(text41, 0.3, { y: "-=10",autoAlpha:"1", delay:0.5});
}

var setOthersToDefault = function(){
    TweenMax.to(text11, 0.1, { y: "0",autoAlpha:"0"});
    TweenMax.to(text21, 0.1, { y: "0",autoAlpha:"0"});
    TweenMax.to(text31, 0.1, { y: "0",autoAlpha:"0"});
    TweenMax.to(text41, 0.1, { y: "0",autoAlpha:"0"});
}



/* Back Slide */
var backSlide = function(){
    if(position > 1){
        $(".story-comtainer").velocity({translateY:'+=100%'}, {duration:300});
        position -= 1;
        slideAction();
    }else{
        console.log("mene eteenpäin");
    }
}


/* Next Slide */
var nextSlide = function(){
    if(position < slideAmount){
    $(".story-comtainer").velocity({translateY:'-=100%'}, {duration:300});
    position += 1;
    slideAction();
  }else {
    console.log("mene taaksepäin");
  }
}


  $(".next-button").click(nextSlide);
  $(".back-button").click(backSlide);

var slideAction = function(){
    if(position == 1) {
        textAnimation1();
        setOthersToDefault();
    }else if(position == 2){
        textAnimation2();
        setOthersToDefault();
    }else if(position == 3){
        textAnimation3();    
        setOthersToDefault();
    }else if(position == 4){
        textAnimation4();  
        setOthersToDefault();
    }
}




});