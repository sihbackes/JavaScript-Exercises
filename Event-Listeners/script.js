const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log(e.target);
  },
  { once: true } //runs only one time
);

// to run in a specific period of time
parent.addEventListener("click", printHi);

setTimeout(() => {
  parent.removeEventListener("click", printHi);
}, 2000); // the time here

function printHi() {
  console.log("Hello!");
} //the function
