let modal1Btn = document.querySelector("#modal1-btn");
let modal = document.querySelector(".modal");
let closeModal=document.querySelector(".close-modal")

modal1Btn.addEventListener("click", () => {
    modal.style.display = "block";
})
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})
