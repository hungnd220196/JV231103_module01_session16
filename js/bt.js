// let today = new Date();

// const getToday = () => {
//   let day = today.getDate();

//   let month = today.getMonth() + 1;

//   let year = today.getFullYear();

//   return `${day}/ ${month}/${year}`;
// };
// // console.log(getToday());

// function User(userId, userName, email, password, createdAt) {
//   this.userId = userId;
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
//   this.createdAt = createdAt;
// }
// const users = [];

// users.push(new User(1, "Thinh", "email1@gmail.com", "123", getToday()));
// users.push(new User(2, "Minh", "email2@gmail.com", "123", getToday()));
// users.push(new User(3, "Hung", "email3@gmail.com", "123", getToday()));
// users.push(new User(4, "Quy", "email4@gmail.com", "123", getToday()));
// // =====================================================================

// function Product(productId, productName, image, price, description, createdAt) {
//   this.productId = productId;
//   this.productName = productName;
//   this.image = image;
//   this.price = price;
//   this.description = description;
//   this.createdAt = createdAt;
// }
// const products = [];

// products.push(new Product(1, "O to", "image", 1000, "o to toyota", getToday()));
// products.push(
//   new Product(2, "Xe may", "image", 2000, "o to toyota", getToday())
// );
// products.push(
//   new Product(3, "Xe dap", "image", 3000, "o to toyota", getToday())
// );
// products.push(
//   new Product(4, "May bay", "image", 4000, "o to toyota", getToday())
// );
// // ======================================================================

// function Cart(cartId, userId, productId, quantity) {
//   this.cartId = cartId;
//   this.userId = userId;
//   this.productId = productId;
//   this.quantity = quantity;
// }

// const cart1 = [];
// const cart2 = [];
// const cart3 = [];
// const cart4 = [];

// cart1.push(new Cart(1, 1, 2, 4));
// cart1.push(new Cart(2, 1, 1, 2));
// cart1.push(new Cart(3, 1, 4, 3));

// cart2.push(new Cart(1, 2, 3, 3));

// // =====================================================================

// function totalMoney(carts) {
//   let total = 0;
//   for (let i = 0; i < carts.length; i++) {
//     let infoProduct = products.find(
//       (product) => product.productId == carts[i].productId
//     );
//     total += infoProduct.price * carts[i].quantity;
//   }
//   return total;
// }

// console.log(totalMoney(cart1));
// console.log(totalMoney(cart2));

const users = [];
const products = [];
const carts = [];

let choose;

do {
  choose = +prompt("mời bạn nhập lựa chọn");
  switch (choose) {
    case 1:
      const userId = prompt("mời bạn nhập id");
      const userName = prompt("nhập tên user:");
      const email = prompt("nhập email: ");
      const password = prompt("mời bạn nhập mật khẩu: ");
      //tạo đối tượng user
      const user = {
        userId: userId,
        userName: userName,
        email: email,
        password: password,

        createdAt: new Date().toISOString().split("T")[0],
      };

      users.push(user);

      break;
    case 2:
      const productId = prompt("mời bạn nhập id sản phẩm");
      const productName = prompt("nhập tên user:");
      const price = prompt("nhập email: ");

      //tạo đối tượng product
      const product = {
        productId: productId,
        productName: productName,
        price: price,
      };

      //Thêm đối tượng vào mảng

      products.push(product);

      break;
    case 3:
      const cartId = prompt("mời bạn nhập cart: ");
      const proId = prompt("nhập tên id của sản phẩm:");
      const uId = prompt("nhập id của user: ");
      const quantity = prompt("mời bạn nhập số lượng: ");
      //tạo đối tượng cart
      const cart = {
        cartId: cartId,
        productId: proId,
        userId: uId,
        quantity: quantity,
      };

      carts.push(cart);

      break;
    case 4:
      for (let i = 0; i < users.length; i++) {
        console.log("user:", users[i]);
      }

      break;
    case 5:
      for (let i = 0; i < products.length; i++) {
        console.log("product:", products[i]);
      }

      break;
    case 6:
      for (let i = 0; i < carts.length; i++) {
        console.log("art:", carts[i]);
      }
      break;
    case 7:
      // biến lưu trữ tổng giá tiền
      let total = 0;
      //lập qua từng phần tử của mảng carts

      for (let i = 0; i < carts.length; i++) {
        const productId = carts[i].productId;
        // tìm kiếm product theo productid
        const findProduct = product.find((pro) => pro.productId === productId);
        console.log("findProduct ", findProduct);

        // Cộng dồn giá tiền
        // Tổng = giá trị trước đó + giá sản phẩm* số lượng
        total = total + findProduct.price * carts[i].quantity;
      }

      break;

    default:
      break;
  }
} while (choose != 8);
