const card = document.querySelector(".card");

card.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const buttons = card.querySelectorAll("button");
  const isActive = button.classList.contains("activated-btn");
  buttons.forEach((b) => b.classList.remove("activated-btn"));

  if (!isActive) {
    button.classList.add("activated-btn");
  }
});

console.log("Hello world!");
