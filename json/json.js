var student = {
    roll:1,
    name:"Manush",
    age:21,
    marks:90,
    gender:"male"
}
console.log(student);

var product = {
    id:1,
    name:"IPhone",
    color:["white","black","grey"],
    price:130000,
    description:{
        size:"5.5",
        camera:"24px",
        weight:"500gm",
        
    }
}
console.log(product);
console.log(product.description.camera);


var employee = {
    id:[1,2,3,4,5,6,7,8],
    des:["manager","sen.manager","head","chair person"],
    department:{
        sales:[1,2],
        marketing:[5,7,8],
        accounting:[3,4,6]
    }
}
console.log(employee.department.sales);
