let randomNum;
let computerInput;
let computerChoice;
let result;
let screen;
let score=0;
document.querySelector("#score").innerText='Score='+score;
function bat(){
 randomNum=Math.random()*3;
 let userInput='bat';
 let userChoice='User choose:Bat';
 
 if(randomNum>=0 && randomNum<=1){
   computerInput='bat';
  computerChoice='Computer choose:Bat';
 }
 else if(randomNum>=1 && randomNum<=2){
  computerInput='ball';
  computerChoice='Computer choose:Ball';
 }
 else if(randomNum>=2 && randomNum<=3){
 computerInput='stump';
computerChoice='Computer choose:stump';
 }


if(computerInput==='bat'){
 result='Match is tie';
 score=score ;
} 
else if(computerInput==="ball"){
 result='You are winner';
 score+=10;
}
else if(computerInput==='stump') {
 result='Computer is winner';
 if(score!==0){
 score-=5;
 }
}

document.querySelector("#showres").innerText=`${userChoice}\n ${computerChoice}\n\nResult: ${result}`;

document.querySelector("#score").innerText='Score='+score;
}


function ball(){
 randomNum=Math.random()*3;
 let userInput='ball';
 let userChoice='User choose:Ball';
// console.log(randomNum);
 
 if(randomNum>=0 && randomNum<=1){
   computerInput='bat';
  computerChoice='Computer choose:Bat';
 }
 else if(randomNum>=1 && randomNum<=2){
  computerInput='ball';
  computerChoice='Computer choose:Ball';
 }
 else if(randomNum>=2 && randomNum<=3){
 computerInput='stump';
computerChoice='Computer choose:stump';
 }


if(computerInput==='bat'){
 result='Computer Is Winner';
 if(score!==0){
 score-=5;
 }
} 
else if(computerInput==="ball"){
 result='Match Is Tie';
 score=score;
}
else if(computerInput==='stump') {
 result='You are Winner';
 score+=10;
}

document.querySelector("#showres").innerText=`${userChoice}\n ${computerChoice}\n\n Result:${result}`;
document.querySelector("#score").innerText='Score='+score;
}


function stump(){
 randomNum=Math.random()*3;
 let userInput='stump';
 let userChoice='User choose:Stump';
// console.log(randomNum);
 
 if(randomNum>=0 && randomNum<=1){
   computerInput='bat';
  computerChoice='Computer choose:Bat';
 }
 else if(randomNum>=1 && randomNum<=2){
  computerInput='ball';
  computerChoice='Computer choose:Ball';
 }
 else if(randomNum>=2 && randomNum<=3){
 computerInput='stump';
computerChoice='Computer choose:stump';
 }


if(computerInput==='bat'){
 result='You Are Winner';
 score+=10;
} 
else if(computerInput==="ball"){
 result='Computer Is winner';
 if(score!==0){
  score-=5;
 }
}
else if(computerInput==='stump') {
 result='Match Is Tie';
 score=score;
}

document.querySelector("#showres").innerText=`${userChoice}\n ${computerChoice}\n\n Result:${result}`;
document.querySelector("#score").innerText='Score='+score;

}
