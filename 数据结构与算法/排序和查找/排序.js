function swap(arr, i1, i2) {
    var temp = arr[i1]
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
/**
 * 选择排序
 * @param {*} arr 
 */
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = arr[i];
        var index = i;
        for (var j = i + 1; i < arr.length - 1; j++) {
            if (min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        swap(arr, i, index);
    }
}

/**
 * 冒泡排序
 * @param {*} arr 
 */
function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(a[j]>a[j+1]){
                swap(arr, j, j + 1);
            }
        }
    }
}

/**
 * 插入排序
 * @param {*} arr 
 */
function insertionSort(arr){
    
}

var arr = [5, 1, 3, 4, 7, 6];
console.log(arr);
selectionSort(arr);
console.log(arr);