$(document).ready(function()
{
					var compiledTags=Handlebars.compile($("#panelThubnails").html());
					$("#mainpage").append(compiledTags(textData));

});