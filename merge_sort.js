function mergeSort(arr) {
    if (arr.length < 2) {
        console.log(arr);
        return arr;
    }
    var n = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, n);
    var rightArr = arr.slice(n);
    console.log(leftArr);
    console.log(rightArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    var result = [];
    var i = 0;
    var j = 0;
    var lng = leftArr.length + rightArr.length;
    for (var k = 0; k < lng; k++) {
        if (i === leftArr.length && j < rightArr.length) {
            result[k] = rightArr[j];
            j++;
        } else if (j === rightArr.length && i < leftArr.length) {
            result[k] = leftArr[i];
            i++;
        } else if (leftArr[i] < rightArr[j]) {
            result[k] = leftArr[i];
            i++;
        } else {
            result[k] = rightArr[j];
            j++;
        }
    }
    console.log('result = ', result);
    return result;
}