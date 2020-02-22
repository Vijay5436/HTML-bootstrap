function username()
{
var user = document.getElementById("user").value;
if(user.length<3)
{
document.getElementById('a1').innerHTML="must 3 character include";
}
}

function emailid(){
    var email=document.getElementById("email").value;
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
      if(regex.test(email)== true)
      {
       
        document.getElementById("a2").innerHTML="";
      }
      else{
        document.getElementById("a2").innerHTML="This is not a valid email address";
        return false;
      }
    }
      function password()
      {
        var pas=document.getElementById("pass").value;
        console.log(pas);
        var regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(regex.test(pas)==true)
        {
          console.log("valid")
          document.getElementById("a3").innerHTML="";
        }
        else{
          console.log("invalid")
          document.getElementById("a3").innerHTML="password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        }
      }
      function cpassword()
      {
        var pas=document.getElementById("pass").value;
        var cpas=document.getElementById("cpass").value;
        if(pas==cpas)
        {
          document.getElementById("a4").innerHTML="";
        }
        else{
          document.getElementById("a4").innerHTML="password is not match";
        }
  
      }
    function bio()
    {
      var v=document.getElementById("bios").value.length;
      
      var charactersLeft =140-v;
      document.getElementById("count").innerHTML="characters left: "+charactersLeft;
  
    }
    
  

    
     

