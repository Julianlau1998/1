const button = document.getElementById("button");
let clicks = 0;

button.addEventListener("click", () => {
  clicks += 1;
  console.log(`Clicked ${clicks} times`);
});
