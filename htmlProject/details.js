$(document).ready(function(){

  $("#lab").draggable({ axis:"y",containment:"#master-wrapper" });

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
