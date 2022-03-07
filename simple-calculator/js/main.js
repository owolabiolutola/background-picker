document.getElementById('pumpkin').onclick= makezero;
document.getElementById('dominosPizza').onclick= dominosPizza;
document.getElementById('zebra').onclick= zebra;
document.getElementById('cantThinkOfAnything').onclick= cantThinkOfAnything;



let total = 0

function makezero(){
total = 0
document.querySelector('#placeToPutResult').innerText = total

}



function dominosPizza(){

 total = total +3

 document.querySelector('#placeToPutResult').innerText = total
}


function zebra(){

  total =total +9

  document.querySelector('#placeToPutResult').innerText = total
}


function cantThinkOfAnything(){

  total =total -2
  document.querySelector('#placeToPutResult').innerText = total
  
}


