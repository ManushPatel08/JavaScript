// function checkPalindrome(num)
// {
//     let r,rev=0
//     let temp=num
//     while(temp>0)
//     {
//         r=temp%10
//         rev=10*(rev)+r
//         temp=Math.floor(temp/10)
//     }
//     return rev==num ? "Palindrome" : "Not Palindrome"
// }
// let n=checkPalindrome(parseInt(prompt("Enter a number : ")))
// console.log(n);

// ----------------------------------------------------------------------------

function checkPalindrome(num)
{
    let x=num.split("").reverse().join("")
    
    return x==num ? "Palindrome" : "Not Palindrome"
}
let n=checkPalindrome(prompt("Enter a number : "))
console.log(n);

