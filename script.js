// **QUAN TRỌNG: THAY THẾ BẰNG SỐ ZALO CỦA BẠN**
const ZALO_PHONE_NUMBER = '0987654321';

// 🔥 DỮ LIỆU SẢN PHẨM MẶC ĐỊNH (DEFAULT SOURCE OF TRUTH)
// Dữ liệu này luôn được dùng.
// Lưu ý: ID được chuyển sang dạng chuỗi để tương thích với HTML dataset.
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
            { name: '30 Ngày', price: 395000 },
        ]
    },
    {
        id: '2',
        category: 'br',
        name: '🛠️ PC Bypass',
        img: 'https://i.imgur.com/OAomCLz.jpeg',
        desc: 'Xếp Hạng 50 Người',
        discountPercentage: 0,
        variants: [
            { name: '7 Ngày', price: 110000 },
            { name: '10 Ngày', price: 395000 },
            { name: '30 Ngày', price: 790000 },
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
            { name: '30 Ngày', price: 555000 },
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
            { name: 'Vĩnh Viễn', price: 1111000 },
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
            { name: '10 Tháng', price: 610000 },,
        ]
    },
];

let allProducts = []; 

// --- HÀM QUẢN LÝ DỮ LIỆU CƠ SỞ (LƯU/TẢI TOÀN BỘ CẤU TRÚC) ---

// ❌ BỎ HÀM getOrCreateAllProducts() để ngăn tải từ localStorage

// ❌ SỬA HÀM saveAllProductsToStorage - Không lưu vào localStorage nữa
function saveAllProductsToStorage(data) {
    // ⚠️ ĐÃ LOẠI BỎ localStorage.setItem('fullProductData', JSON.stringify(data));
    console.log('Chức năng lưu vào localStorage đã bị vô hiệu hóa.');
    // ❌ BỎ window.dispatchEvent(new Event('storage')); để ngăn cập nhật tự động không cần thiết
}

// ✅ SỬA HÀM loadAllProducts - Luôn tải từ dữ liệu mặc định
function loadAllProducts() {
    // Luôn tải từ dữ liệu gốc trong file script.js
    allProducts = defaultAllProducts;
    console.log('Đã tải dữ liệu sản phẩm mặc định (defaultAllProducts).');
}

// Tải dữ liệu chính thức khi script được chạy
loadAllProducts();

// Hàm tính giá bán cuối cùng
function calculateFinalPrice(basePrice, discountPercent) {
    const finalPrice = basePrice * (1 - discountPercent / 100);
    return Math.round(finalPrice / 1000) * 1000; // Làm tròn đến nghìn
}


// --- HÀM TẠO GIAO DIỆN QUẢN LÝ (Chỉ chạy trên admin.html) ---

// 🔥 HÀM THÊM PHIÊN BẢN (Gắn vào DOM)
function addVariant(buttonElement) {
    const productItem = buttonElement.closest('.admin-product-item');
    const variantsContainer = productItem.querySelector('.variants-container');
    
    // Tạo HTML cho phiên bản mới
    const newVariantHtml = `
        <div class="variant-editor new-variant">
            <input 
                type="text" 
                placeholder="Tên phiên bản mới (ví dụ: Size S)"
                value="Phiên bản mới"
                class="variant-name-input"
            >
            <input 
                type="number" 
                min="0"
                value="100000" 
                class="variant-price-input"
            >
            <button type="button" class="delete-variant-button" onclick="deleteVariant(this)">Xóa</button>
        </div>
    `;
    variantsContainer.insertAdjacentHTML('beforeend', newVariantHtml);
}

// 🔥 HÀM XÓA PHIÊN BẢN (Gắn vào DOM)
function deleteVariant(buttonElement) {
    const variantEditor = buttonElement.closest('.variant-editor');
    const variantsContainer = variantEditor.closest('.variants-container');
    
    // Cần ít nhất 1 phiên bản
    if (variantsContainer.children.length > 1) {
        if (confirm('Bạn có chắc muốn xóa phiên bản này?')) {
             variantEditor.remove();
        }
    } else {
        alert('Cần có ít nhất 1 phiên bản sản phẩm.');
    }
}


function loadAdminPanel() {
    const adminProductList = document.getElementById('admin-product-list');
    if (!adminProductList) return; 

    let adminHtml = '<h2>🛠️ Quản Lý Giá, Phiên Bản & Giảm Giá</h2>';

    allProducts.forEach(product => {
        // ID phải là chuỗi để dùng trong data-product-id
        const productId = String(product.id); 
        
        adminHtml += `
            <div class="admin-product-item" data-product-id="${productId}">
                <h3>${product.name} (ID: ${productId})</h3>
                
                <div class="editor-field">
                    <label for="name-${productId}">**Tên Sản Phẩm:**</label>
                    <input 
                        type="text" 
                        id="name-${productId}" 
                        value="${product.name}" 
                        class="product-name-input"
                    >
                </div>
                
                <div class="editor-field">
                    <label for="desc-${productId}">**Mô Tả Sản Phẩm:**</label>
                    <textarea 
                        id="desc-${productId}" 
                        class="product-desc-input"
                    >${product.desc}</textarea>
                </div>
                
                <div class="discount-editor">
                    <label for="discount-${productId}">Giảm Giá Sản Phẩm (ID: ${productId}) - %:</label>
                    <input 
                        type="number" 
                        id="discount-${productId}" 
                        min="0"
                        max="100"
                        value="${product.discountPercentage}" 
                        data-product-id="${productId}"
                        class="product-discount-input"
                    >
                </div>

                <h4>Phiên Bản & Giá Cơ Bản (VNĐ):</h4>
                <div class="variants-container">
        `;

        product.variants.forEach((variant, vIndex) => {
            adminHtml += `
                <div class="variant-editor" data-variant-index="${vIndex}">
                    <input 
                        type="text" 
                        value="${variant.name}" 
                        class="variant-name-input"
                    >
                    <input 
                        type="number" 
                        min="0"
                        value="${variant.price}" 
                        class="variant-price-input"
                    >
                    <button type="button" class="delete-variant-button" onclick="deleteVariant(this)">Xóa</button>
                </div>
            `;
        });

        adminHtml += `
                </div> 
                
                <button type="button" class="add-variant-button" onclick="addVariant(this)">
                    ➕ Thêm Phiên Bản
                </button>
                
                <button type="button" class="save-button" onclick="saveAdminChanges()">
                    💾 Lưu Tất Cả Thay Đổi
                </button>
            </div>
        `;
    });

    adminProductList.innerHTML = adminHtml;
    
    // Thêm CSS riêng cho trường Tên/Mô tả (để đảm bảo hiển thị đúng)
    const newAdminStyle = document.createElement('style');
    newAdminStyle.textContent = `
        .editor-field { margin-bottom: 15px; } 
        .editor-field label { display: block; font-weight: bold; margin-bottom: 5px; }
        .editor-field input[type="text"], .editor-field textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .editor-field textarea { height: 80px; resize: vertical; } 
    `;
    document.head.appendChild(newAdminStyle);
}

// --- 🔥 HÀM LƯU THAY ĐỔI TỪ ADMIN PANEL (REBUILD DỮ LIỆU) ---
function saveAdminChanges() {
    const adminProductItems = document.querySelectorAll('.admin-product-item');
    const newAllProducts = [];
    let hasError = false;

    adminProductItems.forEach(item => {
        const productId = item.dataset.productId;
        
        // 1. Lấy Tên và Mô Tả Mới
        const nameInput = item.querySelector('.product-name-input');
        const descInput = item.querySelector('.product-desc-input');
        
        const newName = nameInput ? nameInput.value.trim() : ''; // Kiểm tra null
        const newDesc = descInput ? descInput.value.trim() : ''; // Kiểm tra null

        // Kiểm tra Tên sản phẩm không được trống
        if (newName === "") {
            hasError = true;
            if (nameInput) nameInput.style.border = '2px solid red';
        } else {
            if (nameInput) nameInput.style.border = '1px solid #ccc';
        }
        if (descInput) descInput.style.border = '1px solid #ccc';


        // 2. Lấy Giảm Giá (%)
        const discountInput = item.querySelector('.product-discount-input');
        const newDiscount = parseFloat(discountInput.value);

        if (isNaN(newDiscount) || newDiscount < 0 || newDiscount > 100) {
            hasError = true;
            discountInput.style.border = '2px solid red';
        } else {
            discountInput.style.border = '1px solid #ccc';
        }

        // 3. Lấy thông tin Variant
        const newVariants = [];
        const variantEditors = item.querySelectorAll('.variant-editor');
        
        variantEditors.forEach(editor => {
            const nameInputVariant = editor.querySelector('.variant-name-input');
            const priceInputVariant = editor.querySelector('.variant-price-input');
            
            const newNameVariant = nameInputVariant.value.trim();
            const newPriceVariant = parseFloat(priceInputVariant.value);

            if (newNameVariant === "") {
                hasError = true;
                nameInputVariant.style.border = '2px solid red';
            } else {
                nameInputVariant.style.border = '1px solid #ccc';
            }

            if (isNaN(newPriceVariant) || newPriceVariant < 0) {
                hasError = true;
                priceInputVariant.style.border = '2px solid red';
            } else {
                priceInputVariant.style.border = '1px solid #ccc';
            }
            
            newVariants.push({
                name: newNameVariant,
                price: newPriceVariant
            });
        });

        // 4. Tái tạo cấu trúc sản phẩm
        // Phải tìm sản phẩm TỪ DỮ LIỆU MỚI NHẤT (allProducts), không phải defaultAllProducts
        const existingProduct = allProducts.find(p => String(p.id) === productId); 
        
        // Hoặc an toàn hơn là lấy từ defaultAllProducts để giữ lại category/img nếu chưa được lưu
        const sourceProduct = existingProduct || defaultAllProducts.find(p => String(p.id) === productId);
        
        if (sourceProduct) {
            newAllProducts.push({
                // Giữ lại các thuộc tính không thay đổi qua Admin Panel
                id: productId,
                category: sourceProduct.category,
                img: sourceProduct.img,
                
                // Cập nhật các thuộc tính đã chỉnh sửa
                name: newName, // 🔥 LƯU TÊN MỚI
                desc: newDesc, // 🔥 LƯU MÔ TẢ MỚI
                discountPercentage: newDiscount,
                variants: newVariants 
            });
        }
    });
    
    if (hasError) {
        alert('❌ Có giá trị nhập vào không hợp lệ (Tên sản phẩm/Tên phiên bản trống, không phải số, số âm, hoặc % ngoài phạm vi 0-100). Vui lòng kiểm tra lại các ô màu đỏ.');
        return;
    }

    // ❌ LOẠI BỎ VIỆC LƯU VÀO LOCALSTORAGE:
    // saveAllProductsToStorage(newAllProducts); // Không gọi hàm này nữa

    // ✅ CHỈ CẬP NHẬT BIẾN allProducts TRONG BỘ NHỚ:
    allProducts = newAllProducts;
    
    // Tải lại giao diện admin để phản ánh các thay đổi vừa thực hiện
    loadAdminPanel(); 

    alert('✅ Đã lưu cấu hình sản phẩm, phiên bản và giá thành công! LƯU Ý: Thay đổi này **CHỈ HIỆN TRÊN TRÌNH DUYỆT CỦA BẠN** cho đến khi bạn sửa trực tiếp file script.js và tải lên host.');
}

// --- LOGIC TRANG BÁN HÀNG GỐC (index.html) ---

// Lấy các phần tử HTML chính
const categorySection = document.getElementById('category-section');
const productDetailSection = document.getElementById('product-detail-section');
const productSectionTitle = document.getElementById('product-section-title');
const productDetailContainer = document.getElementById('product-detail-section');
const categoryList = document.getElementById('category-list');
const viewCategoriesButton = document.getElementById('view-categories');


// --- HÀM LẤY THÔNG TIN CATEGORY TỪ URL ---
function getCurrentCategoryFromHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#')) {
        return hash.substring(1); 
    }
    return null;
}

// 🔥 CẬP NHẬT: Thêm tên cho các danh mục mới của bạn
function getCategoryNameByKey(key) {
    if (key === 'br') return 'PHẦN MỀM CƠ BẢN';
    if (key === 'mxh') return 'DỊCH VỤ MẠNG XÃ HỘI';
    if (key === 'lq') return 'HACK LIÊN QUÂN MOBILE';
    if (key === 'pu') return 'HACK PUBG MOBILE';
    if (key === 'pl') return 'HACK PLAY TOGETHER';
    return 'Sản Phẩm Khác';
}

// --- HÀM ẨN/HIỆN GIAO DIỆN CHÍNH (HISTORY API) ---
function updateView(view = 'category', categoryKey = null, categoryName = null) {
    if (view === 'category') {
        categorySection.classList.remove('hidden');
        productDetailSection.classList.add('hidden');
        viewCategoriesButton.classList.add('hidden');
    } else if (view === 'product') {
        categorySection.classList.add('hidden');
        productDetailSection.classList.remove('hidden');
        viewCategoriesButton.classList.remove('hidden');
        displayProductsContent(categoryKey, categoryName);
    }
}

// --- HÀM HIỂN THỊ CHI TIẾT SẢN PHẨM (Nội dung) ---
function displayProductsContent(categoryKey, categoryName) {
    productSectionTitle.textContent = `Sản Phẩm Trong Mục: ${categoryName}`;
    
    const filteredProducts = allProducts.filter(product => product.category === categoryKey);
    let productsHtml = '';

    filteredProducts.forEach(product => {
        const discount = product.discountPercentage;
        
        let variantOptions = '';
        
        // Bỏ qua nếu không có phiên bản nào
        if (!product.variants || product.variants.length === 0) {
            return; 
        }
        
        product.variants.forEach((variant, index) => {
            const finalPrice = calculateFinalPrice(variant.price, discount);

            variantOptions += `
                <option 
                    value="${variant.name}|${finalPrice}" 
                    ${index === 0 ? 'selected' : ''}>
                    ${variant.name} - ${finalPrice.toLocaleString('vi-VN')} VNĐ
                </option>
            `;
        });
        
        const defaultBasePrice = product.variants[0].price;
        const defaultFinalPrice = calculateFinalPrice(defaultBasePrice, discount);
        
        let priceDisplay;
        if (discount > 0) {
            priceDisplay = `
                <p class="current-price">
                    Giá Gốc: <span class="original-price" style="text-decoration: line-through; color: #777;">${defaultBasePrice.toLocaleString('vi-VN')} VNĐ</span>
                </p>
                <p class="current-price">
                    Giá Bán: <span id="price-${product.id}" class="price final-price">${defaultFinalPrice.toLocaleString('vi-VN')} VNĐ</span>
                    <span class="discount-badge" style="background-color: red; color: white; padding: 2px 5px; border-radius: 3px; font-size: 0.8em; margin-left: 10px;">-${discount}%</span>
                </p>
            `;
        } else {
            priceDisplay = `
                <p class="current-price">Giá: <span id="price-${product.id}" class="price">${defaultFinalPrice.toLocaleString('vi-VN')} VNĐ</span></p>
            `;
        }


        productsHtml += `
            <div class="product-item" data-product-id="${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                
                <div class="variant-selector">
                    <label for="variant-${product.id}">Chọn Phiên Bản:</label>
                    <select id="variant-${product.id}" class="product-variant"> 
                        ${variantOptions}
                    </select>
                </div>

                ${priceDisplay}
                
                <button 
                    class="buy-now-button" 
                    data-id="${product.id}"
                    onclick="handleZaloBuy(this)">
                    Mua Ngay
                </button>
            </div>
        `;
    });

    productDetailContainer.innerHTML = productsHtml;

    // Thiết lập sự kiện thay đổi giá khi chọn phiên bản khác
    filteredProducts.forEach(product => {
        const selectElement = document.getElementById(`variant-${product.id}`);
        if (selectElement) { 
            selectElement.addEventListener('change', (e) => {
                const selectedValue = e.target.value;
                const price = selectedValue.split('|')[1];
                
                const priceElement = document.getElementById(`price-${product.id}`);
                if (priceElement) {
                     priceElement.textContent = parseFloat(price).toLocaleString('vi-VN') + ' VNĐ';
                }
            });
        }
    });
}

// --- HÀM XỬ LÝ CLICK NÚT MUA NGAY ZALO ---
function handleZaloBuy(buttonElement) {
    const productId = String(buttonElement.dataset.id); 
    const productItem = buttonElement.closest('.product-item');
    
    const selectElement = productItem.querySelector('.product-variant');
    const selectedValue = selectElement.value; 
    
    const [variantName, priceStr] = selectedValue.split('|');
    const finalPrice = parseFloat(priceStr);

    // Tìm thông tin sản phẩm để lấy tên
    const productInfo = allProducts.find(p => String(p.id) === productId); 
    if (!productInfo) return; 

    const zaloMessage = `Tôi muốn mua sản phẩm: ${productInfo.name}.\nPhiên bản đã chọn: ${variantName}.\nGiá: ${finalPrice.toLocaleString('vi-VN')} VNĐ (đã áp dụng giảm giá ${productInfo.discountPercentage}%).\n\nVui lòng tư vấn thêm về cách thức đặt hàng!`;
    const encodedMessage = encodeURIComponent(zaloMessage);
    
    const zaloLink = `https://zaloapp.com/qr/p/1i96fxkiiccc4?src=qr${ZALO_PHONE_NUMBER}?text=${encodedMessage}`;
    
    window.open(zaloLink, '_blank');
}


// ------------------------------------------------------------------------------------------------
// LOGIC KHỞI TẠO CHUNG (TỰ ĐỘNG)
// ------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    
    // --- KHỞI TẠO ADMIN PANEL (Chỉ chạy trên admin.html) ---
    if (document.getElementById('admin-product-list')) {
        loadAdminPanel();
        
        // Thêm CSS cho giao diện Admin (Nên chuyển sang style.css nếu có thể)
        const adminStyle = document.createElement('style');
        adminStyle.textContent = `
            .admin-product-item { margin-bottom: 30px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; }
            .variants-container {
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 4px;
                margin-bottom: 10px;
                background-color: #f9f9f9;
            }
            .variant-editor {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 5px;
                background-color: #ffffff;
                padding: 5px;
                border-radius: 3px;
                border-left: 3px solid #007bff;
            }
            .variant-editor input[type="text"] {
                flex-grow: 1;
                margin-right: 10px;
                padding: 8px;
                border: 1px solid #ddd;
            }
            .variant-editor input[type="number"] {
                width: 100px;
                text-align: right;
                margin-right: 10px;
                padding: 8px;
                border: 1px solid #ddd;
            }
            .delete-variant-button {
                background-color: #dc3545;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
            }
            .add-variant-button {
                background-color: #28a745;
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
            }
            .discount-editor label {
                font-weight: bold;
                margin-right: 10px;
            }
            .save-button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
                width: 100%;
                font-size: 1.1em;
            }
        `;
        document.head.appendChild(adminStyle);
        
        return; 
    }

    // --- KHỞI TẠO INDEX PAGE (Chỉ chạy trên index.html) ---
    if (categorySection && productDetailSection) {
        
        viewCategoriesButton.classList.add('hidden');

        // --- XỬ LÝ SỰ KIỆN CLICK CATEGORY ---
        categoryList.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-products')) {
                const categoryCard = e.target.closest('.category-card');
                const categoryKey = categoryCard.dataset.category;
                const categoryName = categoryCard.querySelector('h3').textContent;

                history.pushState({ view: 'product', key: categoryKey, name: categoryName }, categoryName, `#${categoryKey}`);
                updateView('product', categoryKey, categoryName);
            }
        });

        // --- XỬ LÝ NÚT QUAY LẠI CỦA TRÌNH DUYỆT (popstate) ---
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.view === 'product') {
                updateView('product', e.state.key, e.state.name);
            } else {
                updateView('category');
            }
        });
        
        // --- XỬ LÝ NÚT TRANG CHỦ ---
        viewCategoriesButton.addEventListener('click', () => {
            updateView('category'); 
            history.pushState(null, '', 'index.html'); 
        });

        // ❌ LOẠI BỎ HÀM LẮNG NGHE SỰ KIỆN STORAGE VÌ KHÔNG CẦN THIẾT NỮA
    }

});
