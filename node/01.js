function foo(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
var ret = foo(100);
console.log(ret);