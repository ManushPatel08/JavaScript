let a = parseInt(prompt("Enter A : "));
let b = parseInt(prompt("Enter B : "));
let c = parseInt(prompt("Enter C : "));

var sum =0;

if(a>35)
{
    sum+=a;
}
if(b>35)
{
    sum+=b;
}
if(c>35)
{
    sum+=c;
}
console.log(sum);
/*
if (a>35 && b>35 && c>35)
{
    console.log("addition of a + b + c =",a+b+c);
}
else if (a>35 && b>35) 
{
    console.log("addition of a + b =",a+b);
}
else if (b>35 && c>35) 
{
    console.log("addition of b + c =",b+c);
}
else if (a>35 && c>35) 
{
    console.log("addition of a + c =",a+c);
}
else if (a>35 || b>35 || c>35)
{
    if (a>35)
    {
        console.log("A : ",a);
    }
    else if (b>35)
    {
        console.log("B : ",b);
    }
    else if (c>35)
    {
        console.log("C : ",c);
    }
}
*/