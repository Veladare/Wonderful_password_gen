// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmlower;
var confirmupper;
var confirminterger;
var confirmspecial;
var userchoice;


var PasswordLength

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var interger = '0123456789';
var special = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
PasswordLength = prompt("How many characters would you like for your password? Choose between 8 and 128");
console.log("Password length " + PasswordLength);

if (PasswordLength == null) {
  alert("Please type in a value!")
}
else if (PasswordLength < 8 || PasswordLength > 128) {
  PasswordLength = prompt("Select between 8 and 128 characters");
}
else{
confirmlower = confirm("add lower case characters?");
confirmupper = confirm("add upper case characters?");
confirminterger = confirm("add numbers?");
confirmspecial = confirm("add special characters?");

}if (!confirmlower && !confirmupper && !confirminterger && !confirmspecial) {
  userchoice = alert (" no items were selected!");

}else if (confirmlower && confirmupper && confirminterger && confirmspecial) {
  userchoice = lowercase + uppercase + interger + special;
  
}
else if (confirmlower && confirmupper && confirminterger) {
  userchoice = lowercase + uppercase + interger;
  
}
else if (confirmlower && confirmupper && confirmspecial) {
  userchoice = lowercase + uppercase + special;
  
}
else if (confirmlower && confirminterger && confirmspecial) {
  userchoice = lowercase + interger + special;
  
}
else if (uppercase && confirminterger && confirmspecial) {
  userchoice = uppercase + interger + special;
}


else if (confirmlower && confirmupper) {
  userchoice = lowercase + uppercase;
}
else if (confirmlower && confirminterger) {
  userchoice = lowercase + interger;
}
else if (confirmlower && confirmspecial) {
  userchoice = lowercase + special;
}
else if (confirmupper && confirminterger) {
  userchoice = uppercase + interger;
}
else if (confirminterger && confirmspecial)
  userchoice = interger + special;


else if (confirmlower){
  userchoice = lowercase;
}
else if (confirmupper){
  userchoice = uppercase;
}
else if (confirminterger){
  userchoice = interger;
}
else if (confirmspecial){
  userchoice= special;
}

var password = []

for (var i = 0; i < PasswordLength; i++) {
  var collectedchoices = userchoice[Math.floor(Math.random() * userchoice.length)];
  password.push(collectedchoices);
  
}
var password = password.join("");
return password
}
