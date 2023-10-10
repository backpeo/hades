const productOnSale = [
  {
    Image:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    Image2:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    name: 'p1',
    msp: 'MSP001',
    cost: 12000,
    id: 0,
  },
  {
    Image:
      'https://product.hstatic.net/1000306633/product/dsc06312_7713a30883bf4f0aa3e368d9caf5ad49_grande.jpg',
    Image2:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    name: 'p2',
    msp: 'MSP002',
    cost: 16000,
    id: 1,
  },
  {
    Image:
      'https://product.hstatic.net/1000306633/product/dsc09844_99e6867866b04047b9d49fc637296d1b_grande.jpg',
    Image2:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    name: 'p3',
    msp: 'MSP003',
    cost: 1200,
    id: 2,
  },
];

const product_id = new URLSearchParams(document.location.href.split('?')[1]).get('id');

const array = [];

var searchInput = document.querySelector('.searchInput');

var right = document.querySelector('.right');
var element = document.getElementById('header');

var bgf = document.querySelector('.bgf');
var main = document.getElementById('main');
var contain = document.querySelector('.contain');
var button = document.querySelector('.search1');

var button_x = document.getElementById('icon');

var shopping_cart = document.querySelector('.shopping-cart');
var shop = document.querySelector('.shop');
var cart = document.querySelector('.cart');

const totalPrice = () => {
  const sum = array.reduce((preve, current) => preve + current.cost, 0);
  document.getElementById('price_product').innerHTML = `${sum}đ`;
};

totalPrice();

const handleDeleteCard = (index) => {
  array.splice(index, 1);
  Render();
  totalPrice();
};

const Render = function () {
  var originHTML = '';
  if (array.length === 0) {
    originHTML = `
      <div>Your cart is emty now</div>

    `;
  }

  // giỏ hàng
  array.map((element, index) => {
    const html = `
        <div class="around">

        <img class="img-shop" src="${element.Image}">
        <div class="name-shop"  > ${element.name} </div>
        <div class="total-shop">
        <div > ${element.cost} đ
        </div>
        <div class="btn-xshop" onClick={handleDeleteCard(${index})}>
        <i class="fa-solid fa-xmark"  ></i>
        </div>
        </div>
        </div>
          `;
    originHTML = originHTML + html;
  });
  const cartItem = document.getElementById('san-pham');
  cartItem.innerHTML = originHTML;
};
Render();

const handleAdd = function (index) {
  array.push(productOnSale[index]);
  console.log(array);
  Render();
  totalPrice();
};

//tim kiem

searchInput.addEventListener('keyup', function (e) {
  var searchKeyword = e.target.value.toLowerCase();
  var filteredProducts = productOnSale.filter((product) => {
    if (product.name.toLowerCase().includes(searchKeyword)) return product;
  });
  console.log(searchKeyword);
  if (searchKeyword.trim() === '') filteredProducts = [];
  RenderAllLooking(filteredProducts);
});

const RenderAllLooking = (results) => {
  var allLooking = '';
  if (results?.length === 0) allLooking = `<div class="cover"> Have no product </div>`;
  else {
    results?.map((element) => {
      const looking = `
      <div class="cover">
      
      <div class="looking-item">
                <p class="name-looking"> ${element.name}</p>
                <img class="img-looking" src="${element.Image}" alt="">
                
              </div>
              <div class="looking-item">
  
                <p class="cost-item" >cost:</p>
                <p class="cost-item">${element.cost}d</p>
              </div>
      </div>
  
      `;
      allLooking = allLooking + looking;
    });
  }
  const allLookingProduct = document.getElementById('product-looking');
  allLookingProduct.innerHTML = allLooking;
};
RenderAllLooking();

const RenderAllProduct = () => {
  const element = productOnSale[product_id];
  console.log(element);

  const allProduct = `
    <div class="info-prd">
      <div class="info-prodct">
        <ul>
          <li>đây là sản phẩm thuộc về hades</li>

          <li>sản phẩm được làm bằng cotton 100%</li>

          <li>siêu mát siêu thấm hút mồ hôi</li>
        </ul>
      </div>

      <div class="image">
        <img src="${element.Image}" alt="" /> <img src="${element.Image2}" alt="" />
      </div>
    </div>

    <div class="info-image">
      <div class="name">
        <p>${element.name}</p>
      </div>

      <div class="msp">
        <p>${element.msp}</p>
      </div>

      <div class="cost">
        Giá:
        <p>${element.cost}</p>
      </div>

      <div class="size">
        <p>Chọn size</p>

        <select name="size" id="size">
          <option value="">S</option>

          <option value="">M</option>

          <option value="">L</option>

          <option value="">XL</option>
        </select>
      </div>

      <div class="button">
        <button class="l">Mua ngay</button> <button class="r">Thêm vào giỏ</button>
      </div>
    </div>

    `;
  const allInfoProduct = document.getElementById('see');
  console.log(allInfoProduct);
  allInfoProduct.innerHTML = allProduct;
};
RenderAllProduct();

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 66) {
    element.classList.add('beta');
  } else {
    element.classList.remove('beta');
  }
});

button.addEventListener('click', () => {
  contain.classList.add('active');
  main.classList.add('active2');
  bgf.classList.add('active3');
});

button_x.addEventListener('click', () => {
  contain.classList.remove('active');
  main.classList.remove('active2');
  bgf.classList.remove('active3');
});

bgf.addEventListener('click', () => {
  contain.classList.remove('active');
  main.classList.remove('active2');
  bgf.classList.remove('active3');
});

shop.addEventListener('click', () => {
  shopping_cart.classList.add('active');
  main.classList.add('active2');
  bgf.classList.add('active3');
});

bgf.addEventListener('click', () => {
  shopping_cart.classList.remove('active');
  main.classList.remove('active2');
  bgf.classList.remove('active3');
});
