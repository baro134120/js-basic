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
// Boolen
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
// // oject

var myobject = {
    name:'bao',
    age:25,
    address:'vn'
}

var myArray = [
    2,4,6,8,10
]

console.log(typeof myArray);

// tham so trong ham
function writeCode(message,message2) {
    console.log(message);
    if (message2) {
        console.log(message2);
    }
}

writeCode('day la message','day la message2');

// Đối tượng arguments
function message() {
    console.log(arguments);
    // không cần gọi tham số
}

message('doi tuong 1','doi tuong 2','doi tuong 3');

// Vòng lặp for of

function writeString() {
    var myString = '';
    for (var string of arguments) {
        myString += '${string} - ';
    }
    console.log(myString);
}

writeString('so1','so2','so3','so4');

// return

function sum(a,b) {
    return(a + b);
}

var sumab = sum(10,12);

console.log(sumab);

// Declaration function
result1();

function result1() {
    console.log('hello result1');
}
// Expression function

var result2 = function() {
    console.log('hello result2');
}

result2();

// Chuỗi

var chuoi = 'day la chuoi' + 'day la dau\\' + 'trong nay co dau\'dau nay\'';

console.log(chuoi);

// template string ES6
var ES61 = 'day la ES61';
var ES62 = 'day la ES62';
console.log(`day la template string ${ES61} ${ES62}`);


// Làm việc với chuỗi
// Key word javascript string methods

console.log("LÀM VIỆC VỚI CHUỖI:");
console.log("");
var myString = "Học JS lập JS trình JS tại F8!";
console.log("Đo độ dài chuỗi:", myString.length);
console.log("Tìm vị trí:", myString.indexOf("JS"));
console.log("Tìm vị trí bắt đầu từ:", myString.indexOf("JS", 5));
console.log("Tìm từ vị trí cuối:", myString.lastIndexOf("JS"));
console.log("Cắt chuổi:", myString.slice(0));
console.log("Cắt chuỗi theo vị trí:", myString.slice(7, 10));
console.log("Cắt chuỗi từ vị trí cuối:", myString.slice(-7, -1));
console.log("Thay thế chữ chỉ định trong chuỗi:", myString.replace("JS", "Javascript"));
console.log("Thay thế tất cả chữ chỉ định trong chuỗi:", myString.replace(/JS/g, "Javascript")); // /JS/g là biểu thức chính quy
console.log("Đổi thành chữ hoa tất cả chữ trong chuỗi:", myString.toUpperCase());
console.log("Đổi thành chữ thường tất cả chữ trong chuỗi:", myString.toLowerCase());
var myStringTwo = "     Học JS lập JS trình JS tại F8!     ";
console.log("Loại bỏ khoảng trắng:", myStringTwo.trim());
console.log("chứng minh đã loại bỏ:");
console.log("Độ dài lúc chưa trim():", myStringTwo.length);
console.log("Độ dài lúc đã trim():", myStringTwo.trim().length);
var language = "Javascript, PHP, Ruby";
console.log("Cắt chuỗi thành array dựa vào điểm chung:", language.split(", "));
console.log("Cắt từng chữ thành array:", language.split(""));
console.log("lấy kí tự tương ứng ở vị trí ?:", language.charAt(0)); // sai vị trí in chuỗi rỗng
console.log("c2 để lấy kí tự tương ứng ở vị trí ?:", language[100]); // ra undefined



// bai tap vi du

var text = '     day la bai tap vi du ve js string\\ string co the lam gi      ';
console.log('co tat ca',text.length,'ki tu');
console.log('loai bo dau cach 2 ben thi con',text.trim().length,'ki tu');
console.log('string thu 2 dung thu',text.trim().lastIndexOf('string'),'trong chuoi khi loai bo khoang trang');
console.log('lay chu',text.slice(40,46),'thu hai trong chuoi');
console.log('lay chu',text.trim().slice(-2),'trong chuoi khi da loai bo dau cach');
console.log('chu string trong bien da duoc thay the va tao ra cau',text.replace('string', 'number'),);
var text1 = '   php, html, css, react   ';
console.log('tach ra:',text1.trim().split(','));
console.log('',text.trim().charAt(15));
console.log('',text1.length);
console.log('',text1.charAt(14));
console.log('',text1.slice(3,6));
console.log('',text.replace(/string/g, 'letgo'));
console.log('',text.trim());
console.log('',text1.repeat(2));


// Làm việc với Number
var number = [11.236, 12.524 ,13.12 ,14.48 ,15.02 ,16.33 ,17.49 ,18.68 ,19.26 ,20.47]
var number236 = 236;
console.log('tofixed',11.236.toFixed(1));
console.log((236).toString);

// Mảng (array)

var array = [
    'php',//chỉ mục or key
    'html',//chỉ mục or key
    'css',//chỉ mục or key
    18,//chỉ mục or key
    20,//chỉ mục or key
    {},//chỉ mục or key
    null//chỉ mục or key
]

console.log(array[0]);

//kiem tra co phai Array hay k

console.log(Array.isArray(array));