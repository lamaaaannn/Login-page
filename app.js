let next1 = document.querySelector(".next1");
let next2 = document.querySelector(".next2");
let next3 = document.querySelector(".next3");

let back1 = document.querySelector(".back1");
let back2 = document.querySelector(".back2");
let back3 = document.querySelector(".back3");

let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");

next1.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
  
});
next2.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";

});

next3.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
 
});
back1.addEventListener("click", ()=>{
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
})
back2.addEventListener("click", ()=>{
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
    page4.style.display = "none";
})
back3.addEventListener("click", ()=>{
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
})