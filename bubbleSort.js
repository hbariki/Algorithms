// ******** Bubble Sort *********
//•	Worst case - O(N^2)
//•	Average case - O(N^2)
//•	Best case - O(N)
//•	Space required O(N)
//•	Not appropriate for large unsorted data sets

var arr = [9, 2, 5, 7, 1, 15, 4, 6];


for(var i = 0; i< arr.length; i++) {
    var isSwapped = false;

    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > arr[x+1]) {
            isSwapped = true;
            var temp = arr[x + 1];
            arr[x + 1] = arr[x];
            arr[x] = temp;
        }

        console.log(arr);
    }

    if(isSwapped === false) {
        // array is sorted
        console.log('array is sorted');
        break;
    }
}