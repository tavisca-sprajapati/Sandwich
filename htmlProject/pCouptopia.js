  <script type="text/javascript">
  var ck_firstname = /^[A-Za-z]{3,20}$/;
  var ck_lastname = /^[A-Za-z]{3,20}$/;
  var ck_mail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var ck_confirmmail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var ck_zip=/^[0-9]{6}$/;
  var ck_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;
  var ck_confirmpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}/;


    function validateForm()
  {
    var selectMi=document.getElementById("dropdown");
    var selected_value=selectMi.options[selectMi.selectedIndex].value;
    var first_name=PassengerDetailsForm.firstname.value;
    var last_name=PassengerDetailsForm.lastname.value;
    var mail_id=PassengerDetailsForm.email.value;
    var confirm_mail=PassengerDetailsForm.confirmemail.value;
    var zip=PassengerDetailsForm.zipcode.value;
    var password=PassengerDetailsForm.password.value;
    var confirm_password=PassengerDetailsForm.confirmpassword.value;


    if (!ck_firstname.test(first_name)) 
    {
      alert("Please enter a valid First Name!!!");
      return false;
    }
    if (!ck_lastname.test(last_name)) 
    {
      alert("Please enter a valid Last name!!!");
      return false;
    }
    if(!ck_mail.test(mail_id))
    {
      alert("Please enter a vlaid email id!!!");
      return false;
    }
    if(!ck_confirmmail.test(confirm_mail)||confirm_mail!=mail_id)
    {
      alert("Email_id doesn't match!!!");
      return false;
    }
    if(!ck_zip.test(zip))
    {
      alert("Enter a correct zip code!");
      return false;
    }
    if (!ck_password.test(password)) 
    {
      alert("You must enter a valid Password ");
      return false;
    }
    if (!ck_password.test(password)||confirm_password!=password) 
    {
      alert("Password doesn't match");
      return false;
    }
    if(selected_value==0)
    {
      alert("please select a user!!!");
      return false;
    }
   
  }
  
  
   </script>