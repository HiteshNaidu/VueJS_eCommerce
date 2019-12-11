/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    title: "Adidas Running Shoes",
    price: 100.01,
    inventory: 2,
    src: "./assets/adidas2.jpg"
  },
  { id: 2, title: "Citizen Watch", price: 120.99, inventory: 10, src: "/assets/citizen.jpg" },
  { id: 3, title: "Nike Soccer Shoes", price: 119.99, inventory: 5, src: "/assets/nike2.jpg" },
  { id: 4, title: "Fossil Watch", price: 219.99, inventory: 0, src: "/assets/fossil.jpg" },
  { id: 4, title: "Omega Watch", price: 119.99, inventory: 30, src: "/assets/omegaWatch.jpg" }
];
const _productComments = [
  { productId: 1, userName: "Melih", content: "Awesome shoes" },
  { productId: 1, userName: "Hitesh", content: "Comfortable shoes" },
  { productId: 3, userName: "Cemal", content: "I scored 2 goals with these shoes :)" },
  { productId: 3, userName: "Hitesh", content: "Shipping was so late" },
  { productId: 4, userName: "Aishwarya", content: "I like this watch so stylish" },
  { productId: 2, userName: "Ali", content: "High quality but expensive" }
];
const _users = [
  { id: 1, userName: "Melih", email: "abc@gmail.com", password: "123", loggedIn: false },
  { id: 2, userName: "Hitesh", email: "qaz@gmail.com", password: "passw0rd", loggedIn: false },
  { id: 3, userName: "Aishwarya", email: "wsx@gmail.com", password: "Ww12345", loggedIn: false },
  { id: 4, userName: "Cemal", email: "edc@gmail.com", password: "karad1rkaslar1m", loggedIn: false }
];
export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1000);
  },
  getComments(cb) {
    setTimeout(() => cb(_productComments), 1000);
  },
  getUsers(cb) {
    setTimeout(() => cb(_users), 1000);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1 ? cb() : errorCb();
    }, 100);
  }
};
