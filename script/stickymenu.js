/* ============= Sticky Menu ======================== */

$(window).scroll(function(){
		
		  
		if($(this).scrollTop() > 300){
		                 
			$(".nav").addClass("nav-scrolled");
			$(".nav").css({"background-color":"red", "margin-top":"0px"});
			$(".header").css({"height":"50px"});
			$(".header img").css({"height":"40px", "width":"40px"});
			
			$(".nav li").css({"text-align":"left","padding-left":"12px"});
			
			
			}
			
			else {
				$(".nav").removeClass("nav-scrolled");
				$(".nav").css("background-color","blue");
				$(".header").css({"height":"100px"});
				$(".header img").css({"height":"75px", "width":"75px"});
				$(".nav li").css({"text-align":"center","padding-left":"0px"});
				
				
				
			      }
	                });
/* === End of sticky Menu ===== */

/* ================ offer images zoom in/out   ===== */
var $imageHeight = $(".offers1Image").height();
    $imageWidth = $(".offers1Image").width();
$(".offers1Image").stop().mouseenter(function(){
$(this).animate({width:"130%", height: "130%"},3000);
});

$(".offers1Image").stop().mouseleave(function(){
$(this).animate({width:$imageWidth,height:$imageHeight },2000);
});

/* === End of zoom in/out===== */


