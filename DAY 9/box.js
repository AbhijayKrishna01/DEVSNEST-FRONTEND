let seats = 0;
const block = document.querySelectorAll(".box")
Array.from(block).forEach((box) => {
    box.addEventListener("click",()=>{
       let result  = box.classList.toggle("active");
       if(result)
       seats++;
       else
       seats--;
       document.querySelector(".bs").innerHTML = "Booked Seats:"+seats;
       const remaining = (document.querySelector(".ts").innerHTML="Remaining Seats : "+(36-seats));

    });

});