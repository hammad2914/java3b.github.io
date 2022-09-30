function firstname(){
    var first = document.getElementById("name1");
    if (first.value === ""){
        name1.style.border= "2px solid red"
    }
}

function lastname(){
    var last = document.getElementById("name2");
    if (last.value === ""){
        name2.style.border= "2px solid red"
    }
}

function num(){
    var phn = document.getElementById("phone");
    if (phn.value === "" || phn.value.length != 11){
        phone.style.border= "2px solid red"
    }
}

function mail(){
    var mail1 = document.getElementById("email");

    if (mail1.value === "" || mail1.value.indexOf("@") === -1 ){
        email.style.border= "2px solid red"
    }
}

function code(){
    var zip = document.getElementById("zipcode");
    if (zip.value === "" || zip.value.length != 5){
        zipcode.style.border= "2px solid red"
    }
}


function submit(){
    var first = document.getElementById("name1");
    if (first.value === ""){
        alert("Please Enter FirstName!");
    }

    var last = document.getElementById("name2");
    if (last.value === ""){
        alert("Please enter lastName!");
    }

    var phn = document.getElementById("phone");
    if (phn.value === "" || phn.value.length != 11){
        alert("Enter a valid Phone Number!")
    }

    var mail1 = document.getElementById("email");
    if (mail1.value === "" || mail1.value.indexOf("@") === -1 ){
        alert("Enter a valid Email Address!")
    }

    var zip = document.getElementById("zipcode");
    if (zip.value === "" || zip.value.length != 5){
        alert("Enter a valid ZipCode!")
    }
    
    
    
}
