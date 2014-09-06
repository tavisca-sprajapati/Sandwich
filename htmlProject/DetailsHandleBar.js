$(document).ready(function(){
	//alert("hello from handle");

	var textDetail='{"loopMe":[{"title":"$10 for 4 Corn Maze Entries + 4 Cups of Animal Feed at J&F Farms",'
	+'"place":"Derry, NH","link":"www.jandffarm.net","imgPath":"images/ImageHandler (1).jpg",'
					+'"price":"10","value":"20","discount":"50","yousave":"10","ql1":"Family-owned and operated farm since 1906",'
					+'"ql2":"Voucher is good for 4 admissions to corn maze plus 4 cups of grain for the petting farm",'
					+'"ql3":"Also offering a retail farm stand, flowers, NH-made products, ice cream and much more!",'
					+'"ql4":"Farm is open 7 days/week",'
					+'"yl2":"Can buy 5 per person and gift 5",'
					+'"yl3":"Can use 2 vouchers per day",'
					+'"yl4":"Not valid on any store or farm products",'
					+'"yl5":"Must be used in a single visit",'
					+'"yl6":"Not valid with any other offer or discount",'
					+'"yl7":"No change or credit returned.",'
					+'"yl1":"Valid from 8/15 until maze closes (10/31/14)",'
					+'"details":"A Family Farm Since 1906'
					+'Corn Maze is open same hours as the farm stand: Mon - Fri: 10am-6pm & Sat - Sun: 10am-5pm'
					+'Twenty-one years ago in Annville, Pennsylvania,'
					+'Don Frantz created the first corn maze and since then people all over the world have been purposely'
					+'getting lost every fall. New Hampshire has plenty of puzzling cornfields and, as Halloween approaches,'
					+'many of them become inhabited with interesting beings. One of the most popular mazes is located at J & F'
					+'Farms in Derry, a family-friendly destination that also has a petting farm. Weve got an a-MAZE-ing deal'
					+'that gets your family admission to an outdoor experience where theyll get lost, but find fun and make animal friends!'
					+'$10 gets you 4 admissions to this years J & F Farms Corn Maze and 4 cups of grain to feed the animals'
					+'at the petting farm - a $20 value!'
					+'A family-owned farm since 1906, J & F Farms is operated by the Ferdinando family,'
					+'Vincent and Miriam, and their four sons Francis, Philip, Barry and Bryan.'
					+'The farms mission is to provide quality, fresh produce and all natural meats to the community.'
					+'Open from May until Christmas, their farm stand sells farm fresh eggs, beef, pork, chicken, fruits, and vegetables.'
					+'Gardeners love their annuals, perennials, herbs, and bagged garden products. J & F Farms also sells wide range of'
					+'NH Made products, Christmas trees, wreaths, kissing balls, and more.'
					+'So after you solve the maze and visit with Mochie the llama and the rest of the animals,'
					+' stop by the farm stand to say â€œHello!â€ and check out some of the freshest, '
					+'tastiest food in the Granite State. And dont forget the ice cream!"}]}';
				//		alert(textDetail);

		 var jsonObj = JSON.parse(textDetail);
		 //alert(jsonObj);
		 var obj=$("#detailsSection").html();
		 //alert(obj);
		 var compiledObj=Handlebars.compile(obj);
		 //alert(compiledObj);
		 $("#mainDiv").append(compiledObj(jsonObj));
});