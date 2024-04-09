let firstname = document.getElementById('first').value;
let secondname = document.getElementById("second").value;
let values1 = document.getElementById("country").value;
let values2 = document.getElementById("birthday").value;
let values3 = document.getElementById("email").value;
document.getElementById("submit").onclick = function(){
    console.log("your country is " +document.getElementById("country").value);
    console.log("your birthdate is " +document.getElementById("birthday").value);
    console.log("your name is " + document.getElementById('first').value +" "+ document.getElementById("second").value);
    console.log("your email is "+document.getElementById("email").value);
    localStorage.setItem(document.getElementById("email").value ,"email");
    localStorage.setItem(document.getElementById("birthday").value , "birthday");
    localStorage.setItem(document.getElementById("country").value , "country");
    setTimeout(function(){
        localStorage.clear();
    },60000)
    if(document.getElementById("email").value == "barmijnynet@gmail.com"){
        confirm("your email is correct");
        location.href("index.html");
    }
    else{
        confirm("please try again;")
    }
    localStorage.setItem(document.getElementById('first').value + document.getElementById('second').value , "fullname");
    document.getElementById("first-d").innerHTML = ("your country is: " +document.getElementById("country").value);
    document.getElementById("second-d").innerHTML = ("your birthdate is: " +document.getElementById("birthday").value);
    document.getElementById("third-d").innerHTML = ("your fullname is: " + document.getElementById('first').value +" "+ document.getElementById("second").value);
    document.getElementById("fourth-d").innerHTML = ("your email is: "+document.getElementById("email").value);
}
document.getElementById("day-show").onclick = function(){
    document.getElementById("n").style.display = "block";
}
document.getElementById("n").onclick = function(){
    document.getElementById("n").style.display = "none";
}
setTimeout(function(){
    document.getElementById('loader').style.display = 'none';
},1000);
//i think the js coding is ended now