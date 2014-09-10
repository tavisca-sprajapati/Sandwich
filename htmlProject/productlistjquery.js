 $(document).ready(function(){

       


       // var obj1 = JSON.parse(test);


var obj=$("#sat2").html();
var obj2=Handlebars.compile(obj);
$("#MainRow").append(obj2(tilesDetails));
});