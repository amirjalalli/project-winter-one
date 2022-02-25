let x = document.getElementById("openMenu");
let y = document.getElementById("closeMenu");
let myMenu = document.getElementById("myDiv");
function show (val) {
    
    if (val == 'yy'){
        x.style.display = "none";
        y.style.display = "block"
        myMenu.style.display = "none"
    } else {
        x.style.display = "block";
        y.style.display = "none"
        
      
            myMenu.classList.add('mono')
            myMenu.style.display = "block"
        
    }
}
// } else {
//     x.style.display = "none";
//     y.style.display = "none"
// }   
 


    // if (window.matchMedia('(max-width: 600px)').matches) 



// function show (val) {

//     if (val == 'yy'){
//         x.style.display = "none";
//         y.style.display = "block"
//         if(x.style.display == "none"){
//             myMenu.style.display = "none"
//         }
    
//     }else {
//         x.style.display = "block";
//         y.style.display = "none"
        
//         if(x.style.display == "block"){
//             myMenu.classList.add('mono')
//             myMenu.style.display = "block"
//         }
//     }
//   }





