// Product Data
const products = [
    {
        id: 1,
        name: "Bamboo Dining Chair",
        price: 3500,
        artisan: "Ramesh Patil, Pune",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
        description: "Handcrafted eco-friendly dining chair",
        category: "furniture"
    },
    {
        id: 2,
        name: "Bamboo Handicraft Basket Set",
        price: 1200,
        artisan: "Savita Deshmukh, Nagpur",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400",
        description: "Traditional storage baskets (Set of 3)",
        category: "handicraft"
    },
    {
        id: 3,
        name: "Bamboo Wind Chimes",
        price: 800,
        artisan: "Suresh Jadhav, Nashik",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        description: "Melodious handmade wind chimes",
        category: "decor"
    },
    {
        id: 4,
        name: "Bamboo Lounge Chair",
        price: 5800,
        artisan: "Anjali Kulkarni, Mumbai",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400",
        description: "Comfortable outdoor lounge chair",
        category: "furniture"
    },
    {
        id: 5,
        name: "Bamboo Kitchen Utensils Set",
        price: 1500,
        artisan: "Prakash Raut, Kolhapur",
        image: "https://images.unsplash.com/photo-1584990347449-39b0bea4c107?w=400",
        description: "Eco-friendly cooking utensils (6 pieces)",
        category: "kitchen"
    },
    {
        id: 6,
        name: "Bamboo Wall Art",
        price: 2800,
        artisan: "Meera Shinde, Aurangabad",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400",
        description: "Decorative wall hanging art piece",
        category: "decor"
    },
    {
        id: 7,
        name: "Bamboo Coffee Table",
        price: 8500,
        artisan: "Ganesh More, Satara",
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400",
        description: "Elegant sustainable coffee table",
        category: "furniture"
    },
    {
        id: 8,
        name: "Bamboo Lamp Shade",
        price: 1800,
        artisan: "Pooja Kamble, Thane",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        description: "Artistic pendant lamp shade",
        category: "decor"
    },
    {
        id: 9,
        name: "Bamboo Jewelry Box",
        price: 950,
        artisan: "Rahul Pawar, Solapur",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400",
        description: "Handcrafted multi-compartment jewelry organizer",
        category: "handicraft"
    },
    {
        id: 10,
        name: "Bamboo Bookshelf",
        price: 6200,
        artisan: "Vijay Bhosale, Sangli",
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400",
        description: "5-tier durable bookshelf for home library",
        category: "furniture"
    },
    {
        id: 11,
        name: "Bamboo Plant Pots Set",
        price: 1100,
        artisan: "Sushila Gaikwad, Ratnagiri",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
        description: "Decorative plant containers (Set of 5)",
        category: "decor"
    },
    {
        id: 12,
        name: "Bamboo Serving Tray",
        price: 850,
        artisan: "Santosh Mane, Raigad",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400",
        description: "Elegant serving tray with handles",
        category: "kitchen"
    },
    {
        id: 13,
        name: "Bamboo Storage Cabinet",
        price: 12000,
        artisan: "Laxman Jadhav, Latur",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        description: "Multi-drawer storage solution",
        category: "furniture"
    },
    {
        id: 14,
        name: "Bamboo Coaster Set",
        price: 450,
        artisan: "Mangala Patil, Osmanabad",
        image: "https://images.unsplash.com/photo-1615799998603-7c6270a45196?w=400",
        description: "Handwoven drink coasters (Set of 6)",
        category: "kitchen"
    },
    {
        id: 15,
        name: "Bamboo Pen Stand",
        price: 550,
        artisan: "Deepak Sawant, Jalgaon",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400",
        description: "Stylish desk organizer",
        category: "handicraft"
    },
    {
        id: 16,
        name: "Bamboo Mirror Frame",
        price: 2200,
        artisan: "Asha Kale, Ahmednagar",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400",
        description: "Decorative wall mirror with bamboo frame",
        category: "decor"
    },
    {
        id: 17,
        name: "Bamboo Dining Table",
        price: 15000,
        artisan: "Sachin Desai, Beed",
        image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=400",
        description: "6-seater family dining table",
        category: "furniture"
    },
    {
        id: 18,
        name: "Bamboo Tea Light Holders",
        price: 650,
        artisan: "Reshma Shah, Palghar",
        image: "https://images.unsplash.com/photo-1602874801006-e04291c9e671?w=400",
        description: "Ambient lighting decor (Set of 4)",
        category: "decor"
    }
];

let currentFilter = 'all';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Load products into the grid
function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">Eco-Friendly</div>
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                        ${isInWishlist ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-artisan">By ${product.artisan}</p>
                    <div class="product-footer">
                        <span class="product-price">₹${product.price.toLocaleString()}</span>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    loadProducts(category);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    saveWishlist();
    updateWishlistCount();
    loadProducts(currentFilter);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cartCount');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    }
}

// Update wishlist count
function updateWishlistCount() {
    const wishlistBadge = document.getElementById('wishlistCount');
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlist.length;
        wishlistBadge.style.display = wishlist.length > 0 ? 'block' : 'none';
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            loadCart();
        }
    }
}

// Load cart page
function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-message"><p>Your cart is empty</p><a href="products.html" class="btn btn-primary">Continue Shopping</a></div>';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    let subtotal = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-artisan">By ${item.artisan}</p>
                    <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-total">
                    <p>₹${(item.price * item.quantity).toLocaleString()}</p>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });
    
    if (cartSummary) {
        const shipping = subtotal > 5000 ? 0 : 200;
        const total = subtotal + shipping;
        
        cartSummary.innerHTML = `
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>₹${subtotal.toLocaleString()}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            <div class="summary-row total">
                <span>Total:</span>
                <span>₹${total.toLocaleString()}</span>
            </div>
            <button class="btn btn-primary btn-large" onclick="checkout()">Proceed to Checkout</button>
            <a href="products.html" class="continue-shopping">Continue Shopping</a>
        `;
    }
}

// Load wishlist page
function loadWishlistPage() {
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (!wishlistItems) return;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<div class="empty-message"><p>Your wishlist is empty</p><a href="products.html" class="btn btn-primary">Browse Products</a></div>';
        return;
    }
    
    wishlistItems.innerHTML = '';
    
    wishlist.forEach(item => {
        const wishlistItem = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-badge">Eco-Friendly</div>
                    <button class="wishlist-btn active" onclick="toggleWishlist(${item.id})" title="Remove from Wishlist">
                        ❤️
                    </button>
                </div>
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p class="product-description">${item.description}</p>
                    <p class="product-artisan">By ${item.artisan}</p>
                    <div class="product-footer">
                        <span class="product-price">₹${item.price.toLocaleString()}</span>
                        <button class="btn-add-cart" onclick="addToCart(${item.id}); toggleWishlist(${item.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        wishlistItems.innerHTML += wishlistItem;
    });
}

// Checkout function
function checkout() {
    alert('Thank you for your order!\n\nThis is a demo. In production, this would redirect to a secure payment gateway.');
}

// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadCart();
    loadWishlistPage();
    updateCartCount();
    updateWishlistCount();
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your submission has been received. We will contact you within 2-3 business days.');
            form.reset();
        });
    });
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
