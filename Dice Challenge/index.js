 var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber1 = Math.floor(Math.random()*6)+1;

document.querySelector('.img1').setAttribute("src","images/dice"+randomNumber+".png");
document.querySelector('.img2').setAttribute("src","images/dice"+randomNumber1+".png");

if(randomNumber > randomNumber1){
  document.querySelector('h1').innerHTML = "Player1 won";
}
else if(randomNumber < randomNumber1){
  document.querySelector('h1').innerHTML = "Player2 won";
}
else if(randomNumber === randomNumber1){
    document.querySelector('h1').innerHTML = "Draw";
}
