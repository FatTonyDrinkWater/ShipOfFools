const buttons = document.querySelectorAll("button");

// Альтерантивные, нерекомендуемые способы.
// button.onclick = function () {
//   alert("Hello world!");
// };
const buttonClickHandler = (e) => {
  e.target.disabled = true;
  console.log(e);
};
// button.onclick = buttonClickHandler;

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});
