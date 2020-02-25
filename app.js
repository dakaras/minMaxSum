//Given 5 positive integers, find the min and max values that can be calculated 
//by summing exactly 4 of the 5 integers. Then print the min and max values as a single
//line of 2 space separate long integers.
//Ex. arr = [1,3,5,7,9] => minSum = 1 + 3 + 5 + 7 = 16
//and over max sum is 3 + 5 + 7 + 9 = 24
//We would print 16 24

//Assumptions: 
//array length is 5
//constraints 1 <= arr[i] <= 10 to 9th power
//print 2 space separated integers
//sample input = 1,2,3,4,5
//sample output = 10 14

function minMaxSum(arr){
    let newArr = [...arr].sort() //spread operator keeps arr from being manipulated
    let sum = 0

    for(let i = 0; i < newArr.length; i++){
        sum += newArr[i]
    }
    let max = sum - newArr[0]
    let min = sum - newArr[newArr.length-1]
    console.log(min, max)
}