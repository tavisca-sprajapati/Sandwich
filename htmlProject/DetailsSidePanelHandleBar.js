$(document).ready(function(){
	//alert("side panel");
	var textData='{"sidePanel":['
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler.jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (2).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (4).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (5).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (6).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (7).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (2).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"},'
					+'{"title":"$10 for $20 Worth of Food at DRAE Experience in Derry",'
					+'"imgpath":"images/ImageHandler (4).jpg","place":"Derry NH","discount":"20",'
					+'"price":"10"}'
					+']}';

					//alert(textData);
					var jsonObj = JSON.parse(textData);
					//alert(jsonObj);
					var obj=$("#panelThubnails").html();
					//alert(obj);
					var compiledTags=Handlebars.compile(obj);
					//alert(compiledTags);
					$("#mainpage").append(compiledTags(jsonObj));

});