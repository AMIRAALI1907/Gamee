var turn='x';

let title=document.querySelector(".title-game")

var arrayy = [];
var elments=document.querySelectorAll(".item");
var content=document.querySelector(".items")
var result=true;


function check(num1,num2,num3,result){
 if(result){
  title.innerHTML="nnnnn"
 }
else{
    title.innerHTML=`${arrayy[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor ="white";
    document.getElementById('item'+num2).style.backgroundColor ="white";
    document.getElementById('item'+num3).style.backgroundColor ="white";
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},4000)}
}
function GameOve(){
arrayy.length
}

function winners(){
    for(var i=1;i<10;i++){
        arrayy[i]=document.getElementById('item'+i).innerHTML;
        

    }
   if(arrayy[1]==arrayy[2]&&arrayy[2]==arrayy[3]&&arrayy[1]!=''){
    result=false;
    check(1,2,3)
    

   }


  else if(arrayy[4]==arrayy[5]&&arrayy[5]==arrayy[6]&&arrayy[5]!=''){
    result=false;
    check(4,5,6)

   }


  else if(arrayy[7]==arrayy[8]&&arrayy[8]==arrayy[9]&&arrayy[8]!=''){
    result=false;
    check(7,8,9)

   }

    else if(arrayy[1]==arrayy[4]&&arrayy[4]==arrayy[7]&&arrayy[4]!=''){
      result=false;
    check(1,4,7)

   }
  else  if(arrayy[2]==arrayy[5]&&arrayy[5]==arrayy[8]&&arrayy[8]!=''){
    result=false;
    check(2,5,8)

   }

   else if(arrayy[3]==arrayy[6]&&arrayy[6]==arrayy[9]&&arrayy[6]!=''){
    result=false;
    check(3,6,9)

   }


  else  if(arrayy[1]==arrayy[5]&&arrayy[5]==arrayy[9]&&arrayy[1]!=''){
    result=false;
    check(1,5,9)

   }

  else  if(arrayy[3]==arrayy[5]&&arrayy[5]==arrayy[7]&&arrayy[3]!=''){
    result=false;
    check(3,5,7)

   }
   else {
    result=true;
    
   }
  

   }
   



function game(id){
var elment=document.getElementById(id);

if(turn==='x'&&elment.innerHTML==''){
    elment.innerHTML=' x';
    turn='o';
    title.innerHTML='  O';
}
else if(turn==='o'&&elment.innerHTML==''){
    elment.innerHTML='O';
    turn='x';
    title.innerHTML="  x";
}



winners()

}


document.querySelector(".btnn").onclick=function(){
  location.reload();
}
