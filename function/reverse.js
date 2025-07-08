function reverseString(str)
{
    return str.split("").reverse().join("")
    
}
let str=reverseString(prompt("Enter a string : "))
console.log(str);