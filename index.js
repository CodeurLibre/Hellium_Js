//! Javascript reconnait les id, donc pas besoin de sélectionner les id !
/* const circle1 = document.getElementById("circle1");

const circle2 = document.getElementById("circle2");

const circle3 = document.getElementById("circle3");*/
//? Methode 1(Non ptimisée) ..!
/*document.addEventListener("mousemove", (e) => {
  circle1.style.top = e.pageY + "px";
  circle1.style.left = e.pageX + "px";
  circle2.style.top = e.pageY + "px";
  circle2.style.left = e.pageX + "px";
  circle3.style.top = e.pageY + "px";
  circle3.style.left = e.pageX + "px";
});
*/

//? Methode 2 (Optimisée) ..!
const circles = document.querySelectorAll(".circle");
console.log(circles);
document.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });
});

//? e.pagex fait le même travail que e.x(x uniquement en minuscule pour e.x, pas de majuscule pour lui) pareil pour e.pageY et e.y(y uniquement en minuscule e.y, pas de majuscule pour lui), libre de choisr !
