//bt1

// Tạo một mảng products để lưu trữ các đối tượng product bao gồm các thông tin: productId, productName, price, image, description, createdAt. Thực hiện các yêu cầu sau đây:
//Hiển thị danh sách sản phẩm
//Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm không được trùng. Nếu trùng thì báo cho người dùng biết là “Id không được phép trùng”, ngày thêm phải format đúng định dạng khi thêm mới)
//Tìm kiếm sản phẩm theo tên
//Sắp xếp sản phẩm tăng dần theo giá
//Lọc ra những sản phẩm có giá lớn hơn 100.000đ

//bt2.
//Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau: userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
//Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự, format ngày tháng)
//Hiển thị danh sách user trong màn hình console.log()
//Thực hiện chức năng tìm kiếm user theo tên hoặc email
//Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password. Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”. Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”

//bt1.
// let today = new Date();

// const getToday = () => {
//   let day = today.getDate();

//   let month = today.getMonth() + 1;

//   let year = today.getFullYear();

//   return `${day}/ ${month}/${year}`;
// };
// console.log(getToday());

// function Product(productId, productName, price, createdAt) {
//   this.productId = productId;
//   this.productName = productName;
//   this.price = price;
//   this.createdAt = createdAt;
// }

// const products = [];

// products.push(new Product(1, "o to", 100000000, getToday()));
// products.push(new Product(2, "Xe may", 20000000, getToday()));
// products.push(new Product(3, "Xe dap", 3000000, getToday()));
// products.push(new Product(4, "xich lo", 400000, getToday()));
// products.push(new Product(5, "dao", 40000, getToday()));

// console.log(products);

// // tìm kiếm sản phẩm theo tên

// const findProduct = products.find((Product) => Product.productName == "o to");

// console.log(findProduct);

// // lọc sp trên 100000
// const filterProduct = products.filter((product) => product.price >= 100000);
// console.log(filterProduct);

// //Sắp xếp sản phẩm tăng dần theo giá

// products.sort((a, b) => a.price - b.price);

// console.log(products);

// //bt2

// function User(userId, userName, gender, email, password, createdAt) {
//   this.userId = userId;
//   this.userName = userName;
//   this.gender = gender;
//   this.email = email;
//   this.password = password;
//   this.createdAt = createdAt;
// }

// const Users = [];

// Users.push(new User(1, "A", "nam", "A@gmail.com", "123123123", getToday()));
// Users.push(new User(2, "B", "nam", "b@gmail.com", "12341234", getToday()));
// Users.push(new User(3, "V", "nữ", "v@gmail.com", "12345123", getToday()));
// Users.push(new User(4, "H", "nữ", "h@gmail.com", "123456123", getToday()));
// Users.push(new User(5, "Z", "nam", "z@gmail.com", "123456712", getToday()));

// console.log(Users);

// // kiểm tra định dang email
// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   return emailRegex.test(email);
// }
// const emailCheck = "example@gmail.com";
// if (isValidEmail(emailCheck)) {
//   console.log("email hợp lệ");
// } else {
//   console.log("email k hợp lệ");
// }

// console.log(isValidEmail(Users[4].email));

// //Thực hiện chức năng tìm kiếm user theo tên hoặc email
// const findUser = Users.find((User) => User.userName == "A");
// console.log(findUser);

//c2

const product = [];

/**
 * Thêm 1 sản phẩm vào mảng
 * Auth: NDHung(05/12/2023)
 */
const handleAddProduct = () => {
  let productId = +prompt("nhập id sản phẩm");
  let productName = prompt("nhập id sản phẩm");
  let price = prompt("nhập giá sản phẩm");
  let image = prompt("nhập ảnh sản phẩm");
  //tạo đối tượng product
  const newProduct = {
    productId: productId,
    productName: productName,
    price: price,
    image: image,
    createdAt: new Date().toISOString().split("T")[0],
  };

  //push đối tượng vào trong mảng
  products.push(newProduct);
};

/**
 * hiển thị danh sách sản phẩm
 * Auth: NDHung(05/12/2023)
 */
const handleLoadData = () => {
  if (products.length === 0) {
    console.log("khong co san pham nao");
  } else {
    products.forEach((item) => console.log(item));
  }
};

/**
 * Tìm kiếm sản phẩm theo tên
 * @returns trả về thông tin sp nếu tìm thấy
 * Auth: NDHung(05/12/2023)
 */
const handleSearchByName = () => {
  //lấy tên sẩn phẩm từ client
  const searchValue = prompt("nhập tên sp cần tìm kiếm");
  //tìm kiếm sản phẩm trong mảng
  const findProduct = products.find((pro) => pro.productName === searchValue);
  //kiểm tra kết quả trả về
  if (!findProduct) {
    return `không tìm thấy sản phẩm nào ${searchValue}`;
  } else {
    return findProduct;
  }
};

const handleSortByPrice = (type) => {
  // sắp xếp sp theo giá
  if (type === "down") {
    //sắp xếp giảm dần
    product.sort((a, b) => {
      return b.price - a.price;
    });
  } else {
    //sắp xếp tăng dần
    product.sort((a, b) => {
      return a.price - b.price;
    });
  }
  //gọi hàm để hiển thị dữ liệu
  handleLoadData();
};

/**
 * Lọc sp >= 100000
 * @returns mảng các sp  thỏa mãn đk và thông báo" khôgn có sp nào" nếu k thỏa mãn
 */
const handleFilterByPrice = () => {
  //lọc các sp >= 100000
  const filterProductByPrice = product.filter((pro) => pro.price >= 100000);

  //kiểm tra kết quả trả về
  if (filterProductByPrice.length === 0) {
    return "không có sản phẩm nào";
  } else {
    return filterProductByPrice;
  }
};

//bài 2:

const users = [];

/**
 * Validate đia chỉ email
 * @param {*} email email nhập từu client
 * @returns  trả về 1 chuỗi định dạng nếu email hợp lệ, không trả về dữ liệu nếu email k hợp lệ
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateData = (email, password) => {
  //gắn cờ để theo dõi trạng thái hợp lệ của dữ liệu
  let error = [];

  if (!validateEmail(email)) {
    error.push("email khong dung dinh dang");
  }

  if (password.length < 8) {
    error.push("password phai lon hon 8 ki tu");
  }
  if (error.length > 0) {
    return error;
  } else {
    return [];
  }
};

/**
 * thêm mới dữ liệu
 * @returns
 */
const createUser = () => {
  // lấy dữ liệu từ client
  let userId = +prompt("nhập id của user");
  let userName = prompt("nhập tên");
  let gender = prompt("nhập giới tính");
  let address = prompt("nhập địa chỉ");
  let email = prompt("nhập địa chỉ email");
  let password = prompt("nhập password");

  // tạo đối tượng user
  const newUser = {
    userId: userId,
    userName: userName,
    gender: gender,
    address: address,
    email: email,
    password: password,
    createdAt: new Date().toISOString().split("T")[0],
  };

  // bắt validate dữ liệu đầu vào
  let isValid = validateData(email, password);

  if (isValid.length > 0) {
    console.log(isValid);
  } else {
    //thêm đối tượng user vào trong mảng
    users.push(newUser);
  }
};

const handleLoadUser = () => {
  if (users.length === 0) {
    console.log("chưa có tài khoản nào");
  } else {
    users.forEach((user) => console.log(user));
  }
};

/**
 * tìm kiếm user theo tên
 * @param {*} userName tên cần tìm kiếm lấy từ client
 * @returns trả về mảng rỗng nếu k tìm thấy, trả về mảng user nếu tìm thấy
 * auth: NDhung(05/12/2023)
 */
const handleSearchUser = (userName) => {
  //tìm kiếm user trong mảng
  const findByUsername = users.filter((user) => user.userName === userName);
  //kiểm tra kết quả trả về
  if (findByUsername.length === 0) {
    return "khong tim thay ket qua";
  } else {
    return findByUsername;
  }
};

const handleLogin = (email,password) => {
    if(!email || !password){
        return " email và mk không được phép để trống"
    }else{
        // tìm kiếm user theo email
        const findUserByEmail = user.find((user)=> user.email=== email)
        if(!findUserByEmail){
            return "email hoac mat khau khong dung"

        }else{
            if(findUserByEmail.email===email && findUserByEmail.password=== password){
                //chuyển trang
                return "đăng nhập thành công"
            }else{
                return "email hoặc mk k đúng"
            }
        }
    }
};

