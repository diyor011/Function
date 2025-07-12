const body = document.querySelector("body");
const btnLight = document.querySelector("#btn1");
const btnDark = document.querySelector("#btn2");
const title = document.querySelector("h1"); // Agar siz "title" degan elementga yozmoqchi bo‘lsangiz, h1 bo'lishi mumkin

btnLight.addEventListener("click", btnLightmode);
btnDark.addEventListener("click", btnDarkmode);

function btnLightmode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";

  body.classList.remove("bg-dark", "text-white");
  body.classList.add("bg-white", "text-black");
   console.log(body);
   
  title.innerHTML = `Siz light modega o'tdingiz ✔`;
  return bodyBg, textColor;
}

function btnDarkmode() {
  body.style.backgroundColor = "#1a202c"; // quyuq rang
  body.style.color = "white";

  body.classList.remove("bg-white", "text-black");
  body.classList.add("bg-dark", "text-white");
console.log(body);

  title.innerHTML = `Siz dark modega o'tdingiz ✔`;
  return bodyBg, textColor
}
