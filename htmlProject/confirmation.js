$(document).ready(function(){

var obj=$("#sat4").html();

var compileobj=Handlebars.compile(obj);

$("#mainc").append(compileobj(textconfirm));

});


