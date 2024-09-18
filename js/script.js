
let allProducts = document.querySelector(".products")
let products = [
  {
    id: 1,
    title: "rolex",
    info: "The New Rolex In The Year",
    imgUrl: "images/01-328x460.png",
  },
  {
    id: 2,
    title: "rolex 22",
    info: "The New Rolex In The Year",
    imgUrl: "images/02-328x460.png",
  },
  {
    id: 3,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/03-328x460.png",
  },
  {
    id: 4,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/06-328x460.png",
  },
  {
    id: 5,
    title: "rolex 26",
    info: "The New Rolex In The Year",
    imgUrl: "images/07-328x460.png",
  },
  {
    id: 6,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/08-328x460.png",
  },
  {
    id: 7,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/11-328x460.png",
  },
  {
    id: 8,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/12-328x460.png",
  },
  {
    id: 9,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/13-328x460.png",
  },
  {
    id: 10,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/14-328x460.png",
  },
  {
    id: 11,
    title: "rolex",
    info: "The New Rolex In The Year",
    imgUrl: "images/01-328x460.png",
  },
  {
    id: 12,
    title: "rolex 22",
    info: "The New Rolex In The Year",
    imgUrl: "images/02-328x460.png",
  },
  {
    id: 13,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/03-328x460.png",
  },
  {
    id: 14,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/06-328x460.png",
  },
  {
    id: 15,
    title: "rolex 26",
    info: "The New Rolex In The Year",
    imgUrl: "images/07-328x460.png",
  },
  {
    id: 16,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/08-328x460.png",
  },
  {
    id: 17,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/11-328x460.png",
  },
  {
    id: 18,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/12-328x460.png",
  },
  {
    id: 19,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/13-328x460.png",
  },
  {
    id: 20,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/14-328x460.png",
  },
  {
    id: 21,
    title: "rolex",
    info: "The New Rolex In The Year",
    imgUrl: "images/01-328x460.png",
  },
  {
    id: 22,
    title: "rolex 22",
    info: "The New Rolex In The Year",
    imgUrl: "images/02-328x460.png",
  },
  {
    id: 23,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/03-328x460.png",
  },
  {
    id: 24,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/06-328x460.png",
  },
  {
    id: 25,
    title: "rolex 26",
    info: "The New Rolex In The Year",
    imgUrl: "images/07-328x460.png",
  },
  {
    id: 26,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/08-328x460.png",
  },
  {
    id: 27,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/11-328x460.png",
  },
  {
    id: 28,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/12-328x460.png",
  },
  {
    id: 29,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/13-328x460.png",
  },
  {
    id: 30,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/14-328x460.png",
  },
  {
    id: 31,
    title: "rolex",
    info: "The New Rolex In The Year",
    imgUrl: "images/01-328x460.png",
  },
  {
    id: 32,
    title: "rolex 22",
    info: "The New Rolex In The Year",
    imgUrl: "images/02-328x460.png",
  },
  {
    id: 33,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/03-328x460.png",
  },
  {
    id: 34,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/06-328x460.png",
  },
  {
    id: 35,
    title: "rolex 26",
    info: "The New Rolex In The Year",
    imgUrl: "images/07-328x460.png",
  },
  {
    id: 36,
    title: "rolex 24",
    info: "The New Rolex In The Year",
    imgUrl: "images/08-328x460.png",
  },
  {
    id: 37,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/11-328x460.png",
  },
  {
    id: 38,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/12-328x460.png",
  },
  {
    id: 39,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/13-328x460.png",
  },
  {
    id: 40,
    title: "rolex 23",
    info: "The New Rolex In The Year",
    imgUrl: "images/14-328x460.png",
  },
];


function drawItems() {
    let y = products.map((item) => {
        return `
        <div class="product-item">

                    <img draggable="false" src="${item.imgUrl}" alt="#" class="product-img">

                        <div class="product-desc">
                            <h2 class="product-title">${item.title}</h2>
                            <p class="product-info">${item.info}</p>
                        </div>
                        <div class="product-item-action">
                            <button class="add-to-cart" onClick="addToCart(${item.id})">Add To Cart</button>
                            <i class="fas fa-heart product-icon"></i>
                        </div>

                </div>
        `;
    })
    allProducts.innerHTML = y;
}
drawItems()

let btnAdd = document.querySelector(".add-to-cart");
let cartProductDiv = document.querySelector(".carts-products div");
let badge = document.querySelector(".badge");



let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
  addedItem.map(item => {
    cartProductDiv.innerHTML += `<p>${item.title}</p>`;
  })
  badge.style.display = "block"
  badge.innerHTML = addedItem.length;

}

    if (localStorage.getItem("username")) {
        function addToCart(id) {
          let choosenItem = products.find((item) => item.id === id);
          cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
          addedItem = [...addedItem, choosenItem]
          localStorage.setItem("productsInCart", JSON.stringify(addedItem));

          let countProducts = document.querySelectorAll(
            ".carts-products div p"
          );
          badge.style.display = "block";
          badge.innerHTML = countProducts.length;
        }
    } else {
        window.location="login.html"
    }

let shoppingCartIcon = document.querySelector(".shopping-cart-icon")
let cartProduct = document.querySelector(".carts-products");




function hideShow() {
    if (cartProductDiv.innerHTML != "") {
        if ((cartProduct.style.display == "block")) {
          cartProduct.style.display = "none";
        } else {
          cartProduct.style.display = "block";
        }
    }

}

shoppingCartIcon.addEventListener("click", hideShow)






