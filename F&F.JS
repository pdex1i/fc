// const Thestars = document.querySelectorA11("#Rate .TheStras");
//  const TheIcons = document. querySelectorAll("#Rate .TheStras .fa-solid");
//   for(let i = 0 ; i < Thestars. length ; i++)
//   { Thestars[i].onclick = function(){ 
//     for (let index = 0; index < i+1; index++) { 
//         TheIcons [index].style.color = "red"; }
//     }
// };
//         const Thestars2 = document.querySelectorAll("#Rate-2 .TheStras1");
//         const TheIcons2 = document.querySelectorAll("#Rate-2 .TheStras1 .fa-solid"); 
//         for(let i = 0 ; i < Thestars2.length ; i++){
//              Thestars2[i] .onclick = function(){
//                  for (let index = 0; index < i+1; index++) {
//                      TheIcons2 [index] style.color = "red" ;
//                  }
//                 }
//             };
var rated = 0 ;
var TheStars = document.getElementsByClassName("fa");

for (var i = 0; i < TheStars.length; i++) {
    TheStars[i].onclick = function() {
        rated = Array.from(TheStars).indexOf(this) + 1;
        rate();
    };
}

function rate() {
    for (var j = 0; j < TheStars.length; j++) {
        if (j < rated) {
            TheStars[j].style.color = "#b04a55";
        } else {
            TheStars[j].style.color = "#a9aa9f";
        }
    }
}
const thebutton = document.getElementById ("btn");
thebutton.onclick = function(){
    alert("the rate has been sent successfully");}
     
function feedback (){
    
        alert("your feedback has been sent successfully");}

        function toggleTheme() {
            var body = document.body;
            body.classList.toggle("dark");
        }
        
function display() {


    localStorage.setItem("value",input.value);
}
