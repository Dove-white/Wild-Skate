let myNav = document.getElementById("for-phone");
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
