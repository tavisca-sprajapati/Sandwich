$(document).ready(function(){
alert("new");

var test = '{"thumb":[' 
        +'{"mainTitle":"John","path":"images/ImageHandler (1).jpg","td1":"first","td2":"two","td3":"three" },'
        +'{"mainTitle":"John","path":"images/ImageHandler (2).jpg","td1":"first","td2":"two","td3":"three" },'
        +'{"mainTitle":"John","path":"images/ImageHandler (3).jpg","td1":"first","td2":"two","td3":"three" }]}';

        var obj1 = JSON.parse(test);
      //  alert(obj1.thumb.length);
alert(test);



var obj=$("#sat2").html();
var obj2=Handlebars.compile(obj);
$("#MainRow").append(obj2(obj1));

});