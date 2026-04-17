const phones = [
  { name: "iPhone 14", price: 900, country: "США", img: "https://th.bing.com/th/id/OIP.fZwlRpnbRfh4bXgY9xLTPgHaKI?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
  { name: "Samsung S23", price: 850, country: "Корея", img: "https://m.media-amazon.com/images/I/61yUiD1CVML._AC_SL1500_.jpg" },
  { name: "Xiaomi 13 Lite", price: 600, country: "Китай", img: "data:image/webp;base64,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"},
]

let favorites = JSON.parse(localStorage.getItem("fav")) || [];

const container = document.getElementById("products");
const searchInput = document.getElementById("search");

function renderPhones() {
  const search = searchInput.value.toLowerCase();
  const min = document.getElementById("minPrice").value;
  const max = document.getElementById("maxPrice").value;

  container.innerHTML = "";

  phones
    .filter(p =>
      p.name.toLowerCase().includes(search) &&
      (min ? p.price >= min : true) &&
      (max ? p.price <= max : true)
    )
    .forEach((p, index) => {
      container.innerHTML += `
        <div class="card">
          <button class="like ${favorites.includes(index) ? 'active' : ''}" onclick="toggleLike(${index})">❤</button>
          <img src="${p.img}">
          <h2>${p.name}</h2>
          <p>$${p.price}</p>
          <p>${p.country}</p>

          <button onclick="openProduct(${index})">Подробнее</button>
          <button class="buy" onclick="addToCart(${index})">Купить</button>
        </div>
      `;
    });
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(index);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

function toggleLike(index) {
  if (favorites.includes(index)) {
    favorites = favorites.filter(i => i !== index);
  } else {
    favorites.push(index);
  }

  localStorage.setItem("fav", JSON.stringify(favorites));
  renderPhones();
}

function openProduct(index) {
  localStorage.setItem("product", index);
  window.location.href = "product.html";
}

function goToCart() {
  window.location.href = "cart.html";
}

/* слайдер */
const slides = [
  "https://via.placeholder.com/900x300?text=iPhone",
  "https://via.placeholder.com/900x300?text=Samsung",
  "https://via.placeholder.com/900x300?text=Xiaomi"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % slides.length;
  document.getElementById("slide").src = slides[i];
}, 3000);

function toggleTheme() {
  document.body.classList.toggle("dark");
}

searchInput.addEventListener("input", renderPhones);

updateCartCount();
renderPhones();