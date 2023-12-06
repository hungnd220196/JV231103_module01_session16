// cú pháp khai báo
function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

//Thêm đối tượng vào
User.prototype.className = "JV231103";

// khởi tạo đối tương User
const user1 = new User("hung dep trai", "hung@gmail.com", "12345");
user1.readPost = "đọc báo";

const user2 = new User("A dep trai", "A@gmail.com", "aaaaaa");
user2.manager = "quản lý hệ thống";
console.log(user1);
console.log(user2);

//Viết chương trình yêu cầu người dùng nhập các lựa chọn
//1. Nhập thông tin user: name, email, password và lưu thông tin trong mảng
//2. in thông tin mảng người dùng ra bên ngoài
//3. Nhập tên người dùng từ trình duyệt và tìm kiếm tên người đó có trong mảng không?
//4. Thoát chương trình
// Các chương trình còn lại thông báo sai lựa chọn
let choose;
const users = [];
const addUser = () => {
  const userName = prompt("Nhập tên");
  const email = prompt("Nhập email");
  const password = prompt("Nhập password");

  //khai báo đối tượng user
  const user = {
    userName: userName,
    email: email,
    password: password,
  };
  users.push(user); // thêm phần tử vào cuối mảng
};

/**
 * Hàm đọc danh sách user
 * @param {*} array Mảng user
 */
const readUser = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("danh sách user: ", array[i]);
  }
};

/**
 * Hàm tìm user theo tên
 * @param {*} inputValue tên lấy từ người dùng
 * @param {*} array mẩng chứa danh sách user
 * @returns trả về index nếu tìm thấy user, -1 nếu k tìm thấy
 * auth: NDHung(04/12/2023)
 */
const handleSreach = (inputValue, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].userName === inputValue) {
      return i; // trả về vị trí tìm thấy
    } else {
      return -1; // nếu k tìm thấy
    }
  }
};
do {
  choose = +prompt("mời bạn nhập lựa chọn");
  switch (choose) {
    case 1:
      //gọi hàm addUser
      addUser();
      break;
    case 2:
      //gọi hàm read User
      readUser(users);
      break;
    case 3:
      const nameSearch = prompt("nhập tên người dùng");
      //biến lữu trữ giá trị trả về từ hàn handleSearch
      const result = handleSearch(nameSearch, users);
      if (result !== -1) {
        console.log(`${nameSearch} xuất hiện vị trí thứ ${result}`);
      } else {
        console.log(`không tìm thấy tên ${nameSearch}`);
      }

      break;
    case 4:
      console.log("Thoát chương trình");

      break;

    default:
      alert("Sai lựa chọn");
      break;
  }
} while (choose != 4);
