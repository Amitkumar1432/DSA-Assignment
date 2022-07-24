let str="Reverse each word of a string"
let word=""
for(let i=0;i<str.length;i++){
word+=str[i]
if(str[i]==" "){
console.log(reverse(word));
word=""
}
if(i==str.length-1) console.log(reverse(word))
}
function reverse(strz){
let rev=""
for(let j=strz.length-1;j>=0;j--){
rev+=strz[j]
}
return rev
}