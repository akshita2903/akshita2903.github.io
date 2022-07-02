

var text = ["Student","Front-End Developer", "MERN Stack Developer"];
var counter = 0;
var elem = document.getElementById("ani_text");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
function animate(){
   // console.log("animate");
    var reveals=document.querySelectorAll(".scrool");
 var scrol=document.querySelectorAll('.scroll_down');
//  console.log("animavtedd  "+reveals.length)
//   console.log("scroll "+scrol.length);
//   console.log(scrol);
  let flag=false;
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
         // console.log(" r "+i);
          reveals[i].classList.add("active");  
          if(i>0)
          {
            //console.log("s "+i);
       // console.log(scrol[i]+"  ");
        scrol[i-1].classList.add("hide");
          }
          
}
else {
    reveals[i].classList.remove("active");
    if(i>0)
    {
 // console.log(scrol[i]+"  ");
  scrol[i-1].classList.remove("hide");
    }
  }

       
      }
}

window.addEventListener("scroll", animate);

// To check the scroll position on page load
animate();