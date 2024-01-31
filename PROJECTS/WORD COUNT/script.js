let go=document.querySelector("#go");
let sentence=document.querySelector("#sentence");
let input=document.querySelector("#input");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let watch=document.querySelector("#stopwatch");
let words=document.querySelector("#words");
const allSpans = document.querySelectorAll('#words span');

console.dir(input);
console.dir(sentence);
go.addEventListener("click",() => {
     sentence.style.opacity="1";
     sentence.style.display="block";
     go.style.display="none";
     input.attributes[3]="readonly";
     input.value="PRESS START TO TEST";
});
let clock=0;

function time(){
   
    clock++;
    watch.innerHTML=clock;
    
    
}
 




start.addEventListener("click",() => {
    start.style.display="none";
    input.style.pointerEvents="all";
    input.value="";
    input.focus();
    stop.style.display="block";
    id=setInterval(time,1000);
    
    

});

 let  wordString=words.innerText;
  let wordArray=wordString.split(' ');
console.log(wordArray);

input.addEventListener("keydown",(event) =>{
    if (event.code ==='Space'){
    let inputString=input.value;
 let stringArray=inputString.split(' ');
 for(i=0;i<stringArray.length;i++){
    if(wordArray[i]==stringArray[i]){
        allSpans[i].classList.add("correct");
    }
   else{
    allSpans[i].classList.add("wrong");
   }
}}
});




stop.addEventListener("click",() => {
let inputString=input.value;
 let stringArray=inputString.split(' ');
// console.log(stringArray);
clearInterval(id);
count=0;
mistake=0;
console.log(wordArray);
console.log(stringArray);
stop.style.display="none";
input.style.pointerEvents="none";


for(i=0;i<stringArray.length;i++){
    if(wordArray[i]==stringArray[i]){
        count++;
        allSpans[i].classList.toggle("correct");
    }
   else{
      mistake++;
   }
}
console.log(count,mistake);


});



