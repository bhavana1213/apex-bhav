const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 50000
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 2000
  },
  {
    name: "T-Shirt",
    category: "fashion",
    price: 1000
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
    `;

    productList.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(
      product => product.category === category
    );
  }

  if (sortOption.value === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortOption.value === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

displayProducts(products);