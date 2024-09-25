let email = document.querySelector(".email_signup");
let password1 = document.querySelector(".passwd");
let password2 = document.querySelector(".passwd2");
let submit = document.querySelector(".btn_submit");

submit.onclick = function() {
    if (!((email.value).includes("@"))){
        console.log("Email is not valid");
        alert("Email is not valid");
    }else{
        console.log("Email is valid");
        if ( password1.value === password2.value){
            console.log("password is valid");
        }else{
            console.log("Password isn't valid");
        }
    }
}