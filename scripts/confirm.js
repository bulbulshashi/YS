const paymentInfos = JSON.parse(localStorage.getItem("paymentInfo"));



const nameC = document.querySelector('#name-c');
const numberC = document.querySelector('#number-c');
const emailC = document.querySelector('#email-c');

const addressC = document.querySelector('#address-c');
const deliInC = document.querySelector('#deli-ins');
const paymentC = document.querySelector('#payment-c');
const commentC = document.querySelector('#comment-c');


nameC.innerText = paymentInfos[0];
numberC.innerText = paymentInfos[1];
emailC.innerText = paymentInfos[2];
addressC.innerText = paymentInfos[3];
deliInC.innerText = paymentInfos[4];
paymentC.innerText = paymentInfos[5];
commentC.innerText = paymentInfos[6];



localStorage.setItem("paymentMethInConfirm", JSON.stringify(paymentC.innerText));












///////////


// Retrieve cart from localStorage or initialize an empty array
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to add a new product to the cart
function addToCart(cartProduct) {
  if (!cartProduct) return; // Prevent errors if cartProduct is null

  const newItem = {
    id: Date.now(), // Unique ID for each item
    productName: cartProduct[1],
    productImage: cartProduct[4],
    quantity: parseInt(cartProduct[5], 10) || 1,
    price: parseFloat(cartProduct[2]) || 0,
  };

  // Check if the product already exists (by name & image)
  const existingItem = cartItems.find(
    item => item.productName === newItem.productName && item.productImage === newItem.productImage
  );

  if (existingItem) {
    existingItem.quantity += newItem.quantity; // Increase quantity if product exists
  } else {
    cartItems.push(newItem); // Add new product if it's different
  }

  // Save updated cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update cart UI
  updateCart();
}

// Function to update the cart table
function updateCart() {
  const cartTableBody = document.getElementById("big-t-body");
  cartTableBody.innerHTML = ""; // Clear existing rows

  let totalAmount = 0;
  cartItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td><button onclick="removeItem(${item.id})">X</button></td>
        <td><img src="${item.productImage}" alt="${item.productName}" width="50"></td>
        <td>${item.productName}</td>
        <td><button onclick="updateQuantity(${item.id}, -1)">-</button> ${item.quantity} <button onclick="updateQuantity(${item.id}, 1)">+</button></td>
        <td>${item.price} BDT</td>
        <td>${item.quantity * item.price} BDT</td>
      `;

    cartTableBody.appendChild(row);
    totalAmount += item.quantity * item.price;
  });

  // Update total price
  document.querySelector("#mini-table tr:nth-child(1) td:nth-child(2)").textContent = `${totalAmount} BDT`;
  document.querySelector("#mini-table tr:nth-child(5) td:nth-child(2)").textContent = `${totalAmount} BDT`;

  // Save updated cart to localStorage or clear it if empty
  if (cartItems.length === 0) {
    localStorage.removeItem("cartItems");
  } else {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

// Function to remove an item from the cart
function removeItem(id) {
  cartItems = cartItems.filter(item => item.id !== id);

  if (cartItems.length === 0) {
    localStorage.removeItem("cartItems"); // Clear localStorage if cart is empty
  } else {
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update storage
  }

  updateCart();
}

// Function to update item quantity (increase or decrease)
function updateQuantity(id, change) {
  const item = cartItems.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) item.quantity = 1; // Prevent negative or zero quantity
    updateCart();
  }
}

// Function to apply coupon (example)
function applyCoupon() {
  const couponInput = document.querySelector("#coupon-sec input").value;
  if (couponInput === "DISCOUNT10") {
    alert("Coupon applied! 10% discount.");
    let totalAmount = 0;
    cartItems.forEach(item => totalAmount += item.quantity * item.price);
    totalAmount *= 0.9; // Apply 10% discount
    document.querySelector("#mini-table tr:nth-child(5) td:nth-child(2)").textContent = `${totalAmount} BDT`;
  } else {
    alert("Invalid coupon.");
  }
}

// Event listener for the apply coupon button
document.querySelector("#coupon-sec button").addEventListener("click", applyCoupon);

// Check if a product is in localStorage and add it
const cartProduct = JSON.parse(localStorage.getItem("proToCart"));
if (cartProduct) {
  addToCart(cartProduct);
  localStorage.removeItem("proToCart"); // Prevent re-adding on refresh
}

// Initial update of the cart
updateCart();













