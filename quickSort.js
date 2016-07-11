var arr = [3, 8, 2, 1, 5 ,4, 6, 7];

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    var lessArr = [];
    var moreArr = [];
    var pivotPosition = Math.floor(arr.length/2);
    var pivotVal = arr[pivotPosition];
    arr = arr.slice(0, pivotPosition).concat(arr.slice(pivotPosition + 1));
    for(var i=0; i< arr.length; i++) {
        if(arr[i] < pivotVal) {
            lessArr.push(arr[i]);
        } else {
            moreArr.push(arr[i]);
        }
    }

    var resultArr = (quickSort(lessArr)).concat([pivotVal], quickSort(moreArr));
    return resultArr;
}

console.log(quickSort(arr));