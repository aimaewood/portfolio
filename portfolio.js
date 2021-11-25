let modal1Btn = document.querySelector("#modal1-btn");
let modal2Btn = document.querySelector("#modal2-btn");
let modal3Btn = document.querySelector("#modal3-btn");
let modal1 = document.querySelector("#modal1")
let modal2 = document.querySelector("#modal2")
let modal3 = document.querySelector("#modal3")
let closeModal1=document.querySelector("#close-modal1")
let closeModal2=document.querySelector("#close-modal2")
let closeModal3=document.querySelector("#close-modal3")

modal1Btn.addEventListener("click", () => {
    modal1.style.display = "block";
})
modal2Btn.addEventListener("click", () => {
    modal2.style.display = "block";
})
modal3Btn.addEventListener("click", () => {
    modal3.style.display = "block";
})
closeModal1.addEventListener("click", () => {
    modal1.style.display = "none";
})
modal1.addEventListener("click", () => {
    modal1.style.display = "none";
})
closeModal2.addEventListener("click", () => {
    modal2.style.display = "none";
})
modal2.addEventListener("click", () => {
    modal2.style.display = "none";
})
closeModal3.addEventListener("click", () => {
    modal3.style.display = "none";
})
modal3.addEventListener("click", () => {
    modal3.style.display = "none";
})