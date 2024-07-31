//Program-Array intersection of two sets

// function intersect2sets(set1,set2){
//     const ans=new Set();
//     for(i of set2){
//         if(set1.has(i)){
//             ans.add(i);
//         }
//     }
//     return ans;
// }
// const set1=new Set([1,2,3,4,5]);
// const set2=new Set([1,2,3]);
// const result=intersect2sets(set1,set2);
// console.log(result);

// //Program-Array manipulation with slice

// const arr=[1,2,3,4,5];
// const arr2=arr.slice(1,3);
// console.log(arr2);

//Program-Creating array of arrays

// var arr3=new Array(10);
// let c=0;
// for(i=0;i<arr3.length;i++){
//      arr3[i]=new Array(3);
//      for(j=0;j<arr3[i].length;j++){
//         c=c+1;
//         arr3[i][j]=c;
//      }
// }
// console.log(arr3);


//Program-Rotating an array

// let arr=[1,2,3,4,5];
// let r=4;
// for(i=1;i<=r;i++){
//     let c=arr.pop();
//     arr.unshift(c);
// }
// console.log(arr);

//Program-Comparing two arrays of equality

let arr=[1,2,3,4,5,6,7];
let arr2=[1,2,3,4,5,6,7];
let c=0;
if(arr.length!=arr2.length){
    console.log("Array with diffrent sizes");
}
else{
    for(i=0,j=0;i<arr.length,j<arr2.length;i++,j++){
        if(arr[i]==arr2[j]){
            c=c+1;
        }
        else{
            c=0;
        }
    }
    if(c==arr.length){
        console.log("Equal");
    }
    else{
        console.log("Not equal");
    }
}


