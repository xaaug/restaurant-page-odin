import home from "./home";
import menu from "./menu";
import about from "./about";
import "./app.css";

const root = document.getElementById("content");

root.innerHTML = home;


setTimeout(() => {
  const btns = document.querySelectorAll("button");
  console.log(btns);
  btns.forEach((btn) => {
    btn.addEventListener("click", ({ target }) => {
      const targetText = target.textContent;
      if (targetText == "Home") {
       root.innerHTML = home
      } else if (targetText === "Menu") {
        root.innerHTML = menu
      } else {
        root.innerHTML = about
      }
    });
  });
}, 1000);

