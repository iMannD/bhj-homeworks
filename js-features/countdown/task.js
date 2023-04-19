const countDown  = function(){
    const secs = document.getElementById("timer");

    if (secs.textContent >= 1){
        secs.textContent = secs.textContent - 1;
    }	else if(secs.textContent = '0'){
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countDown,1000)
