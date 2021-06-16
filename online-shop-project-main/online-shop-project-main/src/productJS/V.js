export default function view() {

  
  return {
    renderProducts: (product) => {
      let colDiv = document.createElement("div");
      colDiv.className = "card";
      // this line below gathering all needed element together and set the values for each one
      colDiv.innerHTML = `<div class="imgBx"><img src=${product.prodImg} /></div><div class="contentBx"><h2>${product.prodName}</h2><span class="color">${product.price}$</span><a id=${product.id}>Add To Cart</a></div>`;

      let div = document.getElementById("productsContainer");
      div.appendChild(colDiv);
    },

    sendMessage: (message) => { // send message to the user
      let divMessage = document.getElementById("togg");
      divMessage.innerText = message;
      divMessage.classList.toggle("success");
      setTimeout(() => divMessage.classList.toggle("success"), 1500);
    }
  };
}
