function ret() {
    window.location="math.html";
}

function dd() {
var n1 = parseInt(document.getElementById('num1').value) ;
var n2 = parseInt(document.getElementById('num2').value);
var sum = n1 / n2;
document.getElementById('add').innerHTML = " Sum is = " + sum;
}
