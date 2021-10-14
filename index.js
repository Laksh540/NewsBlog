// alert("hello");
var columnCount =document.getElementById("column-count").children;
var btnClick =document.getElementById("show-more");
var loadingGif=document.getElementsByClassName("spinner-border")[0];
var seeMore = true;
var count =8;
loadingGif.style.display="none";
//console.log(columnCount);
function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 150,
    });
}
for(let j=count;j<columnCount.length;j++){
   columnCount[j].style.display ="none";
}
function addNewItems(){
    if(seeMore){
            count = count+4;
    if(count > columnCount.length){
        count = columnCount.length;
        
    }
   loadingGif.style.display="block";
   btnClick.style.display="none";

    setTimeout(function(){
       
        for(let i=0;i<count;i++){
            columnCount[i].style.display ="block"; 
            if(i == columnCount.length-1){
            btnClick.textContent="See Less"; 
            seeMore = false;
            } 
        }
        loadingGif.style.display="none"; 
        btnClick.style.display="block";
    },2000)
    
    }
    else{
        count = 8;
        // console.log(count);
    loadingGif.style.display="block";
    btnClick.style.display="none";
    setTimeout(function(){
        for(let i=count;i<columnCount.length;i++){
                columnCount[i].style.display ="none"; 
            } 
        loadingGif.style.display="none"; 
        btnClick.style.display="block";
    },2000)
    btnClick.textContent="See More"; 
    scrollTo(columnCount);
    seeMore = true;

    }
    
}
btnClick.addEventListener("click",addNewItems);