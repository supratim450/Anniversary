let currentPage = 1;

function nextPage(){

document.getElementById("page"+currentPage).classList.remove("active");

currentPage++;

if(currentPage>3){
currentPage=3;
}

document.getElementById("page"+currentPage).classList.add("active");

}