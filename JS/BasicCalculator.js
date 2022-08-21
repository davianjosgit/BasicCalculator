
// alert("Helo World!");

// let text= document.getElementById("texto").innerHTML;



// var a =1;
// var b =2;
// var c=(a+b);

// console.log(c);



function clique(value=0){

   let number1=document.getElementById('numero1').value;
   let number2=document.getElementById('numero2').value;
   var calculo=(parseInt(number1)+parseInt(number2));

   const formatado = calculo.toLocaleString('pt-BR');

   document.getElementById("some").innerHTML=formatado;
   document.getElementById("numero1").value="";
   document.getElementById("numero2").value="";


}function clique2(){


    let number3=document.getElementById('numero3').value;
    let number4=document.getElementById('numero4').value;
    let calculo1=(parseInt(number3)-parseInt(number4));

    const formatado1 = calculo1.toLocaleString('pt-BR');


    document.getElementById("some").innerHTML=formatado1;
    document.getElementById("numero3").value="";
    document.getElementById("numero4").value="";
 

}function clique3(){

    let number5=document.getElementById('numero5').value;
    let number6=document.getElementById("numero6").value;
    var calculo2=(parseFloat(number5)*parseFloat(number6));

    const formatado2 = calculo2.toLocaleString('pt-BR');

    document.getElementById("some").innerHTML=formatado2;
    document.getElementById("numero5").value="";
    document.getElementById("numero6").value="";

    
}function clique4(){

    let number7=document.getElementById('numero7').value;
    let number8=document.getElementById("numero8").value;
    var calculo3=(parseInt(number7)/parseInt(number8));

    document.getElementById("some").innerHTML=calculo3;
    document.getElementById("numero7").value="";
    document.getElementById("numero8").value="";


    

}

// function aqui(num){

//    var number =document.getElementById("textLocal").innerHTML;
//    document.getElementById("textLocal").innerHTML=number+num;

   
  
// }function clean(){

//     document.getElementById("textLocal").innerHTML=""
// }function back(){

//     var textLocal =document.getElementById("textLocal").innerHTML;
//     document.getElementById("textLocal").innerHTML=textLocal.substring(0,textLocal.length -1);
    
// }function calcular(){

//     var textLocal =document.getElementById("textLocal").innerHTML;

//     if(textLocal){


//         document.getElementById('textLocal').innerHTML=eval(textLocal);
//     }


// }






