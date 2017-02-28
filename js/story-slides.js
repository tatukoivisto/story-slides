$(document).ready(function(){

var requestURL = "https://koivist9.firebaseio.com/.json"

localStorage.clickcount = 1;



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
var endPosition = (slideAmount - 1) * -100;

var text11 = $(".text-1-1");
var text21 = $(".text-2-1");
var text31 = $(".text-3-1");
var text41 = $(".text-4-1");
var storyContainer = $(".story-comtainer");

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

var playStatus = "pause";
var myInterval = setInterval(nextSlide, 4000);

var playPause = function(){
    if(playStatus === "play"){
        $(".play-button").html("PLAY");
        playStatus = "pause";
        clearInterval(myInterval);
        console.log("pause pressed")
    }else {
        $(".play-button").html("PAUSE");
        playStatus = "play";
        myInterval = setInterval(nextSlide, 4000);
        console.log("play pressed")
    }
}

/* Back Slide */
var backSlide = function(){
    if(localStorage.clickcount == 1){

        localStorage.clickcount = 4;
        storyContainer.velocity({translateY:endPosition + "%"});
        textAnimation4();  
    }else if(localStorage.clickcount > 1){
        storyContainer.velocity({translateY:'+=100%'}, {duration:300});

        localStorage.clickcount = Number(localStorage.clickcount) -1;
        slideAction();

    }else{
        console.log("mene eteenpäin");
    }
}


/* Next Slide */
var nextSlide = function(){
    if(localStorage.clickcount == slideAmount){
        localStorage.clickcount = 1;
        textAnimation1();
        storyContainer.velocity({translateY:'0%'});
    }else if(localStorage.clickcount < slideAmount){
        storyContainer.velocity({translateY:'-=100%'}, {duration:300});
        localStorage.clickcount = Number(localStorage.clickcount) +1;
        slideAction();
  }else {
        console.log("error");
  }
}



  $(".play-button").click(playPause)
  $(".next-button").click(nextSlide);
  $(".back-button").click(backSlide);



var slideAction = function(){
    if(localStorage.clickcount == 1) {
        textAnimation1();
        setOthersToDefault();
    }else if(localStorage.clickcount == 2){
        textAnimation2();
        setOthersToDefault();
    }else if(localStorage.clickcount == 3){
        textAnimation3();    
        setOthersToDefault();
    }else if(localStorage.clickcount == 4){
        textAnimation4();  
        setOthersToDefault();
    }
}


});