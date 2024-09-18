let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".products");
if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drawCartsProducts(item);
}
function drawCartsProducts(products) {
  let y = products.map((item) => {
    return `
        <div class="product-item">
                    <img draggable="false" src="${item.imgUrl}" alt="#" class="product-img">
                    <div class="product-desc">
                        <h2 class="product-title">${item.title}</h2>
                        <p class="product-info">${item.info}</p>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onClick="RemoveFromCart(${item.id})">Remove From Cart</button>
                    </div>
                </div>

            `
          ;
  });
    allProducts.innerHTML = y;

}

function RemoveFromCart(id) {

  let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];


  let index = productsInCart.findIndex((item) => item.id === id);


  if (index !== -1) {
    productsInCart.splice(index, 1);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    drawCartsProducts(productsInCart);
  }
}


