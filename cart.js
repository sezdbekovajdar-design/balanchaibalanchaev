const phones = [
  { name: "iPhone 14", price: 900 },
  { name: "Samsung S23", price: 850 },
  { name: "Xiaomi 13", price: 600 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  cart.forEach((index, i) => {
    const p = phones[index];
    total += p.price;

    container.innerHTML += `
      <div>
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="removeItem(${i})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Итого: $" + total;
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();