/*let a = 30;
if(a >=0 || a <=10){
alert('True')
} else{
    alert('false')
}*/

/*a = 2 + 2
switch(a){
    case 5:
        alert('gg')
        break
    case 4:
        alert('bb')
        break
    case 3:
        alert('bg')
        break
    case 2:
         alert('gb')
         break
}*/


/*let a = 5;
if (a >= 1 && a <= 10) {
	alert('I');
}
if (a >= 11 && a <= 20) {
	alert('II');
}
if (a >= 21 && a <= 31) {
	alert('III');
}*/


// let arr  = [1,2,3,4,5,6,7,8,9];
// let result = '';
// for(let i = 0;i < arr.length; i++){
//     result += arr[i] + '-';
// }

// console.log(result)

let arr = [10 , 20 ,30 , 50]
let tmp='';
for(let i = 0; i < arr.length; i++){
    tmp = String(arr[i]);
    console.log(tmp[0]); 
    if(tmp[0] == 1 || tmp[0]==2 || tmp[0]==5){
        console.log('gg')
    }
    
}