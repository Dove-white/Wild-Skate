let myNav = document.getElementById("for-phone");
let closeNav = document.getElementById("close-nav-icon");
let myList = false;

function openCloseNav() {
  if (myList == false) {
    myNav.style.display = "flex";
    myList = true;
  } else if (myList == true) {
    myNav.style.display = "none";
    myList = false;
  }
}


// Add image to html with javascript

// all images and their styles
let images = [
  "img/blue-shoe.png",
  "img/yellow-shoe.png",
  "img/black-shoe.png",
  "img/red-shoe.png",
  "img/white-shoe.png",
];
const shoeStyle = "w-[200px] png-shadow group-hover:-scale-x-100 transition-all";

// For blue White Shoe
let blueShoe = document.getElementById('blue-shoe');
blueShoe.src = images[0];
blueShoe.className = shoeStyle;

// For yellow gray shoe
let yellowShoe = document.getElementById("yellow-shoe");
yellowShoe.src = images[1];
yellowShoe.className = shoeStyle;

// For black white shoe 
let blackShoe = document.getElementById("black-shoe");
blackShoe.src = images[2];
blackShoe.className = shoeStyle;

// For red white shoe 
let redShoe = document.getElementById("red-shoe");
redShoe.src = images[3];
redShoe.className = shoeStyle;

// For white white shoe 
let whiteShoe = document.getElementById("white-shoe");
whiteShoe.src = images[4];
whiteShoe.className = shoeStyle;