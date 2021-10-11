function app(){
    event.preventDefault()
let text = localStorage.getItem("[object Object]");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.fname +" "+obj.lname+" "+obj.mail +" "+ obj.phone;
}