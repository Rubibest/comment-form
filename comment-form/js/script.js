function addComments() {

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let telephone = document.querySelector("#telephone");
let message = document.querySelector("#message");

let error = "";
if (name.value == "" || email.value == "" || telephone.value == "") {
  error = "Not the all fields full!";
} else if (!email.value.includes('@')) {
  error = "Field is not corectly";
} else if (message.value.length < 50 || message.value.length >= 400) {
  error = "Message has to be beetwin 50 to 400 symbols";
}

let messageErrorUser = document.querySelector("#messageErrorUser");

if (error != "") {
    messageErrorUser.style.display = "block";
    messageErrorUser.innerHTML = error;
    return false;
}

let comment = "<div class='comment'><b>Email:</b>" + email.value + "<br><b>Name:</b> " + name.value + "<br><b>Telephone:</b> " + telephone.value + "<br>" + message.value + "</div>";
document.querySelector("#allComments").innerHTML = comment + document.querySelector("#allComments").innerHTML;

let color = "green";
name.value = "";
name.style.borderColor = color;

email.value = "";
email.style.borderColor = color;

telephone.value = "";
telephone.style.borderColor = color;

message.value = "";
message.style.borderColor = color;

messageErrorUser.style.display = "none";
document.querySelector("#send").innerHTML = "Ready";
}
