// @codekit-prepend "./node_modules/clipboard/dist/clipboard.min.js";


new ClipboardJS('.btn');


// var details_a = document.querySelector("details.a code"); 

// details_a.addEventListener("click", function(){
//   this.closest('div.highlight').nextElementSibling.toggleAttribute("open");
// })



// open the details.b by clicking on deatiuls.a code

const divs = document.querySelectorAll('details.a code');
divs.forEach(el => el.addEventListener('click', event => {
    // event.target.closest('div.highlight').nextElementSibling.toggleAttribute("open");
    var b = event.target.closest('div.highlight').nextElementSibling;
    if (b) {
        b.toggleAttribute("open");
    }
}));