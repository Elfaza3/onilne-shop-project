// all images addresses in the main container should be here.
const images = [ // Model
  "images/t-shirts.jpg",
  "images/bags.jpg",
  "images/shoes.jpg",
];

// the h1 and p text for each image (it's array of objects).
const clarifications = [ // Model
  { h1: "Our T-Shirts Brand", p: "&#8681; here you can find all of our awesome T-Shirts! &#8681;",},
  { h1: "Our Bags Brand", p: "&#8681; here you can find all of our awesome Bags! &#8681;" },
  { h1: "Our Shoes Brand", p: "&#8681; here you can find all of our awesome Shoes! &#8681;" },
  
];
//...
// some globle declaration.
let img = document.getElementById("ContImg"); // View
let alt = img.alt; // View
let i;

// when pressing on next button this function will triggered.
let next = function () {
  // defining which image should display.
  if (alt == "t-shirts") {
    i = 1;
    alt = "bags";
  } else if (alt == "bags") {
    i = 2;
    alt = "shoes";
  } else if (alt == "shoes") {
    i = 0;
    alt = "t-shirts";
  }

  img.src = images[i]; // set the image.
  setDotState(i); // set dot class activity.
  changePandH1(i); // set the h1 and p for the image.
};

// when pressing on prev button this function will triggered.
let prev = function () {
  // defining which image should display.
  if (alt == "t-shirts") {
    i = 2;
    alt = "shoes";
  } else if (alt == "bags") {
    i = 0;
    alt = "t-shirts";
  } else if (alt == "shoes") {
    i = 1;
    alt = "bags";
  }

  img.src = images[i]; // set the image.
  setDotState(i); // set dot class activity.
  changePandH1(i); // set the h1 and p for the image.
};

// set the h1 and p for the specefic image.
let changePandH1 = (index) => {
  document.getElementById("imgH1").innerHTML = clarifications[index].h1;
  document.getElementById("imgP").innerHTML = clarifications[index].p;
};

// set image for the dot button that pressed.
let setImgNumber = (index) => {
  img.src = images[index];
  changePandH1(index);
  setDotState(index);
};

// to change to three dot active class to set or remove it.
let setDotState = function(setIndex){

  let dot = document.getElementsByClassName("dot");

  // loop through all dots.
  for(var index = 0; index < dot.length; index++){
    if(index == setIndex){
      dot[index].className += " active"; // set dot class.
      console.log(dot);
    }else {
      dot[index].className = dot[index].className.replace(" active", ""); // remove dot class.
    }
  }

}