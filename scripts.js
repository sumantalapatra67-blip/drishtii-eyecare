// =======================
// Hero Slider Fade Effect
// =======================
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slider");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000); // Change every 4 seconds
}

// Run slider only if hero slides exist
if (document.querySelector(".hero-sliders, .slider")) {
  showSlides();
}

// =======================
// Product Filtering (Shop Page)
// =======================
const filters = {
  price: 'all',
  gender: 'all',
  shape: 'all',
  material: 'all'
};

function filterProducts() {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    const price = parseInt(card.dataset.price || 0);
    const gender = card.dataset.gender || '';
    const shape = card.dataset.shape || '';
    const material = card.dataset.material || '';

    // Price filter
    let priceMatch = false;
    switch (filters.price) {
      case 'low': priceMatch = price < 2000; break;
      case 'med': priceMatch = price >= 2000 && price <= 4000; break;
      case 'high': priceMatch = price > 4000; break;
      default: priceMatch = true;
    }

    const genderMatch = filters.gender === 'all' || gender === filters.gender;
    const shapeMatch = filters.shape === 'all' || shape === filters.shape;
    const materialMatch = filters.material === 'all' || material === filters.material;

    // Show or hide card
    card.style.display = (priceMatch && genderMatch && shapeMatch && materialMatch) ? 'block' : 'none';
  });
}

// =======================
// Filter Event Listeners
// =======================
document.getElementById('filter-price')?.addEventListener('change', e => {
  filters.price = e.target.value;
  filterProducts();
});

document.getElementById('filter-gender')?.addEventListener('change', e => {
  filters.gender = e.target.value;
  filterProducts();
});

document.getElementById('filter-shape')?.addEventListener('change', e => {
  filters.shape = e.target.value;
  filterProducts();
});

document.getElementById('filter-material')?.addEventListener('change', e => {
  filters.material = e.target.value;
  filterProducts();
});

// =======================
// Initialize Products on Page Load
// =======================
if (document.readyState !== 'loading') {
  filterProducts();
} else {
  document.addEventListener('DOMContentLoaded', filterProducts);
}
