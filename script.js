let box1 = document.querySelector(".p1");
document.addEventListener("mousemove", function (e) {
  let rx = e.pageX - window.innerWidth / 4;
  let ry = e.pageY - window.innerHeight / 4;
  let radX = (20 * rx) / window.innerWidth / 4;
  let radY = (20 * ry) / window.innerHeight / 4;
  box1.style.transform = `rotateX(${-radY}deg) rotateY(${radX}deg)`;
});

let box2 = document.querySelector(".p2");
document.addEventListener("mousemove", function (e) {
  let dx = e.pageX - window.innerWidth / 7;
  let dy = e.pageY - window.innerHeight / 7;
  let degX = (20 * dx) / window.innerWidth / 7;
  let degY = (20 * dy) / window.innerHeight / 7;
  box2.style.transform = `rotateX(${-degY}deg) rotateY(${degX}deg)`;
});

// dinamic page
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelectorAll(".Mor_inf");
  const home_btn = document.querySelector(".Home");

  card.forEach(function (cycle) {
    cycle.addEventListener("click", function () {
      const cardId = cycle.getAttribute("data-id");
      console.log(cardId);
      window.location.href = `detail.html?id=${cardId}`;
    });
    home_btn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  });
});
