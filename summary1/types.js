var sayHello;
sayHello = 'say hello';
var num;
num = 21;
var bool;
bool = true;
var zml;
zml = 10;
var any_demo1;
any_demo1 = 'hello any';
any_demo1 = 21;
var any_demo2;
var str_demo1;
str_demo1 = any_demo1;
var num_demo1;
num_demo1 = any_demo1;
var unknown_demo1;
unknown_demo1 = 21;
unknown_demo1 = 'hello unknown';
var num_demo2;
var str_demo2;
if (typeof unknown_demo1 === 'string') {
    str_demo2 = unknown_demo1;
}
num_demo2 = unknown_demo1;
function voidDemo1() {
}
function voidDemo2() {
    return null;
}
function voidDemo3() {
    return undefined;
}
function neverDemo() {
    throw new Error('无返回值');
}
var obj_demo1;
obj_demo1 = {};
var obj_demo2;
obj_demo2 = {
    name: 'wqt',
    age: 21
};
var obj_demo3;
obj_demo3 = function (x, y) {
    return x + y;
};
var arr_demo1;
arr_demo1 = ['1', '2', '3'];
var arr_demo2;
arr_demo2 = [1, 2, 3];
var tuple_demo;
tuple_demo = [1, 'hello'];
var Human;
(function (Human) {
    Human[Human["MALE"] = 0] = "MALE";
    Human[Human["FEMALE"] = 1] = "FEMALE";
})(Human || (Human = {}));
var per_demo1;
per_demo1 = {
    name: 'wqt',
    age: 21,
    gender: Human.MALE
};
var playingcard;
playingcard = 'A';
playingcard = 4;
var per;
per = {
    name: 'wqt',
    age: 21
};
var str_demo3;
str_demo3 = 'str';
var demo = 21;
