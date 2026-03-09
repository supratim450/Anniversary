let currentPage = 1;

function typeMessage(){

let text="Thank you for coming into my life, you are the best, you are the most precious, you have made my life full of colours and with you i am always winning in life, thank you for everything 💖";

let i=0;

let speed=50;

function typing(){

if(i<text.length){

document.getElementById("typed").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}
