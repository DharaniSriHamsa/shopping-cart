const products = [
    // Mobiles
    { id: 1, category: 'mobiles', name: 'iPhone 14', price: 90000,imageUrl: "iphone14.jpg" },
    { id: 2, category: 'mobiles', name: 'Samsung S23', price: 18999,imageUrl: "Samsungs23.webp" },
    { id: 3, category: 'mobiles', name: 'OnePlus 11', price: 77999 ,imageUrl: "oneplus11.jpg"},
    { id: 4, category: 'mobiles', name: 'Pixel 7', price: 18999,imageUrl: "pixel7.jpg" },
    { id: 5, category: 'mobiles', name: 'Xiaomi Mi 12', price: 14999 ,imageUrl: "Xiaomi Mi 12'.jpg"},
    { id: 6, category: 'mobiles', name: 'Vivo X90', price: 15999,imageUrl: "Vivo X90'.jpg" },
    { id: 7, category: 'mobiles', name: 'Oppo Reno 8', price: 16999 ,imageUrl: "Oppo Reno 8.webp"},
    { id: 8, category: 'mobiles', name: 'Realme GT', price: 14499 ,imageUrl: "Realme GT.webp"},
    { id: 9, category: 'mobiles', name: 'Honor Magic', price: 15999,imageUrl: "Honor Magic.webp" },
    { id: 10, category: 'mobiles', name: 'Nothing Phone 2', price: 16499,imageUrl: "Nothing Phone 2.webp" },
  
    // Laptops
    { id: 11, category: 'laptops', name: 'MacBook Pro', price: 112500,imageUrl: "MacBook Pro.jpg"},
    { id: 12, category: 'laptops', name: 'Dell XPS 15', price: 112200,imageUrl: "Dell XPS 15.jpg"},
    { id: 13, category: 'laptops', name: 'Lenovo ThinkPad', price: 111500,imageUrl:"Lenovo ThinkPad.jpg" },
    { id: 14, category: 'laptops', name: 'HP Spectre', price: 111900,imageUrl: "HP Spectre.jpg"},
    { id: 15, category: 'laptops', name: 'Asus ZenBook', price: 141700,imageUrl:"Asus ZenBook.png" },
    { id: 16, category: 'laptops', name: 'Acer Predator', price: 152100,imageUrl: "Acer Predator.jpg"},
    { id: 17, category: 'laptops', name: 'MSI Raider', price: 125400,imageUrl: "MSI Raider.avif"},
    { id: 18, category: 'laptops', name: 'Surface Laptop', price: 192300,imageUrl: "Surface Laptop.jpg"},
    { id: 19, category: 'laptops', name: 'LG Gram', price: 192000,imageUrl: "LG Gram.jpg" },
    { id: 20, category: 'laptops', name: 'Razer Blade', price: 152700,imageUrl: "Razer Blade.jpg"},
  
    // Accessories
    { id: 21, category: 'accessories', name: 'Wireless Mouse', price: 500,imageUrl: "Wireless Mouse.jpg"},
    { id: 22, category: 'accessories', name: 'Mechanical Keyboard', price: 1200,imageUrl: "Mechanical Keyboard.webp" },
    { id: 23, category: 'accessories', name: 'Smartwatch', price: 2500,imageUrl:"Smartwatch.jpg" },
    { id: 24, category: 'accessories', name: 'Headphones', price: 1500,imageUrl: "Headphones.jpg"},
    { id: 25, category: 'accessories', name: 'Phone Case', price: 200,imageUrl: "Phone Case.jpg"},
    { id: 26, category: 'accessories', name: 'Power Bank', price: 750,imageUrl: "Phone Case.jpg" },
    { id: 27, category: 'accessories', name: 'USB Hub', price: 400,imageUrl: "USB Hub.jpg" },
    { id: 28, category: 'accessories', name: 'Screen Protector', price: 150,imageUrl: "Screen Protector.webp"  },
    { id: 29, category: 'accessories', name: 'Stylus Pen', price: 350,imageUrl:"Stylus Pen.webp" },
    { id: 30, category: 'accessories', name: 'Laptop Stand', price: 600,imageUrl:"Laptop Stand.jpg"  },
  
    // Food
    { id: 31, category: 'food', name: 'Organic Apple', price: 50,imageUrl: "Organic Apple.webp" },
    { id: 32, category: 'food', name: 'Energy Bar', price: 30,imageUrl: "Energy Bar.avif" },
    { id: 33, category: 'food', name: 'Almond Milk', price: 70,imageUrl:"Almond Milk.jpg"  },
    { id: 34, category: 'food', name: 'Granola Pack', price: 100,imageUrl:"Granola Pack.jpg" },
    { id: 35, category: 'food', name: 'Dark Chocolate', price: 105,imageUrl: "Dark Chocolate.jpg"  },
    { id: 36, category: 'food', name: 'Protein Shake', price: 250,imageUrl:  "Peanut Butter Jar.jpg"},
    { id: 37, category: 'food', name: 'Vegetable Chips', price: 80,imageUrl: "Vegetable Chips.jpg"  },
    { id: 38, category: 'food', name: 'Green Tea Pack', price: 120,imageUrl:"Green Tea Pack.webp"  },
    { id: 39, category: 'food', name: 'Peanut Butter Jar', price: 180,imageUrl:"Peanut Butter Jar.jpg"  },
    { id: 40, category: 'food', name: 'Coffee Beans', price: 200,imageUrl: "Coffee Beans.jpg" },
  
    // Electronics
    { id: 41, category: 'electronics', name: '4K TV', price: 150000,imageUrl: "4K TV.jpg" },
    { id: 42, category: 'electronics', name: 'Bluetooth Speaker', price: 2000,imageUrl: "Bluetooth Speaker.jpg" },
    { id: 43, category: 'electronics', name: 'Smart Home Hub', price: 3000,imageUrl:"Smart Home Hub.jpg"  },
    { id: 44, category: 'electronics', name: 'Drone', price: 100000,imageUrl: "Drone.jpg" },
    { id: 45, category: 'electronics', name: 'Gaming Console', price: 50000,imageUrl:"Gaming Console.webp"  },
    { id: 46, category: 'electronics', name: 'VR Headset', price: 40000,imageUrl:"VR Headset.jpg"  },
    { id: 47, category: 'electronics', name: 'Action Camera', price: 35000,imageUrl: "Action Camera.jpg"},
    { id: 48, category: 'electronics', name: 'Smart Bulb Pack', price: 60000,imageUrl:"Smart Bulb Pack.webp" },
    { id: 49, category: 'electronics', name: 'Wireless Router', price: 120000,imageUrl:"Wireless Router.jpg"  },
    { id: 50, category: 'electronics', name: 'E-Reader', price: 18000,imageUrl: "E-Reader.jpeg" }
  ];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

function filterCategory(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image" />
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    cartItemsContainer.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        const itemCost = item.price * item.quantity;
        totalCost += itemCost;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            ${item.name} x${item.quantity} (₹${itemCost.toFixed(2)})
            <button onclick="updateQuantity(${item.id}, -1)">-</button>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = totalCost.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        updateCartDisplay();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some products before checking out.");
    } else {
        alert(`Checkout successful! Total cost: ₹${document.getElementById('cart-total').textContent}`);
        clearCart();
    }
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.toggle('active');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-category-menu');
    mobileMenu.classList.toggle('active');
}

document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('checkout-btn').addEventListener('click', checkout);

filterCategory('all');