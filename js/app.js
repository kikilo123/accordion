const items=document.querySelectorAll(".acordion-item");


items.forEach(item=>{
    const triger=item.querySelector(".accordion-hederr ");
    const plus =item.querySelector(".accordion-hederr .plus-activate");
    const minus=item.querySelector(".accordion-hederr .minus-activate");
    triger.addEventListener("click",()=>{
        triger.nextElementSibling.classList.toggle("activate");
        plus.classList.toggle("remove");
        minus.classList.toggle("active");
    });
});



