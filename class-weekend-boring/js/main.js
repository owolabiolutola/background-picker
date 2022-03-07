
document.getElementById('check').onclick = check;


function check(){
 const day= document.getElementById('day').value

 if(day ==="Sunday"|| day ==="Saturday"){
alert('weekend')

 }

 else if(day ==="Tuesday"|| day ==="Thursday"){
  alert('Classday')
  
   }

  else{
    alert('Boringgggggg')
    
     }
    
  


}