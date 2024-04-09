let upbtn = document.getElementById('btn');
let burgerbtn = document.getElementById('br-btn');
let burgerl = document.querySelector('.burger');
let nav = document.querySelector('nav');
window.onscroll = function(){
    if (scrollY > 200){
        upbtn.style.display = 'block';
        nav.style.position = 'fixed';
        nav.classList.add('none');
    }
    else{
        upbtn.style.display = 'none';
        nav.style.position = 'relative';
        nav.classList.remove('none');
    }
}
upbtn.onclick = function(){
    window.scroll({
        left:0,
        top:0,
        behavior:'smooth'
    });
}
burgerbtn.onclick = function(){
    burgerl.classList.add('show');
}
document.getElementById('close').onclick = function(){
    burgerl.classList.remove('show');
    console.log(burgerl);
}
let birthyear = window.prompt("enter your birthyear please");
let age = (birthyear - 2024);
confirm("your age is "+age);
document.getElementById('mouse').onmouseenter = function(){
    document.getElementById('mouse').style.textDecoration = 'underline';
}
document.getElementById('mouse').onmouseleave = function(){
    document.getElementById('mouse').style.textDecoration = 'none';
}
let image = document.getElementById('image');
image.onclick = function(){
    image.src = 'img/WhatsApp Image 2024-03-28 at 05.28.46_4f0e3b4b.jpg';
}
const username = prompt('enter your name please');
document.getElementById('name').innerHTML = username;
emailtr = ('barmijnynet@gmail.com');
document.getElementById('sub').onclick = function(){
    if (document.getElementById('email').value == emailtr){
        confirm('email is correct');
        console.log(username);
    }
    else{
        confirm('try again please');
    }
}
document.getElementById('change-color').onmouseenter = function(){
    document.getElementById('change-color').style.backgroundColor = "#e94f37";
    document.getElementById('change-color').style.color = "white";
}
document.getElementById('change-color').onmouseleave = function(){
    document.getElementById('change-color').style.backgroundColor = "#f6f7eb";
    document.getElementById('change-color').style.color = "#232628";
}
let student = {
    name: username,
    learn: 'html,css,js,appinventor',
    thef:function(){
        if(student.name=='omar'){
            console.log("You are a great colleague omar and i like you");
        }
        if(student.name=='rabab'){
            console.log("You are very hardworking and I appreciate that");
        }
        if(student.name=='ahmed'){
            console.log("4an mogtahed bs ra7 5las blash 7d tani yero7 3shan hz3l");
        }
        if(student.name=='yassin'){
            console.log("im proud of you");
        }
        if(student.name=='omnia'){
            console.log("you the best teacher ever and i hope goodluck foryou");
        }
    }
}
console.log(student.thef());
console.log(student.learn);
let date = new Date();
let dayweeknumber = date.getDay(); 
let day;
let quote;
let img_t = document.getElementById("mi");
switch (dayweeknumber){
    case 0:
        day = "sunday";
        quote = "thats time to enter session";
        img_t.src = "icon/first icon img.png";
        break;
    case 1:
        day = "monday";
        quote = "that is time to meet with freinds";
        img_t.src = "icon/second icon img.png";
        break;
    case 2:
        day = "tuesday";
        quote = "i cant do anything i have 3 lessons today";
        img_t.src = "icon/3.png";
        break;
    case 3:
        day = "wendesday";
        quote = "i have 2 lessons today but i will work";
        img_t.src = "icon/4.png";
        break;
    case 4:
        day = "Thursday";  
        quote = "i will learn new programming skill";
        img_t.src= "icon/5.png";
        break;
    case 5:
        day = "friday";
        quote = "i should work today too";
        img_t.src = "icon/4.png";
        break;
    case 6:
        day = "saturday";
        quote="that is my programming day";
        img_t.src = "icon/cloud.png";
        break;
}
document.getElementById("day").innerHTML = day;
document.getElementById("quote").innerHTML = quote;
document.getElementById("day-div").onclick = function(){
    document.getElementById("day-div").style.display = "none";
    document.getElementById("day-show").style.display ="block";
}
document.getElementById("day-show").onclick = function(){
    document.getElementById("day-div").style.display = "block";
    document.getElementById("day-show").style.display = "none";
}
let servicesbtn = document.getElementById('ser');
let servicesbtn2 = document.getElementById('ser-m');
servicesbtn.onclick = function(){
    confirm('important note: thats the services we offer');
}
servicesbtn2.onclick = function(){
    confirm('important note: thats the services we offer');
}
//end