

var x=[];

function signup(){
    event.preventDefault();
    //console.log('working')
    
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var mail=document.getElementById("mail").value
    var phone=document.getElementById("phone").value


    user={

        fname: fname,
        lname: lname,
        mail: mail,
        phone: phone,
    }
    
    
     


    var json= JSON.stringify(user);
    localStorage.setItem(user, json)
    

}
