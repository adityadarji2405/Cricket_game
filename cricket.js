let randomNum;
let computerChoice;
let result;
let sc;
let userChoice;
let allScore;
let buttonPressed=false;

buttonLock();

document.querySelector("#score").innerText='Score='+score;

let newstr=localStorage.getItem('score');

document.querySelector("#start").addEventListener("click",startGame);

let t=0;
let inter;
let s=0;
let timeo;
let timeShow;
let timeShow2;
let choiceTime=5;
let time=7;


function timerCount(){
 document.querySelector(".popup2").classList.add('js-active');
 document.querySelector(".overlay").classList.add('active');
 document.querySelector("#timeCounter2").innerText=time;
 document.querySelector("#oo2").style.strokeDashoffset=125.6-(125.6*time)/7;
 document.querySelector("#dot2").style.transform=`rotateZ(${time*51.42}deg)`;
 document.querySelector(".cd").style.animation=" sta 7.5s linear";
 time--;
 if (time>=0) {
  timeShow=setTimeout(timerCount,1000);
 }
 else{
  document.querySelector(".popup2").classList.remove('js-active');
  document.querySelector(".overlay").classList.remove('active');
 
  document.querySelector("#timeCounter").innerText=5;
 document.querySelector("#oo").style.strokeDashoffset=125.6-(125.6*5)/5;
 document.querySelector("#dot").style.transform=`rotateZ(${5*72}deg)`;
  
 clearTimeout(timeShow);
 time=7;
 }
}


function choiceCount(){

 console.log(choiceTime);
 
 document.querySelector("#timeCounter").innerText=choiceTime;
 document.querySelector("#oo").style.strokeDashoffset=125.6-(125.6*choiceTime)/5;
 document.querySelector("#dot").style.transform=`rotateZ(${choiceTime*72}deg)`;
 choiceTime--;
 if (choiceTime>=0) {
  timeShow2=setTimeout(choiceCount,1000);
 }else{
  choiceTime=5;
  
  if (buttonPressed) {
  document.querySelector("#timer").innerText='Time Over, Your Result Is Show In Screen';}else{
   document.querySelector("#timer").innerText='Not Choose Any Option';
  }
  
  buttonLock();
  clearTimeout(timeShow2);
 }
}


function startGame(){
 console.log('clicked');
 buttonLock();
 timerCount();
  
  
  
  
  document.querySelector("#start").classList.add('ss');
  
  document.querySelector("#mainBody").classList.add('main');

   s++;
   console.log('s='+s);
 inter=setInterval(timer,7000);
}

function timer(){
 buttonUnlock();
 choiceCount();
document.querySelector("#timer").innerText='Choose Any One Option From Below';
 t++;
 removeDisplay();
 if(t===5){

  document.querySelector("#mainBody").classList.remove('main');
  document.querySelector("#mainBody2").classList.add('js-active');
  /*
  document.querySelector(".reset").classList.remove('js-active');*/
  clearInterval(inter);
   t=0;
 }
 
 console.log('t='+t);
 
 timeo=setTimeout(buttonPress,5000);



}
 
function buttonPress(){
 if(buttonPressed){
  buttonDeSelect(buttonName);
  buttonUnlock();
  disScore(userChoice,computerChoice, result, allScore.score);
 
 }else{
  document.querySelector("#timer").innerText='You Not Choose Any Options';
  console.log('not press button');
 }
}





reset(newstr);
function reset(newstr){
 

   allScore= newstr ? JSON.parse(newstr):{
  score:0,
 win:0,
 loss:0,
 tie:0,
 };

document.querySelector("#showres").innerText='';
document.querySelector("#score").innerText='Score='+allScore.score;
document.querySelector("#win").innerText=`Win
${allScore.win}`;

document.querySelector("#loss").innerText=`Loss
${allScore.loss}`;
document.querySelector("#tie").innerText=`Tie
${allScore.tie}`;

}


function buttonSelect(buttonName){
 document.querySelector("#"+buttonName).classList.add('js-active');
 document.querySelector("#timer").innerText='Wait For Result';
}

function buttonDeSelect(buttonName){
 document.querySelector("#"+buttonName).classList.remove('js-active');
}

 function disScore(userChoice,computerChoice,result,sc){
 document.querySelector("#showres").innerText=`User Choice Is:-${userChoice}\nComputer Choice Is:-${computerChoice}\n\n Result:-${result}`;
document.querySelector("#score").innerText='Score='+sc;
document.querySelector("#win").innerText=`Win
${allScore.win}`;

document.querySelector("#loss").innerText=`loss
${allScore.loss}`;
document.querySelector("#tie").innerText=`Tie
${allScore.tie}`;
localStorage.setItem('score',JSON.stringify(allScore));
}



function removeDisplay(){
 document.querySelector("#showres").innerText='';
}
 
document.querySelector("#score").innerText='Score='+allScore.score;
document.querySelector("#win").innerText=`Win
${allScore.win}`;

document.querySelector("#loss").innerText=`Loss
${allScore.loss}`;
document.querySelector("#tie").innerText=`Tie
${allScore.tie}`;

function genrateComputerChoice(){
 randomNum=Math.random()*3;
 if(randomNum>=0 && randomNum<=1){
   return 'Bat';
 }
 else if(randomNum>=1 && randomNum<=2){
  return 'Ball';
 }
 else if(randomNum>=2 && randomNum<=3){
 return 'Stump';
 }
}


function buttonLock(){

 document.querySelector("#bat").disabled=true;
 document.querySelector("#ball").disabled=true;
 document.querySelector("#stump").disabled=true;
}

function buttonUnlock(){
 
 
 
 document.querySelector("#bat").disabled=false;
 document.querySelector("#ball").disabled=false;
 document.querySelector("#stump").disabled=false;
}


let buttonName;


function bat(){
 buttonPressed=true;
 buttonName='bat';
  userChoice='Bat';
computerChoice= genrateComputerChoice();
result =showresult('Bat',computerChoice);
allScore.score=showScore(result);

 buttonSelect('bat');
 buttonLock();
}


function ball(){
 buttonPressed=true;
 buttonName='ball';
  userChoice='Ball';
 computerChoice=genrateComputerChoice();
 result =showresult('Ball',computerChoice);
allScore.score=showScore(result);

buttonSelect('ball');
 buttonLock();
}


function stump(){
 buttonPressed=true;
 buttonName='stump';
   userChoice='Stump';
  computerChoice=genrateComputerChoice();
  result =showresult('Stump',computerChoice);
  allScore.score=showScore(result);
 
 buttonSelect('stump');
 buttonLock();
}

function showresult(userChoice,ComputerChoice){
 if (userChoice==='Bat') {
  if(computerChoice==='Bat'){
   return 'Match Is Tie';
  }else if(computerChoice==='Ball'){
   //history.win+=1;
    return 'You Are Winner';
   
  }else {
    return 'Computer Is Winner';
  }
 }else if(userChoice==='Ball') {
  if(computerChoice==='Bat'){
   return 'Computer Is Winner';
  } else if(computerChoice==='Ball'){
     return 'Match Is Tie';
  }else {
    return 'You Are Winner';
  }
 }else {
  if(computerChoice==='Bat'){
   return 'You Are Winner';
  }else if(computerChoice==='Ball'){
    return 'Computer Is Winner';
  }else {
   return 'Match Is Tie';
  }
 }
}

function showScore(result){
 if (result==='Match Is Tie') {
  allScore.tie++;
  allScore.score=allScore.score;
  return allScore.score;
  
 }else if(result==='You Are Winner'){
  allScore.win++;
   allScore.score+=10;
   return allScore.score;

 
 }else{
  allScore.loss++;
  if(allScore.score!=0){
   allScore.score-=5;
  }
  return allScore.score;
  
 }
 
}

document.querySelector("#restart").addEventListener("click",()=>{
 startGame();
 document.querySelector("#mainBody").classList.add('main');
  document.querySelector("#mainBody2").classList.remove('js-active');
});


document.querySelector(".reset").addEventListener("click",function(){
 document.querySelector(".overlay2").classList.add('active');
 document.querySelector(".popup").classList.add('active');

});

 document.querySelector("#yes").addEventListener("click",function(){
  localStorage.clear();
  reset();
  remove();
});
 
 
 document.querySelector("#no").addEventListener("click",function(){
   remove();
});
 
 

function remove(){
 document.querySelector(".popup").classList.remove('active');
 document.querySelector(".overlay2").classList.remove('active');
}



