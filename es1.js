// block scope
var name = "Ratchanon Traitiprat"
console.log(name)

var x = 10;
if (x == 10) {
    var y = 10
    console.log("True")
}else{
    console.log("False")
}
console.log("y = "+y)
let number = 50
number = 100
console.log(number)

//original function
function firstnme(name) {
    return name
}
console.log(firstnme("Ratchanon"))

// arrow function
fullname=(fname,lname)=>fname+" "+lname
console.log(fullname("Wutthipong","Jaihan"))
setage=(age)=>"Age : "+age

//object (const,let)
const username = "Passapol Phukhang"
const age = 22
const address = "Bangkok"
const customer ={
    showData(){
        console.log(username)

    },
    age,
    address
}
console.log(customer)
// String -> miltiline String `` && interpolation ( `${}`)
let customerName = "Mr.jojo"
const address_1 = 
`You can edit your shell profile to permanently add the commands. 
There are several different shells available for Linux 
and each has a different profile. For example: ${customerName}`
console.log(address_1)

//spread operator (...)
const newArr = [100,200,300]
const Data = [10,20,30,40,50,...newArr]
const Data_2 = [1,2]
Data_2.push(...Data)
console.log("Result : "+Data)
console.log(Data_2)

//Rest parameter(array)
summation=(...numberArr)=> {
    let total =0
    for (let number of numberArr) 
        total+=number
        return total    
}
console.log(summation(100,200,300,400))
//Destructureing -> set value inside array to make paring 
const colors = ["red","green","blue"]
const [r,g,b] = colors
console.log(r)
console.log(g)
console.log(b)
const product = {
    productName :"Computer",
    price :30000,
    stock:10
}
const nme = product.productName
const {"productName":productName,"price":price,"stock":stock} = product
console.log(productName)

//default parameter 
getDatacustomer=(cusname,cusaddress="Bangkok")=>{
    // if (!cusaddress) {
    //     cusaddress = "Bangkok"   
    // }
    const address = `customer Name : ${cusname}
    address : ${cusaddress}`
    return address
}
console.log(getDatacustomer("Ratchanon"))

//join && concat 
const arr = [100,200,300,400]
const arr2 = [10,20,30,40]
const totally = arr.join()
console.log(totally)
const all = arr.concat(arr2)
console.log(all)

// push,pop,shift,unshift
arr.push(...[10,20,30,40,50])
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(999)
console.log(arr)

//array splice & slice
const num = [10,20,30,40,50]

console.log("Before "+num);
num.splice(1,3,555)//starting from ? index to n variable 
console.log("after "+num)

//loop array
for (let i = 0; i < num.length; i++) {
    console.log(`Order ${i} = ${num[i]}`)
}
num.forEach(e =>{
    console.log(`arr menber = ${e}`)
})
for (const e of num) {
    if (e >= 30) {
        console.log(`Order = ${e}`)   
    }  
}

//finding data in array
// indexof(data) , find(data) ,findindex(data)
const index = num.indexOf(10)
console.log("Index : "+index)
const search = num.findIndex(e=>e===20)
console.log(search)

//array map
const multiplication = num.map(e=>{
    const a = e*2
    return a
})
console.log(multiplication)

const forecast = ["number1","number2","number3","number4"]
const result = forecast.map(e=>{
    console.log(e)
    return e
})
console.log(result)

const bigdata = [
    {id:1,day:"01/01/2020",weather:"Sunny",temp:35},
    {id:2,day:"02/01/2020",weather:"Cloudy",temp:40},
    {id:3,day:"03/01/2020",weather:"Rainny",temp:30},
]
const display = bigdata.map(e=>{
    return e.weather
})
console.log(display)

const scope = bigdata.filter(e=>{
    return e.id>1
})
console.log(scope)

const mapdata = num.map(e=>100)
console.log(mapdata)
const filterdata = Data.filter(e=>e>20)
console.log(filterdata)


// array reduce 
// array.reduce((processing data,element)=>{},default value)
const addition = Data.reduce((value,e)=>{
    console.log("Default value : "+value)
 
    const total = e+value
    return total

},0)
console.log("Addition :"+addition)

const cart = [
    {name:" Bag",price:500},
    {name:" Book",price:50},
    {name:" Camera",price:700},
]
const summation_cart = cart.reduce((value,e)=>{
    const sum = e.price+value
    return sum
},0)
console.log("Summation of cart : "+summation_cart)