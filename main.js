let name1 = document.getElementById("name1");
let button = document.getElementById("submit");
let greeting = document.getElementById("greeting");
let wyname = document.getElementById("wyname");

button.addEventListener("click", teste);

function teste() {
  console.log("Passou");
  name1.classList.add("opacity-0");
  greeting.classList.remove("pb-8", "pt-9");
  greeting.classList.add("-translate-y-60");
  button.classList.add("translate-y-60");
  wyname.classList.add("-translate-y-60");
}

console.log(name1.classList.length);
