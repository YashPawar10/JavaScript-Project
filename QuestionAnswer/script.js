let a = document.getElementsByClassName("container");
let b = document.querySelectorAll(".button");
let c = document.querySelectorAll(".answer");
for(let i=0;i<a.length;i++){
  a[i].addEventListener("click", () => {
      b[i].classList.toggle('active');
      c[i].classList.toggle('active')
  });
}

