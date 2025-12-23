// **CÀI ĐẶT THÔNG TIN LIÊN HỆ**
const ZALO_PHONE_NUMBER = '0346593904'; // Thay bằng số của bạn
const TELEGRAM_URL = 'https://t.me/vhfabr'; // Thay bằng link của bạn

// 🔥 DỮ LIỆU SẢN PHẨM MẶC ĐỊNH
const defaultAllProducts = [ 
    {
        id: '1',
        category: 'br',
        name: '🟢 Mobile',
        img: 'https://i.imgur.com/qKG9v2Z.jpeg',
        desc: 'Điều Kiện Để Chơi <br>1. Root Máy<br>2. Dùng KGA<br>3. Dùng PC Root Blustack',
        discountPercentage: 0, 
        variants: [
            { name: '1 Ngày', price: 80000 },
            { name: '7 Ngày', price: 240000 },
            { name: '15 Ngày', price: 290000 },
            { name: '30 Ngày', price: 400000 },
        ]
    },
    {
        id: '2',
        category: 'br',
        name: '🟢 PC Bypass',
        img: 'https://i.imgur.com/OAomCLz.jpeg',
        desc: 'Xếp Hạng 50 Người',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 110000 },
            { name: '10 Ngày', price: 400000 },
            { name: '30 Ngày', price: 820000 },
        ]
    },
    {
        id: '3',
        category: 'br',
        name: '🟢 PC No Bypass',
        img: 'https://i.imgur.com/OAomCLz.jpeg',
        desc: 'Ghép Trận Với  PC',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 80000 },
            { name: '10 Ngày', price: 320000 },
            { name: '30 Ngày', price: 570000 },
        ]
    },
    {
        id: '4',
        category: 'br',
        name: '🟢 Bypass',
        img: 'https://i.imgur.com/s08M4xi.jpeg',
        desc: 'Bypass Xếp Hạng 50 Người',
        discountPercentage: 0,
        variants: [
            { name: '1 Tháng', price: 400000 },
        ]
    },
    {
        id: '5',
        category: 'mxh',
        name: 'Facebook',
        img: 'https://i.imgur.com/uKFMjw3.png',
        desc: 'Dịch vụ mạng xã hội Facebook.',
        discountPercentage: 0,
        variants: [
            { name: 'Giá Tính Theo Số Lượng', price: 0},
        ]
    },
    {
        id: '6',
        category: 'mxh',
        name: 'TikTok',
        img: 'https://i.imgur.com/4ijy5tg.png',
        desc: 'Dịch vụ mạng xã hội TikTok.',
        discountPercentage: 0,
        variants: [
            { name: 'Giá Tính Theo Số Lượng', price: 0 },
        ]
    },
    {
        id: '7',
        category: 'lq',
        name: 'IOS - NoJB',
        img: 'https://i.imgur.com/o6wwhWq.jpeg',
        desc: 'HACK MAP LIÊN QUÂN MOBILE PHIÊN BẢN XOÁ TỐ DRACULA',
        discountPercentage: 0,
        variants: [
            { name: '2 Key 3h Kín', price: 45000 },
            { name: '7 Ngày Kín', price: 150000 },
            { name: '30 Ngày Chấp Tố + Múa Flo', price: 310000 },
            { name: '30 Ngày Xóa Tố Ẩn Udid', price: 410000 },
        ]
    },
    {
        id: '8',
        category: 'lq',
        name: 'IOSVIP - NoJB',
        img: 'https://i.imgur.com/TTAPsL4.jpeg',
        desc: ' HACK MAP LIÊN QUÂN MOBILE PHIÊN BẢN MINIMAP KÍN SIÊU RẺ',
        discountPercentage: 0,
        variants: [
            { name: '30 Ngày', price: 160000 },
        ]
    },
    {
        id: '9',
        category: 'lq',
        name: 'ADRVIP1 - 32/64',
        img: 'https://i.imgur.com/Y2Y5szV.jpeg',
        desc: 'HACK MAP LIÊN QUÂN MOBILE PHIÊN BẢN XOÁ TỐ/PHANG BỤI',
        discountPercentage: 0,
        variants: [
            { name: '30 Ngày + 7 Ngày', price: 370000 },
        ]
    },
    {
        id: '10',
        category: 'lq',
        name: 'ADR - 32/64',
        img: 'https://i.imgur.com/Ds1y6n3.jpeg',
        desc: 'HACK MAP LIÊN QUÂN MOBILE PHIÊN BẢN KÍN',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 50000 },
            { name: '30 Ngày', price: 270000 },
        ]
    },
    {
        id: '11',
        category: 'lq',
        name: 'ADRVIP - 32/64',
        img: 'https://i.imgur.com/t4yzch1.jpeg',
        desc: 'HACK MAP LIÊN QUÂN MOBILE PHIÊN BẢN XOÁ TỐ/PHANG BỤI',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 70000 },
            { name: '7 Ngày', price: 270000 },
            { name: '30 Ngày', price: 610000 },
        ]
    },
    {
        id: '12',
        category: 'pu',
        name: 'IOSVIP1 - JB',
        img: 'https://i.imgur.com/MO4RAyD.jpeg',
        desc: 'Hack Pubg Zenin iOS Jailbreak Streamer',
        discountPercentage: 0,
        variants: [
            { name: '1 Mùa/2 Tháng', price: 1222000 },
        ]
    },
    {
        id: '13',
        category: 'pu',
        name: 'IOSVIP2 - JB',
        img: 'https://i.imgur.com/LfNrAgq.jpeg',
        desc: ' HACK PUBG LUXURY ESP + MODSKIN',
        discountPercentage: 0,
        variants: [
            { name: '2 Giờ', price: 30000 },
            { name: '7 Ngày', price: 210000 },
            { name: '30 Ngày', price: 520000 },
        ]
    },
    {
        id: '14',
        category: 'pu',
        name: 'IOSHS - JB (Bear)',
        img: 'https://i.imgur.com/L4EA28L.jpeg',
        desc: 'HACK PUBG MOBILE BEAR',
        discountPercentage: 0,
        variants: [
            { name: '3 Giờ', price: 25000 },
            { name: '30 Ngày', price: 320000 },
        ]
    },
    {
        id: '15',
        category: 'pu',
        name: 'ADRHS',
        img: 'https://i.imgur.com/tsqAz0D.jpeg',
        desc: ' HACK PUBG JAVA MAFIA 32/64BIT',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 25000 },
            { name: '3 Ngày', price: 50000 },
            { name: '7 Ngày', price: 80000 },
            { name: '30 Ngày', price: 300000 },
            { name: '5 Tháng', price: 1111000 },
        ]
    },
    {
        id: '16',
        category: 'pu',
        name: 'IOSHS - JB (Darcuma)',
        img: 'https://i.imgur.com/9QfTbOP.jpeg',
        desc: 'HACK PUBG MOBILE DARCUMA',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 29000 },
            { name: '7 Ngày', price: 150000 },
            { name: '30 Ngày', price: 400000 },
        ]
    },
    {
        id: '17',
        category: 'pu',
        name: 'Acc',
        img: 'https://i.imgur.com/mvMfWyu.jpeg',
        desc: 'Acc Pubg Clone Vàng->Kim cương',
        discountPercentage: 0,
        variants: [
            { name: 'Acc FB Rank Vàng', price: 120000 },
            { name: '100% Rank Bạch Kim', price: 170000 },
        ]
    },
    {
        id: '18',
        category: 'pl',
        name: 'ADR',
        img: 'https://i.imgur.com/MaUEPbE.jpeg',
        desc: 'Hack Play Together Android VNG và Global - No Root/Root, Pc-Giả lập',
        discountPercentage: 0,
        variants: [
            { name: '4 Giờ', price: 10000 },
            { name: '7 Giờ', price: 15000 },
            { name: '1 Ngày', price: 20000 },
            { name: '3 Ngày 72h', price: 50000 },
            { name: '7 Ngày', price: 70000 },
            { name: '15 Ngày', price: 100000 },
            { name: '30 Ngày', price: 170000 },
            { name: '1 Tháng/1key 2 thiết bị', price: 270000 },
            { name: '3 Tháng/1key 2 thiết bị', price: 370000 },
        ]
    },
    {
        id: '19',
        category: 'pl',
        name: 'IOS',
        img: 'https://i.imgur.com/XChRLDZ.jpeg',
        desc: 'Hack Play Together iOS NO Jb/Jb',
        discountPercentage: 0,
        variants: [
            { name: '7 Ngày', price: 150000 },
            { name: '30 Ngày', price: 300000 },
            { name: '10 Tháng', price: 610000 },
        ]
    },
    {
        id: '20',
        category: 'br1',
        name: '🟢 PC Bypass',
        img: 'https://i.imgur.com/OAomCLz.jpeg',
        desc: 'Xếp Hạng 50 Người',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 100000 },
            { name: '10 Ngày', price: 200000 },
            { name: '30 Ngày', price: 300000 },
        ]
    },
    {
        id: '21',
        category: 'br1',
        name: '🟢 PC No Bypass',
        img: 'https://i.imgur.com/OAomCLz.jpeg',
        desc: 'Ghép Trận Với  PC',
        discountPercentage: 0,
        variants: [
            { name: '1 Ngày', price: 80000 },
            { name: '10 Ngày', price: 180000 },
            { name: '30 Ngày', price: 250000 },
        ]
    },
];

// --- SELECTORS ---
const categorySection = document.getElementById('category-section');
const productDetailSection = document.getElementById('product-detail-section');
const categoryList = document.getElementById('category-list');
const viewCategoriesButton = document.getElementById('view-categories');
const productSectionTitle = document.getElementById('product-section-title');
const productDetailContainer = document.getElementById('product-detail-container') || document.getElementById('product-detail-section');

// --- QUẢN LÝ GIAO DIỆN ---
function updateView(view = 'category', categoryKey = null, categoryName = null) {
    if (view === 'category') {
        categorySection.classList.remove('hidden');
        productDetailSection.classList.add('hidden');
        viewCategoriesButton.classList.add('hidden'); // Nút trang chủ ẩn ở trang chủ
        window.scrollTo(0, 0);
    } else {
        categorySection.classList.add('hidden');
        productDetailSection.classList.remove('hidden');
        viewCategoriesButton.classList.remove('hidden'); // Hiện nút trang chủ
        if (categoryKey) displayProductsContent(categoryKey, categoryName);
        window.scrollTo(0, 0);
    }
}

// --- HIỂN THỊ SẢN PHẨM ---
function displayProductsContent(categoryKey, categoryName) {
    productSectionTitle.textContent = `Sản Phẩm: ${categoryName}`;
    const filteredProducts = defaultAllProducts.filter(p => p.category === categoryKey);
    let productsHtml = '';

    filteredProducts.forEach(product => {
        let variantOptions = '';
        product.variants.forEach((variant, index) => {
            variantOptions += `<option value="${variant.price}" ${index === 0 ? 'selected' : ''}>${variant.name} - ${variant.price.toLocaleString('vi-VN')} VNĐ</option>`;
        });

        productsHtml += `
            <div class="product-item">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="variant-selector">
                    <select class="product-variant" onchange="updatePrice(this, '${product.id}')">
                        ${variantOptions}
                    </select>
                </div>
                <p class="current-price">Giá: <span id="price-${product.id}">${product.variants[0].price.toLocaleString('vi-VN')} VNĐ</span></p>
                
                <div class="contact-buttons">
                    <a href="${TELEGRAM_URL}" target="_blank" class="btn-contact btn-telegram">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"> Telegram
                    </a>
                    <button class="btn-contact btn-zalo" onclick="copyZalo('${ZALO_PHONE_NUMBER}')">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"> Copy Zalo
                    </button>
                </div>
            </div>`;
    });
    productDetailContainer.innerHTML = productsHtml;
}

// Cập nhật giá khi chọn option
window.updatePrice = function(selectElement, productId) {
    const price = parseInt(selectElement.value);
    document.getElementById(`price-${productId}`).textContent = price.toLocaleString('vi-VN') + ' VNĐ';
};

// Hàm Copy Zalo
window.copyZalo = function(phone) {
    navigator.clipboard.writeText(phone).then(() => {
        alert("✅ Đã copy số Zalo: " + phone + "\nBạn hãy dán vào ô tìm kiếm Zalo nhé!");
    });
};

// --- XỬ LÝ SỰ KIỆN ---
document.addEventListener('DOMContentLoaded', () => {
    // Click vào xem sản phẩm
    categoryList.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-products')) {
            const card = e.target.closest('.category-card');
            const key = card.dataset.category;
            const name = card.querySelector('h3').textContent;
            
            // Đẩy vào lịch sử trình duyệt để nút quay lại hoạt động
            history.pushState({ view: 'product', key, name }, name, `#${key}`);
            updateView('product', key, name);
        }
    });

    // Nút Trang chủ (Quay lại)
    viewCategoriesButton.addEventListener('click', () => {
        history.pushState({ view: 'category' }, 'Trang Chủ', ' ');
        updateView('category');
    });

    // Quan trọng: Xử lý nút Back của trình duyệt/điện thoại
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.view === 'product') {
            updateView('product', e.state.key, e.state.name);
        } else {
            updateView('category');
        }
    });
});