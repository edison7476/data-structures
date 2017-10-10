binarySearch(arr, target) {
    let start  = 0;
    let end = arr.length - 1;
    let mid;
    let i = 0
    while (start <= end) {
        mid = Math.floor((end + start)/ 2, 10);
        mid = (end + start)/ 2;
        i++;
        if (target < arr[mid]) {
            // excluded the mid index since arr[mid] is not our target
            // so we take the previous element as the end element.
            end = mid - 1;
        } else if (target > arr[mid]) {
            // excluded the mid index since arr[mid] is not our target
            // so we take the next element as start element.
            start  = mid + 1;
        } else {
            console.log(`Target element: ${target} found in ${i} attemp${i > 1 ? 's' : ''}`);
            return target;
        }
    }
    console.log(`Taget element: ${target} NOT found`);
    return -1;
}