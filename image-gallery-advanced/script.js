// Image Database (100 images with Unsplash)
const images = [
    // Nature (20 images)
    { id: 1, title: 'Mountain Landscape', category: 'nature', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
    { id: 2, title: 'Forest Path', category: 'nature', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800' },
    { id: 3, title: 'Ocean Waves', category: 'nature', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800' },
    { id: 4, title: 'Sunset Sky', category: 'nature', url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800' },
    { id: 5, title: 'Waterfall', category: 'nature', url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800' },
    { id: 6, title: 'Desert Dunes', category: 'nature', url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800' },
    { id: 7, title: 'Northern Lights', category: 'nature', url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800' },
    { id: 8, title: 'Cherry Blossoms', category: 'nature', url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800' },
    { id: 9, title: 'Autumn Forest', category: 'nature', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800' },
    { id: 10, title: 'Snowy Mountains', category: 'nature', url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800' },
    { id: 11, title: 'Tropical Beach', category: 'nature', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
    { id: 12, title: 'Rainforest', category: 'nature', url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800' },
    { id: 13, title: 'Canyon View', category: 'nature', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
    { id: 14, title: 'Lake Reflection', category: 'nature', url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800' },
    { id: 15, title: 'Flower Field', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800' },
    { id: 16, title: 'Rocky Coast', category: 'nature', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800' },
    { id: 17, title: 'Misty Valley', category: 'nature', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800' },
    { id: 18, title: 'Starry Night', category: 'nature', url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800' },
    { id: 19, title: 'Bamboo Forest', category: 'nature', url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800' },
    { id: 20, title: 'Volcanic Landscape', category: 'nature', url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800' },

    // Animals (20 images)
    { id: 21, title: 'Lion Portrait', category: 'animals', url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800' },
    { id: 22, title: 'Elephant Herd', category: 'animals', url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800' },
    { id: 23, title: 'Dolphin Jump', category: 'animals', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
    { id: 24, title: 'Eagle Flight', category: 'animals', url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800' },
    { id: 25, title: 'Panda Bear', category: 'animals', url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800' },
    { id: 26, title: 'Tiger Close-up', category: 'animals', url: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800' },
    { id: 27, title: 'Penguin Colony', category: 'animals', url: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=800' },
    { id: 28, title: 'Giraffe Family', category: 'animals', url: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800' },
    { id: 29, title: 'Wolf Pack', category: 'animals', url: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=800' },
    { id: 30, title: 'Butterfly Wings', category: 'animals', url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800' },
    { id: 31, title: 'Koala Bear', category: 'animals', url: 'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800' },
    { id: 32, title: 'Zebra Stripes', category: 'animals', url: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800' },
    { id: 33, title: 'Owl Eyes', category: 'animals', url: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800' },
    { id: 34, title: 'Sea Turtle', category: 'animals', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
    { id: 35, title: 'Fox Portrait', category: 'animals', url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800' },
    { id: 36, title: 'Monkey Family', category: 'animals', url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800' },
    { id: 37, title: 'Polar Bear', category: 'animals', url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800' },
    { id: 38, title: 'Hummingbird', category: 'animals', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800' },
    { id: 39, title: 'Cheetah Running', category: 'animals', url: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800' },
    { id: 40, title: 'Deer in Forest', category: 'animals', url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800' },

    // Travel (20 images)
    { id: 41, title: 'Eiffel Tower', category: 'travel', url: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800' },
    { id: 42, title: 'Tokyo Streets', category: 'travel', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' },
    { id: 43, title: 'Santorini Greece', category: 'travel', url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800' },
    { id: 44, title: 'New York City', category: 'travel', url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800' },
    { id: 45, title: 'Dubai Skyline', category: 'travel', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' },
    { id: 46, title: 'Venice Canals', category: 'travel', url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800' },
    { id: 47, title: 'Machu Picchu', category: 'travel', url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800' },
    { id: 48, title: 'Taj Mahal', category: 'travel', url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800' },
    { id: 49, title: 'London Bridge', category: 'travel', url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' },
    { id: 50, title: 'Sydney Opera', category: 'travel', url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800' },
    { id: 51, title: 'Barcelona Architecture', category: 'travel', url: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800' },
    { id: 52, title: 'Iceland Landscape', category: 'travel', url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800' },
    { id: 53, title: 'Bali Temple', category: 'travel', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
    { id: 54, title: 'Swiss Alps', category: 'travel', url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800' },
    { id: 55, title: 'Amsterdam Canals', category: 'travel', url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800' },
    { id: 56, title: 'Rio de Janeiro', category: 'travel', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800' },
    { id: 57, title: 'Prague Castle', category: 'travel', url: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800' },
    { id: 58, title: 'Singapore Marina', category: 'travel', url: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800' },
    { id: 59, title: 'Rome Colosseum', category: 'travel', url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' },
    { id: 60, title: 'Maldives Resort', category: 'travel', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800' },

    // Technology (15 images)
    { id: 61, title: 'Laptop Workspace', category: 'technology', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800' },
    { id: 62, title: 'Smartphone Screen', category: 'technology', url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800' },
    { id: 63, title: 'Circuit Board', category: 'technology', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800' },
    { id: 64, title: 'VR Headset', category: 'technology', url: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800' },
    { id: 65, title: 'Coding Screen', category: 'technology', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800' },
    { id: 66, title: 'Robot AI', category: 'technology', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800' },
    { id: 67, title: 'Data Center', category: 'technology', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800' },
    { id: 68, title: 'Drone Flight', category: 'technology', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800' },
    { id: 69, title: 'Smart Watch', category: 'technology', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800' },
    { id: 70, title: 'Gaming Setup', category: 'technology', url: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800' },
    { id: 71, title: 'Camera Gear', category: 'technology', url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800' },
    { id: 72, title: 'Wireless Earbuds', category: 'technology', url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800' },
    { id: 73, title: '3D Printer', category: 'technology', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800' },
    { id: 74, title: 'Server Room', category: 'technology', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800' },
    { id: 75, title: 'Tech Workspace', category: 'technology', url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800' },

    // Food (15 images)
    { id: 76, title: 'Gourmet Burger', category: 'food', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800' },
    { id: 77, title: 'Sushi Platter', category: 'food', url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800' },
    { id: 78, title: 'Pizza Slice', category: 'food', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800' },
    { id: 79, title: 'Fresh Salad', category: 'food', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800' },
    { id: 80, title: 'Pasta Dish', category: 'food', url: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800' },
    { id: 81, title: 'Chocolate Cake', category: 'food', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800' },
    { id: 82, title: 'Coffee Art', category: 'food', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800' },
    { id: 83, title: 'Fruit Bowl', category: 'food', url: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800' },
    { id: 84, title: 'Steak Dinner', category: 'food', url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800' },
    { id: 85, title: 'Ice Cream', category: 'food', url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800' },
    { id: 86, title: 'Breakfast Spread', category: 'food', url: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800' },
    { id: 87, title: 'Tacos', category: 'food', url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800' },
    { id: 88, title: 'Smoothie Bowl', category: 'food', url: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800' },
    { id: 89, title: 'Ramen Bowl', category: 'food', url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800' },
    { id: 90, title: 'Cupcakes', category: 'food', url: 'https://images.unsplash.com/photo-1426869884541-df7117556757?w=800' },

    // People (10 images)
    { id: 91, title: 'Business Meeting', category: 'people', url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800' },
    { id: 92, title: 'Yoga Practice', category: 'people', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800' },
    { id: 93, title: 'Friends Laughing', category: 'people', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800' },
    { id: 94, title: 'Musician Performance', category: 'people', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800' },
    { id: 95, title: 'Athlete Running', category: 'people', url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800' },
    { id: 96, title: 'Artist Painting', category: 'people', url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800' },
    { id: 97, title: 'Chef Cooking', category: 'people', url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800' },
    { id: 98, title: 'Student Studying', category: 'people', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800' },
    { id: 99, title: 'Family Portrait', category: 'people', url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800' },
    { id: 100, title: 'Dancer Movement', category: 'people', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800' }
];

// State
let currentCategory = 'all';
let currentImages = [...images];
let currentLightboxIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLastFilter();
    showLoader();
    
    // Simulate loading
    setTimeout(() => {
        renderGallery(currentImages);
        hideLoader();
    }, 1000);
    
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Search
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Lightbox
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', prevImage);
    document.getElementById('lightboxNext').addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('lightbox').classList.contains('show')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        }
    });
    
    // Close lightbox on background click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
}

// Render Gallery
function renderGallery(imagesToRender) {
    const grid = document.getElementById('galleryGrid');
    const noResults = document.getElementById('noResults');
    const imageCount = document.getElementById('imageCount');
    
    imageCount.textContent = imagesToRender.length;
    
    if (imagesToRender.length === 0) {
        grid.innerHTML = '';
        noResults.classList.add('show');
        return;
    }
    
    noResults.classList.remove('show');
    
    grid.innerHTML = imagesToRender.map((img, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})" style="animation-delay: ${index * 0.05}s">
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-title">${img.title}</div>
            </div>
            <div class="gallery-category">${img.category}</div>
        </div>
    `).join('');
}

// Filter Handler
function handleFilter(e) {
    const category = e.target.dataset.category;
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Filter images
    if (category === 'all') {
        currentImages = [...images];
    } else {
        currentImages = images.filter(img => img.category === category);
    }
    
    // Apply search if active
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        currentImages = currentImages.filter(img => 
            img.title.toLowerCase().includes(searchTerm)
        );
    }
    
    renderGallery(currentImages);
    saveLastFilter(category);
}

// Search Handler
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // Start with category filter
    let filtered = currentCategory === 'all' ? [...images] : images.filter(img => img.category === currentCategory);
    
    // Apply search
    if (searchTerm) {
        filtered = filtered.filter(img => 
            img.title.toLowerCase().includes(searchTerm)
        );
    }
    
    currentImages = filtered;
    renderGallery(currentImages);
}

// Lightbox Functions
function openLightbox(index) {
    currentLightboxIndex = index;
    const img = currentImages[index];
    
    document.getElementById('lightboxImg').src = img.url;
    document.getElementById('lightboxImg').alt = img.title;
    document.getElementById('lightboxCaption').textContent = img.title;
    document.getElementById('lightbox').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentImages.length) % currentImages.length;
    const img = currentImages[currentLightboxIndex];
    document.getElementById('lightboxImg').src = img.url;
    document.getElementById('lightboxCaption').textContent = img.title;
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentImages.length;
    const img = currentImages[currentLightboxIndex];
    document.getElementById('lightboxImg').src = img.url;
    document.getElementById('lightboxCaption').textContent = img.title;
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.getElementById('themeToggle');
    icon.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

// LocalStorage Functions
function saveLastFilter(category) {
    localStorage.setItem('lastFilter', category);
}

function loadLastFilter() {
    const lastFilter = localStorage.getItem('lastFilter') || 'all';
    const theme = localStorage.getItem('theme');
    
    if (theme === 'light') {
        document.body.classList.add('light');
        document.getElementById('themeToggle').textContent = '☀️';
    }
    
    currentCategory = lastFilter;
    
    // Set active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.category === lastFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter images
    if (lastFilter === 'all') {
        currentImages = [...images];
    } else {
        currentImages = images.filter(img => img.category === lastFilter);
    }
}

// Loader Functions
function showLoader() {
    document.getElementById('loader').classList.add('show');
}

function hideLoader() {
    document.getElementById('loader').classList.remove('show');
}
