let myNav = document.getElementById("for-phone");
let closeNav = document.getElementById("close-nav-icon");
let myList = false;

function openCloseNav() {
  if (myList == false) {
    myNav.style.height = "auto";
    myNav.style.paddingTop = '3rem';
    myNav.style.paddingBottom = '3rem';
    myList = true;
  } else if (myList == true) {
    myNav.style.height = "0";
    myNav.style.paddingTop = "0";
    myNav.style.paddingBottom = "0";
    myList = false;
  }
}

// Fetching items from shoeGallery json file

let http = new XMLHttpRequest();
http.open("get", "shoeGallery.json", true);
http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let shoeGallery = JSON.parse(this.responseText);

    let output = "";

    for (let items of shoeGallery) {
      output += `
              <figure id="blue-shoe" class="group">
                <img
                  class="w-[200px] png-shadow group-hover:-scale-x-100 transition-all"
                  src="${items.image}"
                  alt=""
                />
                <p class="font-[700] text-[18px] leading-5 pl-[15px]">${items.shoeTittle}<br /><samp class="text-[#8d171b]">${items.price}</samp>
                </p>
              </figure>
              `;
    }

    document.querySelector(".all__shoes").innerHTML = output;
  }
};
