const menu = document.getElementById("hamburgerMenu");
const menuBar = document.getElementById("menuBar");
console.log(menu);

menu.addEventListener("click", () => {
  menuBar.classList.toggle("hidden");
  console.log(menuBar.classList);

  console.log(15);
});
