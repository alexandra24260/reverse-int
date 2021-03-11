module.exports = function reverse (n) {
let arr = Array.from(String(n), Number);
let i;
let changedArray = [];
for ( i = 0; i <= arr.length; i ++){
    if (!isNaN(arr[i])){
        changedArray += arr[i];
    }
}
return changedArray.split('').reverse().join('');
}
