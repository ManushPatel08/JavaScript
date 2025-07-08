const pi=3.14;
function areaCircle(r)
{
    return pi*r*r;
}
let r=areaCircle(parseInt(prompt("Enter radius : ")))
console.log(r);

// ----------------------------------------------------------------------------

function areaSquare(s)
{
    return s*s;
}
let s=areaCircle(parseInt(prompt("Enter side : ")))
console.log(s);
// ----------------------------------------------------------------------------

function areaRectangle(l,w)
{
    return l*w;
}
let l=parseInt(prompt("Enter length : "));
let w=parseInt(prompt("Enter width : "));
console.log("Area of Rectangle : " + areaRectangle(l,w));



