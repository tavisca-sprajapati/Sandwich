 $(document).ready(function(){

       


var test = '{"thumb":[' 
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler.jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (2).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (1).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (6).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (7).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (8).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (4).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler (3).jpg","td1":"Derry, NH","td2":"$20","td3":"$10" },'
        +'{"mainTitle":"$10 for $20 Worth of Food at DRAE-A Tapas Experience-in Derry","path":"images/ImageHandler.jpg","td1":"Derry, NH","td2":"$20","td3":"$10" }]}';

        var obj1 = JSON.parse(test);


var obj=$("#sat2").html();
var obj2=Handlebars.compile(obj);
$("#MainRow").append(obj2(obj1));

});