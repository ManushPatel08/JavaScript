var flag=1;
function isPrime(num)
{
    if(num==1)
    {
        flag=0;
    }
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            flag=0;
        }
    }
    return flag ? num + " is Prime." : num + " is not Prime."
}
let x=isPrime(parseInt(prompt("Enter a number : ")))
console.log(x);

