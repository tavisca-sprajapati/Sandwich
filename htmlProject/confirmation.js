$(document).ready(function(){
alert("hi");
var textconfirm='{"cdata":[{"name":"Abhjeet","deal_no":"deal_cmf_1400","category":"Food",'
+'"tracking_no":"deal_1010101400","path":"images/ImageHandler.jpg",'
+'"str1":" $10 for $20 to Spend at Giovanni’s Roast Beef Pizza (3 Locations)"}]}';

//alert(textconfirm);

var jsoncon=JSON.parse(textconfirm);
//alert(jsoncon);

var obj=$("#sat4").html();
//alert(obj);

var compileobj=Handlebars.compile(obj);

//alert(compileobj);

$("#mainc").append(compileobj(jsoncon));

});


