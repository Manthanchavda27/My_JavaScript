let count = 0;

function increaseCount(){
    count++;
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function increaseCount(){
    count++;
    displayCount();
}

function checkcountValue(){
    if(count==10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }else if(count==20){
        alert("Your Instagram Post gained 20 followers! Keep it up!");
    }
}

function increaseCount(){
    count++;
    displayCount();
    checkcountValue();
}