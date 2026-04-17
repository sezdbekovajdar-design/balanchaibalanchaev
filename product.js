const phones = [
  { name: "iPhone 14", price: 900, country: "США", desc: "Мощный процессор A15", img: "https://via.placeholder.com/300" },
  { name: "Samsung S23", price: 850, country: "Корея", desc: "Отличная камера", img: "https://via.placeholder.com/300" },
  { name: "Xiaomi 13", price: 600, country: "Китай", desc: "Лучшее соотношение цена/качество", img: "https://via.placeholder.com/300" }
];

const index = localStorage.getItem("product");
const phone = phones[index];

document.getElementById("product").innerHTML = `
  <h1>${phone.name}</h1>
  <img src="${phone.img}">
  <p>Цена: $${phone.price}</p>
  <p>Страна: ${phone.country}</p>
  <p>${phone.desc}</p>
`;

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(index);
  localStorage.setItem("cart", JSON.stringify(cart));
}