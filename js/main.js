//let resultP = document.getElementById("result");


//resultP.innerText = "hello first change text11111";
const myForm = document.getElementById("myForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
// option抓html select 的 id
const optionInput = document.getElementById("option");
const resultP = document.getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

console.log(window);

myForm.addEventListener(
    'submit', function(e123){
    e123.perventDefault();
    console.log(e123);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let option = optionInput.value;
    
    let resultNum = 0;
    switch(option){
        case "+":
            resultNum = num1 + num2;
            break;
        case "-":
            resultNum = num1 - num2;
            break;
        case "*":
            resultNum = num1 * num2;
            break;
        case "/":
            resultNum = num1 / num2;
            break;
        default:
            break;
    }
    let sum = num1 + num2;
console.log('您好');
    console.log(`${num1} + ${num2} = ${sum}`);
//myString1 = `${num1} + ${num2} = ${sum}`
//myString2 = num1 + "+" + num2 + "=" + sum;
//console.log(myString1);
//console.log(myString2);
resultP.innerText = myString1;
    }
)