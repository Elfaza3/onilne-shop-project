import Model from "./model.js";
import View from "./view.js";

controle = (function (data, view) {
  const productsData = data.getProdData();

  sendProduct(productsData);

  function sendProduct(productData) {
    productData.forEach((product) => { // show all products
      view.addProduct(product);
      setListener(product.id);
    });
  }

  function setListener(prodID) {
    //TODO: add alert that says "Removed From Cart"
    document.getElementById(prodID).addEventListener("click", () => {
      console.log(prodID);
      data.deleteProd(prodID);
      view.clearView();
      sendProduct(productsData);
      view.sendMessage("Successfully Removed");
    });
  }
})(new Model(), new View());
