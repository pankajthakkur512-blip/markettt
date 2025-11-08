// Product Data
const products = [
    {
        id: 1,
        name: "Bamboo Dining Chair",
        price: "₹3,500",
        artisan: "Ramesh Patil, Pune",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
        description: "Handcrafted eco-friendly dining chair"
    },
    {
        id: 2,
        name: "Bamboo Handicraft Basket Set",
        price: "₹1,200",
        artisan: "Savita Deshmukh, Nagpur",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400",
        description: "Traditional storage baskets (Set of 3)"
    },
    {
        id: 3,
        name: "Bamboo Wind Chimes",
        price: "₹800",
        artisan: "Suresh Jadhav, Nashik",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        description: "Melodious handmade wind chimes"
    },
    {
        id: 4,
        name: "Bamboo Lounge Chair",
        price: "₹5,800",
        artisan: "Anjali Kulkarni, Mumbai",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400",
        description: "Comfortable outdoor lounge chair"
    },
    {
        id: 5,
        name: "Bamboo Kitchen Utensils Set",
        price: "₹1,500",
        artisan: "Prakash Raut, Kolhapur",
        image: "https://images.unsplash.com/photo-1584990347449-39b0bea4c107?w=400",
        description: "Eco-friendly cooking utensils (6 pieces)"
    },
    {
        id: 6,
        name: "Bamboo Wall Art",
        price: "₹2,800",
        artisan: "Meera Shinde, Aurangabad",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400",
        description: "Decorative wall hanging art piece"
    },
    {
        id: 7,
        name: "Bamboo Coffee Table",
        price: "₹8,500",
        artisan: "Ganesh More, Satara",
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400",
        description: "Elegant sustainable coffee table"
    },
    {
        id: 8,
        name: "Bamboo Lamp Shade",
        price: "₹1,800",
        artisan: "Pooja Kamble, Thane",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        description: "Artistic pendant lamp shade"
    },
    {
        id: 9,
        name: "Bamboo Jewelry Box",
        price: "₹950",
        artisan: "Rahul Pawar, Solapur",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400",
        description: "Handcrafted multi-compartment jewelry organizer"
    }
];

// Load products into the grid
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">Eco-Friendly</div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-artisan">By ${product.artisan}</p>
                    <div class="product-footer">
                        <span class="product-price">${product.price}</span>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added "${product.name}" to cart!\n\nThis is a demo. In production, this would add the item to your shopping cart.`);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    
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
                navLinks.classList.remove('active');
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
