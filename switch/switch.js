let a = parseInt(prompt("Enter num1 : "));
let b = parseInt(prompt("Enter num2 : "));
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
let choice = prompt("Enter a choice:");
switch(choice)
{
    case '1':console.log('Addititon=',a+b);
    break;
    case '2':console.log('Subtraction=',a-b);
    break;
    case '3':console.log('Multiplication=',a*b);
    break;
    case '4':console.log('Division=',a/b);
    break;
}