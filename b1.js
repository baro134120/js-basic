var a = 11;
var b = 10;
var c = 97;

var d = a-- + c++ * --a / --b + c--;
//      11  + 97  *  9  /  9  +  98
// a=9 b=9 c=97 d= 206
var e = c-- + --b + ++d / a--;
//      97  +  8  + 207 /  9
// a=8 b=8 c=96 d=207 e=128

// number of type
var number = 5;
// string type
var string = 'bbb';
// boolen
var isSuccess = true;
// underfined type
var under;
// null
var Null = null;
// symbol
var id = Symbol('id');
var id2 = Symbol('id');
// funtion

var Function = function () {

}
// oject

var myobject = {
    name:'bao',
    age:25,
    address:'vn'
}

var myArray = [
    2,4,6,8,10
]

console.log(typeof id);