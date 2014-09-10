  $(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

$("#lab").draggable({ containment: "window" });
  $("#showMe").click(function(){

    $("#lab").animate({width:'300px',height:'550px'});
    $("#mainpage").attr("style","overflow-y:auto;width:280px;height:520px;");
    $("#ShowLess").show();
    $("#ShowLess").html("<center><font size='3' color=white>Hide</font></center>");
    $("#showMe").hide();
  });


$("#ShowLess").click(function(){
$("#lab").animate({width:'150px',height:'30px'});
$("#mainpage").attr("style","overflow-y:auto;width:0px;height:0px;");
$("#ShowLess").hide();
$("#showMe").show();

});



});






/*
  $("#flip").click(function(){
    $("#panel").slideDown(3000);
	

	
  });
 
  $("#flipUp").click(function(){
    $("#p1").css("color","red")
      .slideUp(3000);
      
  });
  */
  
  
 