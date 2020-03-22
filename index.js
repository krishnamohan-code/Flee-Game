let car2 = document.getElementById("coll1");
console.log(car2);
// So you can fetch the car and then from that you can get the value and match it
// I have also shared a link... Get frog image using id here and also for car get the coordinates using the id...
// Final step is match the car and image coordinates then your project is over
// sir how to find coordinates
// Have sent some links Go through it and finish here
// Simple one man just do it
// okay sir

var frog=document.getElementById("frog")
let moveBy=30
window.addEventListener("load",()=>{
    frog.style.position="absolute"
    frog.style.left=0;
    frog.style.top=0;
});
window.addEventListener("keyup",(e)=>{
     switch(e.key){
         
                case 'ArrowUp':
                   // frogSound()
                frog.style.top=parseInt(frog.style.top)-moveBy+"px";
                console.log(frog.style.top)
                 if(frog.style.top=="-420px"){
                     alert("Ohhhh.........Thank you so much....");
                    break;
                 }
            else
               break;
             case 'ArrowDown':
             frog.style.top=parseInt(frog.style.top)+moveBy+"px";
             console.log(frog.style.top)
             break;
     }
});
