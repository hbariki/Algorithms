var arr = [1, 3, 5, 7, 9, 10, 13];

findElement(0, arr.length - 1, 13);

function findElement(low, high, targetElement) {

    if(low > high) {
        console.log('number does not exist');
        return;
    }

    var mid = Math.floor((low + high)/2);
    if(arr[mid] > targetElement) {
        // move left
        findElement(0, mid-1, targetElement);
    } else  if(arr[mid] < targetElement) {
        // move right
        findElement(mid+1, high, targetElement);
    } else {
        // found the element
        console.log(arr[mid]);
        return;
    }
}
