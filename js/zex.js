function show_login()
{
        document.querySelector('.fm-dialog').style.position="fixed"; 
        document.querySelector('.login-1').style.display="block"; 
}

function show_registre()
{
        document.querySelector('.fm-dialog').style.position="fixed"; 
        document.querySelector('.reg-1').style.display="block"; 
}

function hide()
{
        document.querySelector('.fm-dialog').style.position="unset"; 
        document.querySelector('.reg-1').style.display="none";
        document.querySelector('.login-1').style.display="none";
}

function switch_to_sign() 
{
        document.querySelector('.reg-1').style.display="none";
        document.querySelector('.login-1').style.display="block";
}
function switch_to_reg() 
{
        document.querySelector('.reg-1').style.display="block";
        document.querySelector('.login-1').style.display="none";
}

function required()
{
var empt = document.getElementsByName["email1"].value;
if (empt != "")
{
        document.querySelector('.label').style.font="13px";
        document.querySelector('.label').style.top="18px";
}
}