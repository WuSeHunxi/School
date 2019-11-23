function swap(arr, i, j) {
    var temp;
    if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}
/**
 * 选择排序
 * @param {*} arr 
 */
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = arr[i];
        var index = i;
        for (var j = i; i < arr.length - 1; j++) {
            if (min > arr[j + 1]) {
                min = arr[j + 1];
                index = j + 1;
            }
        }
        swap(arr, i, index);
    }
}