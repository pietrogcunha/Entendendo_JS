let num1 = parseInt(prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo numero: "));
let num3 = parseInt(prompt("Digite o terceiro numero: "));

if((num1 >= num2) && (num1 >= num3)){
alert(`O numero ${num1} é o maior de todos!`);
}
else if ((num2 >= num1) && (num2 >= num3)){
alert(`O numero ${num2} é o maior de todos!`);
}
else if ((num3 >= num1) && (num3 >= num2)){
    alert(`O numero ${num3} é o maior de todos!`);
}
