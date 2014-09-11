var title_regex = /^[a-zA-Z]+$/;
var contact_regex = /^[a-zA-Z]+$/;
var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var phone_regex = /^[0-9]{10}\b$/;
var zipcode_regex=/^[0-9]{6}$/;
var password_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;
//var flag=false;


$(document).ready(function(){

	$("#category").change(function(){
	   
	        var category_pattern = $('#category').val();
	       if(category_pattern=="Please Select")
			{
			$( "#title" ).prop( "disabled", true );
			}
			else
			$( "#title" ).prop( "disabled", false);
			

	});

	
	$("#title").blur(function()
	{	var title_pattern =  $('#title').val();
		if(!title_regex.test(title_pattern))
		{
			$("#title").focus();
			$('#2').text("* For your title please use alphabets only! *");
			$( "#description" ).prop( "disabled", true );
			//flag=true;
		}
		else
		{
			$('#2').text("");
			$( "#description" ).prop( "disabled", false );
		
		}

	});
	
	$("#description").blur(function()
	{		
	    var desc_pattern = $('#description').val();
		if (desc_pattern==null||desc_pattern=="") 
		{
			$("#description").focus();
			$('#3').text("* Please enter some description! *");
			$( "#photo" ).prop( "disabled", true );
			//return false;
		}
		else
		{
			$('#3').text("");
			$( "#photo" ).prop( "disabled", false );
		}
	
	});
	
	$("#photo").blur(function()
	{
	      var imgname=$("#photo").val();
	   
		 if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(imgname))  
		    {         
           
		     $( "#contact" ).prop( "disabled", true);			 
            }
			else
			{
		     $( "#contact" ).prop( "disabled", false);
			
			}			 
	
	});
	$("#contact").blur(function()
	{	
	
		var contact_pattern = $('#contact').val();
	   if(!contact_regex.test(contact_pattern))
			{
			$("#contact").focus();
			$('#4').html("* For contact name please use alphabets only! *");
				//return false;
				$("#mail").prop( "disabled", true );
			}
			else
			{
				$('#4').text("");
				$("#mail").prop( "disabled", false);
			}
		
	});
	
	$("#mail").blur(function()
	{
		var email_pattern = $('#mail').val();
		if(!email_regex.test(email_pattern))
		{
		$("#mail").focus();
		$('#5').text("* This is not the valid format of email! *");
		$("#phone").prop( "disabled", true);
		//return false;
		}
		else
		{
		$('#5').text("");
		$("#phone").prop( "disabled", false);
		}
	});
	$("#phone").blur(function()
	{ 	   var phone_pattern = $('#phone').val();
		  if(!phone_regex.test(phone_pattern))
		{
		$("#phone").focus();
		$('#6').text("* Please enter the phone number correctly! *");
		$("#check").prop( "disabled", true);
		//return false;

		}
		else
		{
		$('#6').text("");
		$("#check").prop( "disabled", false);
		}
	})
	
	$("#check").click(function()
	{
	     // alert("chekin");
			if($('#check').is(':checked'))
			{  //	alert("chekin");
				$("#btn_submit").prop( "disabled", false);
			}
			else
			    $("#btn_submit").prop( "disabled", true);
	
	});
	
	
	$("#firstname").blur(function()
	{	var title_pattern =  $('#firstname').val();
		if(!title_regex.test(title_pattern))
		{
			$("#firstname").focus();
			$('#2').text("* For your name please use alphabets only! *");
			$( "#lastname" ).prop( "disabled", true );
			//flag=true;
		}
		else
		{
			$('#2').text("");
			$( "#lastname" ).prop( "disabled", false );
		
		}
		//alert("hello2");
	});
	
	
		$("#lastname").blur(function()
	{	var title_pattern =  $('#lastname').val();
		if(!title_regex.test(title_pattern))
		{
			$("#lastname").focus();
			$('#2').text("*  please use alphabets only! *");
			$( "#email" ).prop( "disabled", true );
			//flag=true;
		}
		else
		{
			$('#2').text("");
			$( "#email" ).prop( "disabled", false );
		
		}
	
	});
		$("#email").blur(function()
	{			
		 email_pattern = $('#email').val();
		if(!email_regex.test(email_pattern))
		{
		$("#email").focus();
		$('#4').text("* This is not the valid format of email! *");
		$("#confirmemail").prop( "disabled", true);
		//return false;
		}
		else
		{
		$('#4').text("");
		$("#confirmemail").prop( "disabled", false);
		}
	});
	$("#confirmemail").blur(function()
	{
		
		var email_pattern1 = $('#confirmemail').val();
		if( email_pattern==email_pattern1)
		{
		
		$('#5').text("");
		$("#zipcode").prop( "disabled", false);
		
		//return false;
		}
		else
		{
		$("#confirmemail").focus();
		$('#5').text("*plss enter same email as above! *");
		$("#zipcode").prop( "disabled", true);
		}
	});
	
	$("#zipcode").blur(function()
	{  
     	var zipcode_pattern = $('#zipcode').val();
		
		if(!zipcode_regex.test(zipcode_pattern))
		{
		
		$("#zipcode").focus();
		$('#6').text("* This is not the valid zipcode! *");
		$("#password").prop( "disabled", true);
			//return false;
        }
		else
		{
		$('#6').text("");
		$("#password").prop( "disabled", false);
		}
	
	});
	
	$("#password").blur(function(){
	    password_pattern = $('#password').val();
	   
	   
	   
		if(!password_regex.test(password_pattern))
		{
			$("#password").focus();
			$('#7').text("* Invalid password!Atleast one capital letter and numeric *");
			$("#confirmpassword").prop( "disabled", true);
			//return false;
		}
		else
		{
			$('#7').text("");
			$("#confirmpassword").prop( "disabled", false);
		}
	});
	$("#confirmpassword").blur(function(){
		var password_pattern2 = $("#confirmpassword").val();
		if(password_pattern==password_pattern2)
		{
			$('#8').text("");
			$("#check2").prop( "disabled", false);
		}
		else
		{
			$("#password").focus(); 
			$('#8').text("* enter same password as above *");
			$("#check2").prop( "disabled", true);
		}
	   
	
	});
	
	$("#check2").click(function()
	{
	      
			if($('#check2').is(':checked'))
			{  	
				$("#btn_submit1").prop( "disabled", false);
			}
			else
			    $("#btn_submit1").prop( "disabled", true);
	
	});
	
	
	
});
