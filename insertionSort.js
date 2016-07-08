//******InsertionSort ******\\
// worstCase O(N^2)
// AverageCase O(N^2)
// BestCase O(N)
// space required O(N)
// Not appropriate for large unsorted arrays
// Space required O(N)

var arr = [23,42,4,16,8,15];
for(var i=1;i<arr.length;i++){
    var currentElement = arr[i];
    for(var j=0;j<i;j++){
        if(currentElement < arr[j]){
            var temp = arr[i];
            arr[i]= arr[j];
            arr[j] =temp;
        }
    }
}
console.log(arr);
