var title_regex = /^[a-zA-Z]+$/;
var contact_regex = /^[a-zA-Z]+$/;
var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var phone_regex = /^[0-9]{10}\b$/;

function dealregistrationValidation()
{
	var category_pattern =  $('#category').val();
	var title_pattern =  $('#title').val();
	var desc_pattern = $('#description').val();
	var contact_pattern = $('#contact').val();
	var email_pattern = $('#email').val();
	var phone_pattern = $('#phone').val();
	/*if(title_regex.length == 0)
	{
		$('#head').text("* All fields are mandatory *"); //this segment displays the validation rule for all fields
		$("#title").focus();
		return false;
	}*/
		
		//  Validating name field.
	
	if(category_pattern=="Please Select")
	{
		$("#category").focus();
		$('#1').text("* Please select any one category! *");
		return false;
	}
	else
	{
		$('#1').text("");
	}
	


	if(!title_regex.test(title_pattern))
	{
  		$("#title").focus();
  		$('#2').text("* For your title please use alphabets only! *");
		return false;
	}
	else
	{
		$('#2').text("");
	}
   

   if (desc_pattern==null||desc_pattern=="") 
	{
		$("#description").focus();
		$('#3').text("* Please enter some description! *");
		return false;
	}
	else
	{
		$('#3').text("");
	}


	if(!contact_regex.test(contact_pattern))
	{
		$("#contact").focus();
		$('#4').html("* For contact name please use alphabets only! *");
		return false;
	}
	else
	{
		$('#4').text("");
	}
	

	if(!email_regex.test(email_pattern))
	{
		$("#email").focus();
		$('#5').text("* This is not the valid format of email! *");
		return false;
	}
	else
	{
		$('#5').text("");
	}
	

	if(!phone_regex.test(phone_pattern))
	{
		$("#phone").focus();
		$('#6').text("* Please enter the phone number correctly! *");
		return false;

	}
	else
	{
		$('#6').text("");
	}
}






   