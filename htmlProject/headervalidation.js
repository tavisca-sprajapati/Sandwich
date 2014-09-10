var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var zipcode_regex=/^[0-9]{6}$/;


      function lemailValidation()
      {
        var email = $("#txtEmail").val();
        if (!email_regex.test(email)) {
        
        $("#email_failed").html("Enter valid Email Id");
        return true;
        }
        else {
            $("#email_failed").html("");
        }
      }

    function lzipValidation()
      {
        var zip = $("#zip").val();
        if (!zipcode_regex.test(zip)) {
        
        $("#zip_failed").html("Enter valid Zip code");
        return true;
        }
        else {
            $("#zip_failed").html("");
        }
      }


function checkvalidation()
{
   
    lemailValidation();
    lzipValidation();
    

   

    var flag = true;

    if (lemailValidation()) {
        flag = false;
    }
    if (lzipValidation()) {
        flag = false;
    }
    
    return flag;
}

  