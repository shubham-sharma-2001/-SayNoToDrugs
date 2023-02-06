// function validation()
// {
//     var email=document.forms['submits']['email'].value;
//     var pass = document.forms['submits']['psw'].value;
//     var cnpass = document.forms['submits']['psw-repeat'].value;

//     if(email == "")
//     {
//         window.alert("Email field is empty");
//         email.focus();
//         return false;
//     }
//     if(pass =="")
//     {
//         window.alert("Enter password first");
//         pass.focus();
//         return false;

//     }

//     if(cnpass == "")
//     {
//         window.alert("Confirm password is left");
//         cnpass.focus();
//         return false;
//     }
//     return true;
// }

function validation()
{
    var email = document.getElementById('email').value; 
    var pass = document.getElementById('psw').value; 
    var cnpass = document.getElementById('psw-repeat').value; 
 
    if(email =="")
    {
        swal.fire({
            icon:"error",
            title:'Error!',
            text:"Username is required!",
        });
        return false;
    }
}