//tạo 1 đối tượng trong javascript
// tu_khoa ten_doi_tuong = {
//các key và value
//}

//cách 1 : object literal
//truy xuất các phần tửu object
const user = {
  //key: value => property
  userName: "Nguyễn Văn A",
  email: "nva@gmail.com",
  password: "12345678",
  age: 27,
  isMale: true,

  // phuương thức - hàm(method)
  getEmail: function () {
    return this.email;
  },
};

// cách xóa key và value trong object
delete user.isMale;

console.log(user.age);
console.log(user.userName);

//cách 2 truy xuất các phần tửu object
console.log(user["isMale"]);
console.log(user["age"]);

// thêm key và value vào đối tượng
user.address = "Ha Noi";
user.dateOfBirh = "03/11/2023";

console.log("getEmail", user.getEmail());
//Lập qua các thuộc tính của đối tượng

for (let key in user) {
  console.log("key", key);
  console.log("Value", user[key]);
}

//tẠO 1 MẢNG lưu trữ 3 đối tượng product
const product = [
  {
    productId: 1,
    productName: "ao thun nam",
    price: 200000,
    image: "",
    description: "",
  },

  {
    productId: 2,
    productName: "ao thun nam",
    price: 200000,
    image: "",
    description: "",
  },
];
