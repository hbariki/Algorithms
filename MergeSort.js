// ******** Merge Sort Recursive ***********
//•	Works with a divide and conquer philosophy
//•	Data splitting means this can be implemented parallel.
//•	Worst case – O(N Log N)
//•	Average case – O(N log N)
//•	Best case – O(N log N)
//•	Space required – O(N)

var arr = [8,4,9,2,11];

function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

// test
function mergeSort(items){

    if (items.length == 1) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
