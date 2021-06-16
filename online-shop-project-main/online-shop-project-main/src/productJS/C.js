import Model from "./M.js";
import View from "./V.js";


function controle(data, view) {
  const products = data.getProduct();

  data.clearLocalSrotage();

  sendProduct(products);
  view.sendMessage("Start Adding Product");

  function sendProduct(productsData) {
    productsData.forEach((product) => { // show all products
      view.renderProducts(product);
      setListeners(product);
    });
  }

  function setListeners(prod) {
    //TODO:0 add alert that says "Added To Cart"
    document.getElementById(prod.id).addEventListener("click", () => {
      console.log(prod.id);
      data.addToCart(prod);
      view.sendMessage("Added To The Cart");
    });
  }
}

let Controle = new controle(Model(), View());
