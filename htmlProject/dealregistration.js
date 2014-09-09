
//var ck_title = document.dealregistrationForm.title.value ;
//var ck_description=document.dealregistrationForm.description.value;
var ck_contactname=/^[A-Za-z_ ]{3,20}$/;
var ck_mail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var ck_phone=/^[0-9]{10}\b$/;


function dealregistrationValidation()
{
  var ck_category=document.getElementById("dropdown");
    var selected_value=ck_category.options[ck_category.selectedIndex].value;
    var contact_name=dealregistrationForm.contactname.value;
    var mail_id=dealregistrationForm.email.value;
    var phone_no=dealregistrationForm.phone.value;
    var ck_title = document.dealregistrationForm.title.value ;
    var ck_description=document.dealregistrationForm.description.value;


    if(selected_value==0)
    {
      //alert("please select a Category!!!");
      document.getElementById("1").innerHTML="Invalid choice";
      return false;
    }
    else
    {
       document.getElementById("1").innerHTML="";  
    }
    if(ck_title==""||ck_title==null)
    {
      //alert("Please enter some title!!!");
      document.getElementById("2").innerHTML="This field cannot be blank";
      return false;
    }
    else
    {
       document.getElementById("2").innerHTML="";   
    }
    if(ck_description==""||ck_description==null)
    {
      //alert("Please provide some description!!!");
      document.getElementById("3").innerHTML="This field cannot be blank";
      return false;
    }
    else
    {
      document.getElementById("3").innerHTML="";
    }
    if (!contact_name.match(ck_contactname)) 
    {
      //alert("Please enter a valid contact Name!!!");
      document.getElementById("4").innerHTML="This field cannot be blank";
      return false;
    }
    else
    {
      document.getElementById("4").innerHTML="";
    }
    if(!ck_mail.test(mail_id))
    {
      //alert("Please enter a valid email id!!!");
      document.getElementById("5").innerHTML="This field cannot be blank";
      return false;
    }
    else
    {
      document.getElementById("5").innerHTML="";
    }
    if(!ck_phone.test(phone_no))
    {
      //alert("Please enter a valid phone_no");
      document.getElementById("6").innerHTML="This field cannot be blank";
      return false;
    }
    else
    {
      document.getElementById("6").innerHTML="";
    }
}
