let arr=[1,2,3,4,5,6,7,8]
function sum(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
sum=sum+arr[i];
}
return sum;
}
console.log(sum(arr))
console.log(sum([1,2,3]))