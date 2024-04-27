function cambiaSfondo() {
  var navbar = document.getElementById("navbar");
  var btn = document.getElementById("button-via");
  const scrollValore = window.scrollY;
  if (scrollValore < 350) {
    navbar.classList.remove("bg-color");
    btn.classList.remove("classe-btn");
  } else {
    navbar.classList.add("bg-color");
    btn.classList.add("classe-btn");
  }

  console.log(scrollValore);
}

window.addEventListener("scroll", cambiaSfondo);
