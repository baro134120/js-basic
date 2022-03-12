// Mảng (array)
// 1. toString() chuyển kiểu dữ liệu từ Arry => String(kiểu chuỗi)

// 2. join() tương tự toString có thể thay đổi cái ký tự ngăn cách phần tử chuỗi sang ký tự bất kỳ

// 3. pop() xoá element cuối và trả về phần tử đó

// 4. push() thêm 1 hoặc nhiều element vào cuối mảng và trả về mảng mới sau thêm

// 5. shift() xoá element đầu mảng và trả về phần tử đó

// 6. unshift() thêm 1 hoặc nhiều element vào đầu mảng và trả về mảng mới sau thêm

// 7. splice(<>(1), <>(2), <>(3))

// (1)chọn phẩn tử bắt đầu

// (2)nhập vào số phần tử muốn xoá

// (3)thêm vào các phần tử ....

// 8. concat() nuối 2 mảng lại với nhau

// 9. slice(<>(1), <>(2))

// chọn vị trí phần tử bắt đầu vầ kết thúc để cắt sau đó trả ra số phần tử đã cắt

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
console.log(array.toString());
console.log(array);
console.log(array.join(' - '));  //thêm - vào các phần tử trong mảng 
console.log(array.pop());  //xóa phần tử CUỐI mảng và trả vê phần tử đã xóa,khi xóa hết thì trả về undifined
console.log(array.shift());  //xóa phần tử ĐẦU mảng và trả vê phần tử đã xóa,khi xóa hết thì trả về undifined
console.log(array.push('java','python'));  //thêm phần tử 'java' và 'python' vào CUỐI mảng và trả về độ dài mới của mảng ,có thể thêm nhiều phần tử
console.log(array.unshift('java', 'python'));  //thêm phần tử 'java' và 'python' vào ĐẦU mảng và trả về độ dài mới của mảng ,có thể thêm nhiều phần tử
console.log(array.slice(1, 6));  //cắt từ phần tử thứ nhất đến phần tử thứ 6,có thể là số âm chạy ngược
console.log(array.splice(1, 0, 'java'));  /*vị trí cắt,cắt bao nhiêu phần tử,thêm một hoặc nhiều phần tử vào từ vị trí cắt
trả về giá trị là các phần tử đã cắt*/
console.log(array);
var array2 = [1,2,3];
console.log(array.concat(array2));
console.log(array);
console.log(array.splice(1,2,'python'));
console.log(array);


//kiem tra co phai Array hay k

console.log(Array.isArray(array));

// object js
var emaiL ='email';
var info = {
    ho:'Nguyen',
    ten:'Bao',
    tuoi:25,
    sdt:'0987654321',
    [emaiL]:'bao11101997@gmail.com',
    getHovaTen: function () {
        return `${this.ho} ${this.ten}`;
    }
}


console.log(info);

console.log(info.getHovaTen());

// bai tap vi du
var placeX = 'place';
var book = {
    created:'1999',
    amount:1e9 + 'tan',
    [placeX]: 'VN',
    infoX: function () {
        return `${this.created} ${this.amount} ${this.place}`
    }
}

delete book.created;

console.log(book);

console.log('day la thong tin:',book.infoX());



var chemicaL = 'chemical';
var water = {
    color:"white",
    amount:'a lot',
    use:'drink',
    [chemicaL]: 'h2o',
    info: function () {
        return `mau:${this.color} so luong:${this.amount} su dung nhu the nao:${this.use}  viet tat hoa hoc:${this.chemical}`
    } 
}

console.log('day la thong tin san pham:',water.info());