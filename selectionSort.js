// ********* Selection Sort ***********
//•	Worst case – O(N^2)
//•	Average case – O(N^2)
//•	Best case – O(N^2)
//•	Space required O(N)
//•	Not appropriate for large unsorted data sets

var arr = [3,8,2,1,5,4,6,7];

for(var i=0 ; i< arr.length; i++) {
    var lowestElement = arr[i];
    var lowestElementRef = i;
    for(var j = i + 1; j < arr.length; j++) {
        if(arr[j] < lowestElement) {
            lowestElement = arr[j];
            lowestElementRef =  j;
        }
    }

    // move lowest element to the first
    var temp = arr[i];
    arr[i] = lowestElement;
    arr[lowestElementRef] = temp;
    console.log(arr);
}