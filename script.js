const button = document.getElementById("button");

button.addEventListener("click", roll);

function roll(){
    let firstdie= document.getElementById("dieone");
    let seconddie= document.getElementById("dietwo");
    let first= Math.floor(Math.random() * (6) + 1);
    let second= Math.floor(Math.random() * (6) + 1);
    console.log(first);
    console.log(second);

    if(first==1){
        firstdie.src = "one.png";
    }
    if(first==2){
        firstdie.src = "two.png";
    }
    if(first==3){
        firstdie.src = "three.png";
    }
    if(first==4){
        firstdie.src = "four.png";
    }
    if(first==5){
        firstdie.src = "five.png";
    }
    if(first==6){
        firstdie.src = "six.png";
    }

    
    if(second==1){
        seconddie.src = "one.png";
    }
    if(second==2){
        seconddie.src = "two.png";
    }
    if(second==3){
        seconddie.src = "three.png";
    }
    if(second==4){
        seconddie.src = "four.png";
    }
    if(second==5){
        seconddie.src = "five.png";
    }
    if(second==6){
        seconddie.src = "six.png";
    }
    let total= first+second; 
    sum.textContent=`Total: ${total}`;
}

