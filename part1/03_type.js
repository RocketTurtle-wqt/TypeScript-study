//1.string：字符串类型
var str;
//2.number：数字类型
var num;
//3.boolean：布尔值类型
var flag;
//4.字面量：字面量类型
var num_zml;
// num_zml = 11;//报错
num_zml = 10;
//5.any：任意类型
var any_1;
//变量后面不加任何类型，则隐式声明为any
var any_2;
// flag = any_1;//any能够赋值给任何变量，不建议使用any
//6.unknown：未知类型
//类型安全的any
var unknown_1;
// flag = unknown_1;//报错，unknown不能直接赋值给其它变量
//6-1：条件判断
if (typeof unknown_1 === 'boolean') {
    flag = unknown_1;
}
//6-2：类型断言
//6-2-1
flag = unknown_1;
//6-2-2
flag = unknown_1;
//7.void：空类型
function void_1() {
}
function void_2() {
    return undefined;
}
//8.never：表示永远没有返回值
function nerver_1() {
    throw new Error('报错!');
}
