let num1 = parseInt(prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo numero: "));
let num3 = parseInt(prompt("Digite o terceiro numero: "));
let maior, menor;

//BLOCO DO MAIOR
if((num1 >= num2) && (num1 >= num3)){
maior = num1;
}
else if ((num2 >= num1) && (num2 >= num3)){
maior = num2;
}
else if ((num3 >= num1) && (num3 >= num2)){
    maior = num3;
}

//BLOCO DO MENOR
if((num1 <= num2) && (num1 <= num3)){
    menor = num1;
    }
    else if ((num2 <= num1) && (num2 <= num3)){
    menor = num2;
    }
    else if ((num3 <= num1) && (num3 <= num2)){
    menor = num3;
    }
        
    alert(`O numero ${maior} é o maior de todos!
        E o ${menor} é o menor de todos!`);
        