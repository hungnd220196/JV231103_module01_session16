const array = [1, 2, 3, 4, 5, 6, 7, 8];
// lọc ra những phần tử thỏa mãn điều kiện hoặc k tm
// nó sẽ trả về 1 mảng mới chứa các giá trị thỏa mãn điều kiện, nếu k có điều kiện thảo mãn thfi trả về mảng rỗng
// hay ứng dụng khi muốn xóa phần tửu trong mảng
// const filterNumber = array.filter((item,index) => {
//     console.log(`item: ${item},index: ${index}` );
//     return item !== 1;

// });
// console.log(filterNumber);

// const filterNumber = array.filter((arr) => arr !== 1);
// console.log(filterNumber);

// tìm kiếm 1 phần tử trong mảng theo 1 điều kiên kiện cụ thể => hàm find()

// nó sẽ trả về 1 phần tử có trong mảng mà thỏa mãn điều kiện

// const findNumber = array.find((arr) => arr === 9); // kết quả undefined
// console.log(filterNumber);

//lấy ra vị trí cuẩ 1 phần tử trong mảng nếu thỏa mãn điều kiện
// hay ứng dụng tìm vị trí của 1 phần tửu trong mảng
// nó trả về vị trí của phần tử  trong mảng nếu thảo mãn điều kiện và trả về -1 nếu không thỏa mãn
// const findIndex = array.findIndex((arr) => arr === 4); // kết quả 3.
// console.log(findIndex);

// //Hàm làm thay đổi tất cả giá trị phần tử trong mảng => fill ()

// const fillArray = array.fill(0, 0, 5); // kết quả [0,0,0,0,6,7,8]
// console.log(fillArray);

//kiểm tra xem là tất cả các phần tử có trong mảng có thảo mãn điều kiện không
//chỉ cần cso 1 điều kiện sai thì sẽ trả về false <=> toán tử &&
// const checkAllCondition = array.every((arr) => arr >= 1); // kết quả true
// console.log(checkAllCondition);

// //6. kiểm tra chỉ câdnf 1 đk thỏa mãn thì mảng sẽ nhận true
// const checkSomeCondition = array.some((arr) => arr >= 10);
// console.log(checkSomeCondition);

//7. forEach()

// const listNumber = array.forEach((value) => console.log(value));

// console.log(listNumber);

array.forEach((value) => {
  console.log(`phần tử trong mảng ${value}`);
});

//8.map: được sử dụng để lập qua các phần tử của mảng và trả về 1 mảng mới đã chình sửa có số lượng phần tử bằng với số lượng mảng cũ

const users = [
  {
    userId: 1,
    userName: "A",
    age: 20,
  },
  {
    userId: 2,
    userName: "B",
    age: 21,
  },
  {
    userId: 3,
    userName: "C",
    age: 22,
  },
];

const htmls = users.map((value, index) => {
  return `<ul>
    <li>Số thứ tự ${index} </li>

    <li>họ và tên ${value.userName} </li>

    <li>Tuổi ${value.age} </li>
    
    </ul>`;
});

console.log(htmls.join(""));

//9. Reduce(): hay được sử dụng để thực hiện các logic tính toán trong 1 mảng

const prices = [200, 400, 500, 1000, 780];

//cú pháp : array.reduce(callback, initialValue)
const totalPrice = prices.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    // lần 1: preValue:0, currentValue:200 => total = 200;
    // lần 2: preValue:200, currentValue:400 => total = 600;
    // lần 3: preValue:600, currentValue:500 => total = 1100;
    // lần 4: preValue:1100, currentValue:1000 => total = 2100;
    // lần 5: preValue:2100, currentValue:780 => total = 2880;
    return previousValue + currentValue;
  },
  0
);
console.log(totalPrice);

// cách clone mảng
const numbers1 = [1, 2, 3, 4];
const arrCopy = [...numbers1, 5, 6, 7]; //spread operator

console.log(arrCopy);

const obj1 = {
  name: "A",
  age: 22,
};

const obj2 = {
  address: "Ha Noi",
  gender: "Nam",
};

const mergeObj = { ...obj1, ...obj2 };
console.log("mergeObj", mergeObj);

//Cách để truy xuất nhanh vào các thuộc tính trong đói tượng

const user = {
  name: "N",
  age: 22,
  address: "Ha Noi",
};

// let userName= user.name;

let { name, age, address } = user;

console.log(name, age, address);


