  var firstname_regex = /^[A-Za-z]{3,20}$/;
  var lastname_regex = /^[A-Za-z]{3,20}$/;
  var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var confirmemail_regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var zipcode_regex=/^[0-9]{6}$/;
  var password_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;
  var confirmpassword_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;

    function validateForm()
  {
    
    var first_pattern=$('#firstname').val();
    var last_pattern=$('#lastname').val();
    var mi_pattern =  $('#mi').val();
    var email_pattern = $('#email').val();
    var confirmemail_pattern=$('#confirmemail').val();
    var zipcode_pattern = $('#zipcode').val();
    var password_pattern = $('#password').val();
    var confirmpassword_pattern = $('#confirmpassword')

    if (!firstname_regex.test(first_pattern)) 
    {
	    $("#firstname").focus();
      $("#1").html("* For your first name please use alphabets only! *");
      return false;
    }
    else
    {
      $("#1").html("");
    }

    if (!lastname_regex.test(last_pattern)) 
    {
      $("#lastname").focus();
      $("#2").html("* For your last name please use alphabets only! *");
      return false;
    }
    else
    {
      $("#2").html("");
    }

    if(mi_pattern=="Please Select")
    {
      $("#mi").focus();
      $('#3').text("* Please select any one category! *");
      return false;
    }
    else
    {
     $('#3').text("");
    }

    if(!email_regex.test(email_pattern))
    {
     $("#email").focus();
     $('#4').text("* This is not the valid format of email! *");
     return false;
    }
   else
    {
     $('#4').text("");
    }

    if(!confirmemail_regex.test(confirmemail_pattern)||confirmemail_pattern!=email_pattern)
    {
      $("#confirmemail").focus();
      $('#5').text("* Emial-id doesn't match! *");
      return false;
    }
    else
    {
      $('#5').text("");
    }

    if(!zipcode_regex.test(zipcode_pattern))
    {
     $("#zipcode").focus();
     $('#6').text("* This is not the valid zipcode! *");
     return false;
    }
   else
    {
     $('#6').text("");
    }

    if(!password_regex.test(password_pattern))
    {
      $("#password").focus();
      $('#7').text("* This is not the valid password! *");
      return false;
    }
   else
    {
      $('#7').text("");
    }


    if (!confirmpassword_pattern.test(password_pattern))
    {
      $("#confirmpassword").focus();
      $('#8').text("* Password doesn't match! *");
      return false;
    }
   else
    {
      $('#8').text("");
    }


  
  }

	
   