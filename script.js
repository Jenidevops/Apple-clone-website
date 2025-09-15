// JavaScript for Search Functionality
document.addEventListener("DOMContentLoaded", function () {

    // Apple products with URLs
    const appleProducts = [
        { name: "iPhone 17 Pro", url: "https://www.apple.com/iphone-17-pro/" },
        { name: "iPhone 17", url: "https://www.apple.com/iphone-17/" },
        { name: "iPhone", url: "https://www.apple.com/iphone/" },
        { name: "iPhone 17 air", url: "https://www.apple.com/iphone-air/" },
        { name: "Macbook", url: "https://www.apple.com/macbook/" },
        { name: "Macbook Pro", url: "https://www.apple.com/macbook-pro/" },
        { name: "Macbook Air", url: "https://www.apple.com/macbook-air/" },
        { name: "Mac Mini", url: "https://www.apple.com/mac-mini/" },
        { name: "Mac Studio", url: "https://www.apple.com/mac-studio/" },
        { name: "iMac", url: "https://www.apple.com/imac/" },
        { name: "iPad", url: "https://www.apple.com/ipad/" },
        { name: "iPad Pro", url: "https://www.apple.com/ipad-pro/" },
        { name: "iPad Air", url: "https://www.apple.com/ipad-air/" },
        { name: "iPad Mini", url: "https://www.apple.com/ipad-mini/" },
        { name: "Applewatch", url: "https://www.apple.com/apple-watch/" },
        { name: "Apple watch ultra", url: "https://www.apple.com/apple-watch-ultra-3/" },
        { name: "Apple Watch Series", url: "https://www.apple.com/apple-watch-series/" },
        { name: "Apple Watch Series 11", url: "https://www.apple.com/apple-watch-series-11/" },
        { name: "AirPods", url: "https://www.apple.com/airpods/" },
        { name: "AirPods Pro", url: "https://www.apple.com/airpods-pro/" },
        { name: "AirPods Max", url: "https://www.apple.com/airpods-max/" },
        { name: "AppleTV", url: "https://www.apple.com/apple-tv/" },
        { name: "Apple TV 4K", url: "https://www.apple.com/apple-tv-4k/" },
        { name: "HomePod", url: "https://www.apple.com/homepod-2nd-generation/" },
        { name: "HomePod mini", url: "https://www.apple.com/homepod-mini/" },
        { name: "Apple Pencil", url: "https://www.apple.com/apple-pencil/" }
    ];

   const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    // Toggle dropdown
    searchIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        searchDropdown.style.display =
            searchDropdown.style.display === "block" ? "none" : "block";
        searchInput.focus();
    });

    // Function to search and redirect
    function searchAndRedirect() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        const match = appleProducts.find(p => p.name.toLowerCase() === query);
        if (match) {
            window.location.href = match.url;
        } else {
            alert("No product found. Try exact name like 'iPhone 17' or 'MacBook Air'.");
        }
    }

    // Button click triggers search
    searchBtn.addEventListener("click", searchAndRedirect);

    // Enter key triggers search
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchAndRedirect();
        }
    });

    // Close when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchDropdown.contains(event.target) && !searchIcon.contains(event.target)) {
            searchDropdown.style.display = "none";
        }
    });

});

// Hamburger menu toggle

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll'); // prevent background scroll
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
});

