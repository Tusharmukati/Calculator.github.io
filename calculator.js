const button = document.getElementsByClassName("btn");
const sta = document.getElementById("statements");
const res= document.getElementById("result");
const clickSound = new Audio("click.wav");
const alwaysSound= new Audio("Inazuma.mp3")
for(i=0;i<button.length;i++){
    button[i].addEventListener('click',clicked);
}

function clicked(){
    var txt= this.innerText;
    console.log(txt)
    alwaysSound.play()
    clickSound.play()

if(txt=="AC"){
    res.innerHTML="";
    sta.innerHTML="";
}else if(txt=="="){
  
    res.innerHTML=eval(output.innerText)
}
else{
    sta.innerHTML+=txt;
}
}



