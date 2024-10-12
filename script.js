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

// coffy
let Iron_card = document.querySelector(".Iron_p");
document.addEventListener("mousemove", function (e) {
  let Tx = e.pageX - window.innerWidth / 7;
  let Ty = e.pageY - window.innerHeight / 7;
  let TegX = (20 * dx) / window.innerWidth / 7;
  let TegY = (20 * dy) / window.innerHeight / 7;
  Iron_card.style.transform = `rotateX(${-TegY}deg) rotateY(${TegX}deg)`;
});

let Gold_card = document.querySelector(".Gold_p");
document.addEventListener("mousemove", function (e) {
  let Hx = e.pageX - window.innerWidth / 2;
  let Hy = e.pageY - window.innerHeight / 2;
  let HegX = (20 * dx) / window.innerWidth / 2;
  let HegY = (20 * dy) / window.innerHeight / 2;
  Gold_card.style.transform = `rotateX(${-HegY}deg) rotateY(${HegX}deg)`;
});

let Diamond_card = document.querySelector(".Diamond_p");
document.addEventListener("mousemove", function (e) {
  let Dx = e.pageX - window.innerWidth / 2;
  let Dy = e.pageY - window.innerHeight / 2;
  let DegX = (20 * dx) / window.innerWidth / 2;
  let DegY = (20 * dy) / window.innerHeight / 2;
  Diamond_card.style.transform = `rotateX(${-DegY}deg) rotateY(${DegX}deg)`;
});
