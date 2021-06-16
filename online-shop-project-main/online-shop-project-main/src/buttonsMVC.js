//Model
data = (function () {
  console.log("it's the model data");

  const _images = [
    // all images addresses in the main container should be here.
    "images/t-shirts.jpg",
    "images/bags.jpg",
    "images/shoes.jpg",
  ];
  // the h1 and p text for each image (it's array of objects).
  const _clarifications = [
    {
      h1: "Our T-Shirts Brand",
      p: "&#8681; here you can find all of our awesome T-Shirts! &#8681;",
    },
    {
      h1: "Our Bags Brand",
      p: "&#8681; here you can find all of our awesome Bags! &#8681;",
    },
    {
      h1: "Our Shoes Brand",
      p: "&#8681; here you can find all of our awesome Shoes! &#8681;",
    },
  ];
  const _imageAlt = ["t-shirts", "bags", "shoes"];

  return {
    getAltByIndex: (index) => _imageAlt[index], // get img alt to certain image
    getIndex: function (callBackAlt) {
      // get index for certain image by calling fuction callback
      var resivedAlt = callBackAlt();
      return _imageAlt.findIndex((value) => value == resivedAlt);
    },
    getimage: (index) => _images[index],
    getClarificate: (index) => _clarifications[index],
  };
})();

// View
view = (function () {
  console.log("it's the view");

  let _img = document.getElementById("ContImg");
  let _dot = document.getElementsByClassName("dot");
  const _DOMKeys = {
    // id names
    nextID: "next",
    prevID: "prev",
    dot0ID: "dot0",
    dot1ID: "dot1",
    dot2ID: "dot2",
  };

  return {
    getDOMKeys: _DOMKeys,

    getAlt: () => _img.alt,

    // get the next index where what image should be, using what button was pressed
    getNextIndex: (currentIndex, nextOrPrev) => {
      switch (nextOrPrev) {
        case "next": {
          if (currentIndex === 0) return 1;
          else if (currentIndex === 1) return 2;
          else return 0;
        }
        case "prev": {
          if (currentIndex === 0) return 2;
          else if (currentIndex === 1) return 0;
          else return 1;
        }
        default:
          return 0;
      }
    },

    setImage: function (newImage, newAlt) {
      // to the next image
      _img.src = newImage; // set the new image.
      _img.alt = newAlt; // set new alt
    },

    setClarification: (clarification) => {
      document.getElementById("imgH1").innerHTML = clarification.h1;
      document.getElementById("imgP").innerHTML = clarification.p;
    },

    // set DOT buttons classes, apply or remove active class
    setDotState: function (index) {
      // loop through all dots.
      for (var i = 0; i < _dot.length; i++) {
        if (i == index) {
          _dot[i].className += " active"; // set dot class.
        } else {
          _dot[i].className = _dot[i].className.replace(" active", ""); // remove dot class.
        }
      }
    },
  };
})();

//Controller
controller = (function (data, view) {
  console.log("it's the model data");

  var _indexFlag = 0; // flag to know if the dot button pressed two times
  var startEvents = function () {
    const DOM = view.getDOMKeys;
    const buttonType = "click";

    // EventListener for each button
    document
      .getElementById(DOM.nextID)
      .addEventListener(buttonType, () => setNewImage("next"));
    document
      .getElementById(DOM.prevID)
      .addEventListener(buttonType, () => setNewImage("prev"));
    document
      .getElementById(DOM.dot0ID)
      .addEventListener(buttonType, () => setStateByIndex(0));
    document
      .getElementById(DOM.dot1ID)
      .addEventListener(buttonType, () => setStateByIndex(1));
    document
      .getElementById(DOM.dot2ID)
      .addEventListener(buttonType, () => setStateByIndex(2));

    document.getElementById("ContImg").addEventListener(buttonType, () => {
      // needs to add ContImg to the _DOMKeys and put it like enumerable: false
      window.location.href = "../view/product.html";

      document.getElementById("ContImg").style = "cursor: pointer"; // add this style to the css, not j
    });

  };

  let setNewImage = function (nextOrPrev) {
    // defines which button pressed and call set image
    let index = data.getIndex(view.getAlt);
    let nextIndex = view.getNextIndex(index, nextOrPrev);
    setNewImageByIndex(nextIndex);
  };

  let setNewImageByIndex = (index) => {
    // set the new image by the index was sent
    let newImage = data.getimage(index);
    let newAlt = data.getAltByIndex(index);
    let newClarification = data.getClarificate(index);

    view.setImage(newImage, newAlt);
    view.setClarification(newClarification);
    setDot(index);
  };

  let setDot = function (index) {
    // calling setdot to change the dot state
    view.setDotState(index);
    _indexFlag = index;
  };

  let setStateByIndex = (index) => {
    // change the DOTState and set the image for the dot button that pressed
    if (index != _indexFlag) {
      setNewImageByIndex(index);
      setDot(index);
      _indexFlag = index;
    }
  };

  return {
    // start funtion
    start: () => startEvents(),
  };
})(data, view);

// start the controller
controller.start();
