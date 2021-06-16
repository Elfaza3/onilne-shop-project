export default function model() {

  const _AddedCart = [];
  const arrLength = localStorage.length;
  
  for(let i = 0; i < arrLength; i++){ // get all localstorage data and save it to a private array
    _AddedCart[i] = JSON.parse(Object.values(localStorage)[i]);	
  }



  function ProdIndex(prodID) {
    let prodIndex = 0;
    _AddedCart.forEach((elem, index) => {
      //TODO: to stop this forEach loop once it find the id.
      if (elem.id === prodID) {
        prodIndex = index;
        // return;
        // break;
      }
    });
    return prodIndex;
  }


  return {
    getProdData: () => _AddedCart,

    deleteProd: (prodID) => {
      const index = ProdIndex(prodID);
      if (index > -1) {
        _AddedCart.splice(index, 1); // remove product from array
        localStorage.removeItem(prodID); // remove product from localstorage
      }
      console.log(_AddedCart);
    },

  };
}
