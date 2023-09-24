var element = document.getElementById('header');
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 66) {
    element.classList.add('beta');
  } else {
    element.classList.remove('beta');
  }
});
var bgf = document.querySelector('.bgf');
var main = document.getElementById('main');
var contain = document.querySelector('.contain');
var button = document.querySelector('.search1');
button.addEventListener('click', () => {
  contain.classList.add('active');
  main.classList.add('active2');
  bgf.classList.add('active3');
});

var button_x = document.getElementById('icon');
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

var shopping_cart = document.querySelector('.shopping-cart');
var shop = document.querySelector('.shop');
var cart = document.querySelector('.cart');
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

// giỏ hàng

const array = [
  {
    Image:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    name: 'product1',
    cost: 12000,
  },
  {
    name: 'product2',
    cost: 12000,
  },
  {
    name: 'product3',
    cost: 12000,
  },
];

const Render = function () {
  var originHTML = '';

  array.map((element) => {
    const html = `
    <div class="around">
    
    <img class="img-shop" src="${element.Image}"> 
    <div class="name-shop"  > ${element.name} </div>
    <div class="total-shop">
    <div > ${element.cost}  
    </div>
    <div class="btn-xshop">
    <i class="fa-solid fa-xmark"  ></i>
    </div>
    </div>
    </div>
      `;
    originHTML = originHTML + html;
  });

  document.getElementById('san-pham').innerHTML = originHTML;
};
Render();

const handleClick = function () {
  contain.classList.remove('active');
  shopping_cart.classList.remove('active');
  main.classList.remove('active2');
  bgf.classList.remove('active3');
  array.push({
    Image:
      'https://product.hstatic.net/1000306633/product/hd_thang_8.1076_0bc59cee572f420e858e2d078bf10aed_grande.jpg',
    name: 'product4',
    cost: 18000,
  });
  Render();
};

var btn_xshop = querySelector('.btn-xshop');
function removeItem(index) {
  array.splice(index, 1);
}
Render();
