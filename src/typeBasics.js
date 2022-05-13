var array = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
//tuple
var coder = [1, 'Aditi', true];
// Tuple Array
var backend;
backend = [
    [1, 'ror', [1, 'Aditi', true]],
    [2, 'nodeJS', [2, 'Sakshi', true]]
];
console.log(backend);
//Union hold then one type
var value;
value = false;
console.log(value);
//enum defines set named constants
var decisions;
(function (decisions) {
    decisions[decisions["Wrong"] = 0] = "Wrong";
    decisions[decisions["Right"] = 1] = "Right";
})(decisions || (decisions = {}));
console.log(decisions.Wrong);
var user = {
    id: 1,
    name: 'Govind'
};
//Type Assertion tells compiler to treat an entity as diff type
var uid = 1;
// let userId = <number>uid
var userId = uid;
console.log(typeof (userId), userId);
console.log(typeof (uid));
//functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(2, 3));
function log(message) {
    console.log(message);
}
function sayHi() {
    console.log('Hi!');
}
var message = sayHi();
var coder1 = {
    id: 1,
    name: 'Govind'
};
var addi = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
console.log(addi(2, 2));
