const products = [
  { name: "Ferrari Polo", price: 99, img: "/F1/MEDIA/Shop/ferraripolo.png" },
  { name: "Alpine Polo", price: 99, img: "/F1/MEDIA/Shop/aplinepolo.png" },
  { name: "Aston Martin Polo", price: 99, img: "/F1/MEDIA/Shop/astonmartinpolo.png" },
  { name: "Mclaren Polo", price: 99, img: "/F1/MEDIA/Shop/mclarenpolo.png" },
  { name: "RedBull Polo", price: 99, img: "/F1/MEDIA/Shop/redbullpolo.png" },
  { name: "Racing Bull Polo", price: 99, img: "/F1/MEDIA/Shop/racingbullpolo.png" },
  { name: "Stake Polo", price: 99, img: "/F1/MEDIA/Shop/stakepolo.png" },
  { name: "Hass Polo", price: 99  , img: "/F1/MEDIA/Shop/haaspolo.png" },
  { name: "water bottle", price: 18, img: "/F1/MEDIA/Shop/waterbottle.jpg" },
  { name: "phone case", price: 25, img: "/F1/MEDIA/Shop/phonecase.jpg" }
];

let cart = [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    displayCart();
  }
}

function displayProducts() {
  const container = document.getElementById("shop-items");
  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.className = "shop-item";
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(productDiv);
  });
}

function addToCart(index) {
    const product = products[index];
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
    existingItem.quantity += 1;
    } else {
    cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    displayCart();
}

function removeFromCart(index) {
  cart[index].quantity -= 1;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  displayCart();
}

function displayCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
      <h3>${item.name} <span style="font-weight:normal;">x${item.quantity}</span></h3>
      <p>Price: $${item.price}</p>
      <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove 1</button>
    `;
    container.appendChild(cartItemDiv);
  });

  displayTotal();
}

function displayTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalContainer = document.getElementById("cart-total");
  totalContainer.textContent = `${total.toFixed(2)}`;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    displayCart();
  }
}


window.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  loadCart();
});
