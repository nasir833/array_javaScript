//----------------------------------------------- SECOND ASSIGNMENT -----------------------------------------------
// Clear input 
document.querySelector(".clear-input").addEventListener("click",function(){
    document.querySelector(".userv").value="";
});

// Simple alert 
document.querySelector(".simpl-alert").addEventListener("click",function(){
    var inputValue = document.querySelector(".userv").value;
    if (!inputValue==""){
        document.querySelector(".input").textContent=inputValue;
        document.querySelectorAll(".output")[1].innerHTML=inputValue;
        alert(inputValue); 
    }
    else{
        alert("Enter value in input field")
    }
});

// Print my name
document.querySelector(".print-name").addEventListener("click",function(){
    var inputValue = document.querySelector(".userv").value; 
    if (!inputValue==""){
        let inputValueFirstLetter = inputValue.slice(0,1);
            inputValueFirstLetter = inputValueFirstLetter.toUpperCase();
        let inputValueRemainLetter = inputValue.slice(1,inputValue.length);
            inputValueRemainLetter = inputValueRemainLetter.toLowerCase();
        let fullInputValue = inputValueFirstLetter + inputValueRemainLetter;
        document.querySelector(".input").textContent=fullInputValue;
        document.querySelectorAll(".output")[1].innerHTML=fullInputValue;
    }
    else{
        alert("Enter value in input field")
    }
});

// Add city
        var cities =[];
document.querySelector(".add-city").addEventListener("click",function(){
        document.querySelectorAll(".output")[1].innerHTML="";
        let newCity = document.querySelector(".userv").value;
        cities.push(newCity);
        if (newCity !=="") {
            for (let i=0; i<cities.length; i++) {
                document.querySelector(".input").innerHTML =`document.querySelector(".add-city").addEventListener("click",function(){
                    let cities =new Array();
                    let newCity = document.querySelector(".userv").value;
                
                    cities.push(newCity)
                
                    if (newCity !=="") {
                        // document.querySelectorAll(".output")[1].innerHTML ="";
                        for (let i=0; i<cities.length; i++) {
                            document.querySelector(".input").innerHTML += i+1+" : "+cities[i] +"<br>";
                            document.querySelectorAll(".output")[1].innerHTML +=cities[i]
                        }
                    }
                    else {
                        alert('Please fill input field')
                    }
                });`;
                document.querySelectorAll(".output")[1].innerHTML +=i+1+": "+cities[i]+"<br>";
            }
        }
        else {
            alert('Please fill input field')
        }
    });

// Print All cities
document.querySelector(".print-city").addEventListener("click",function(){
    document.querySelector(".input").innerHTML ="";
    document.querySelectorAll(".output")[1].innerHTML="";
    const cities = ["faisalabad","lahore","karachi","pindi","islamabad"];
        for(var i=0; i<cities.length; i++){
            document.querySelector(".input").innerHTML =`document.querySelector(".print-city").addEventListener("click",function(){
                document.querySelector(".input").innerHTML ="";
                document.querySelectorAll(".output")[1].innerHTML="";
                const cities = ["faisalabad","lahore","karachi","pindi","islamabad"];
                    for(var i=0; i<cities.length; i++){
                        document.querySelector(".input").innerHTML += i+1+": "+cities[i] +"<br>";
                        document.querySelectorAll(".output")[1].innerHTML +=i+1+": "cities[i]+ "<br>";
                        }
            });`;
            document.querySelectorAll(".output")[1].innerHTML +=i+1+": "+cities[i]+ "<br>";
            }
});
    
// Generate table 
document.querySelector(".gen-tbl").addEventListener("click",function(){
    document.querySelector(".input").innerHTML ="";
    document.querySelectorAll(".output")[1].innerHTML="";
    var inputValue =document.querySelector(".userv").value;
        if (inputValue==parseInt(inputValue)){
            for(var i=1; i<=10; i++){
                document.querySelector(".input").innerHTML = `  if (inputValue==parseInt(inputValue)){
                    for(var i=1; i<=10; i++){
                        document.querySelector(".input").innerHTML +=( inputValue + " * "+i+" = " +(inputValue*i)) + "<br>";
                        document.querySelectorAll(".output")[1].innerHTML +=( inputValue + " * "+i+" = " +(inputValue*i)) + "<br>"; 
                    }
                }
                else{
                    alert("Enter value in input field")
                };`
                document.querySelectorAll(".output")[1].innerHTML +=( inputValue + " * "+i+" = " +(inputValue*i)) + "<br>"; 
            }
        }
        else{
            alert("Enter value in input field")
        }
});

// Clear individual 
document.querySelectorAll(".clear")[1].addEventListener("click",function(){
    document.querySelector(".input").innerHTML="";
});
document.querySelectorAll(".clear")[2].addEventListener("click",function(){
    document.querySelectorAll(".output")[1].innerHTML="";
});

// Clear both
document.querySelector(".clr-bth").addEventListener("click",function(){
    document.querySelector(".input").innerHTML="";
    document.querySelectorAll(".output")[1].innerHTML="";
});

// Delete last 
// we will use above array as it has global scope
document.querySelector(".dlt-btn").addEventListener("click",function(){ 
    var outputData = document.querySelectorAll(".output")[1].innerHTML;
    if (!outputData==""){
        cities.pop();
        document.querySelectorAll(".output")[1].innerHTML="";
        for(var i=0; i<cities.length; i++){
            document.querySelectorAll(".output")[1].innerHTML +=i+1+": "+cities[i]+ "<br>";
            }
    }
    else{
        alert("Output is empty")
    }
});
// Copyright year 
var copyRightYear=new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML=`<em>${copyRightYear}</em>`;