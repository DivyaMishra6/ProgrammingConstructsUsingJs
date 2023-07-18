 var a = 10;
 var b = 20;
 var c = a+b;
 console.log("Addition is" + c);


 var d = Math.floor(Math.random()* 10) % 3;
console.log(d)

console.log("******************************");


if (true)
{
var a = 10

 //prints 10
console.log(a)
}
console.log("******************************");

let x = 15;
let y = 40;
let z= x + y;
console.log("Add : " + z);

console.log("******************************");

let arr = new Array();

for(let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (999-100+1) + 100);
    console.log(arr[i]);
}
SecondLargestNumber(arr);
SeconSmallestNumber(arr);



function SecondLargestNumber(arr){
    let largestNumber = arr[0];
    let secondLargestNumber = arr[0];

    for(let i = 0;i < arr.length ;i++){
        if(arr[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        }
        else if( arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i];
        }
    }
    console.log("Second largest number is : "+secondLargestNumber);
}


function SeconSmallestNumber(arr){
    let smallestNumber = arr[0];
    let secondSmallestNumber = arr[0];

    for(let i = 0;i <arr.length;i++){
        if(arr[i] < smallestNumber){
            secondSmallestNumber = smallestNumber;
            smallestNumber = arr[i];
        }
        else if(arr[i] < secondSmallestNumber){
            secondSmallestNumber = arr[i];
        }
    }
    console.log("Second smallest number is : "+secondSmallestNumber);
}


