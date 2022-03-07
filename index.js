console.log("I'm working!");

const content = document.getElementById("content");

const loadDisplay = function loadDisplayController() {
  const navWrapper = document.createElement("header");
  navWrapper.id = "nav-wrapper";
  const nav = document.createElement("nav");
  nav.id = "nav";
  const divNavLeft = document.createElement("div");
  divNavLeft.id = "nav-left";
  const spanNavLeft = document.createElement("span");
  spanNavLeft.id = "nav left";
  const titleHeader = document.createElement("h1");
  titleHeader.classList.add("logo");
  const title = document.createElement("a");
  title.id = "title";
  title.href = "index.html";
  title.innerText = "Casa Ristoranti";
  titleHeader.appendChild(title);
  spanNavLeft.appendChild(titleHeader);
  divNavLeft.appendChild(spanNavLeft);
  nav.appendChild(divNavLeft);
  navWrapper.appendChild(nav);
  content.appendChild(navWrapper);

  const imgContainer = document.createElement("div");
  imgContainer.id = "image-container";
  const bgImg = document.createElement("img");
  bgImg.id = "bg-image";
  bgImg.src = "static/bg.jpg";
  bgImg.alt = "Background image showing Restaurant";
  const copy = document.createElement("div");
  copy.classList.add("centered");
  copy.innerText =
    "U nas poczujesz prawdziwe smaki kuchni włoskiej. Gotujemy tylko na oryginalnych produktach i przepisach prosto z Włoch";
  imgContainer.appendChild(bgImg);
  imgContainer.appendChild(copy);
  content.appendChild(imgContainer);
};

loadDisplay();
