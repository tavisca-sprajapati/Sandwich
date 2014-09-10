$(document).ready(function(){

		 var compiledObj=Handlebars.compile($("#detailsSection").html());
		 $("#mainDiv").append(compiledObj(textDetail));
});