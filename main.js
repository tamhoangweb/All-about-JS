const grandPrent = document.querySelector(".grandParent");
const parents = Array.from(document.getElementsByClassName("parent"));
// parents.forEach((parent) => {
//   changeColor(parent);
// });
parents.forEach(changeColor);
function changeColor(element) {
  element.style.backgroundColor = "#333";
}

// console.log(parents[0].children[0].closest(".grandParent"));

const body = document.body;
body.append("hi");

spanBye = document.querySelector("#bye");
// spanBye.setAttribute("title", "tiêu đề");
spanBye.title = "tiêu đề 2";
spanBye.removeAttribute("title");
console.log(spanBye.title);
