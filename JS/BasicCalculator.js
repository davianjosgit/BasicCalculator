
function aqui(num) {

    var number = document.getElementById("textLocal").innerHTML;
    document.getElementById("textLocal").innerHTML = number + num;



} function clean() {

    document.getElementById("textLocal").innerHTML = ""
} function back() {

    var textLocal = document.getElementById("textLocal").innerHTML;
    document.getElementById("textLocal").innerHTML = textLocal.substring(0, textLocal.length - 1);

} function calcular() {

    var textLocal = document.getElementById("textLocal").innerHTML;

    if (textLocal) {


        document.getElementById('textLocal').innerHTML = eval(textLocal);
    }


}






