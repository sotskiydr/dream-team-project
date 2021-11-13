// function applyTheme(theme) {
//     document.body.classList.remove("theme-light", "theme-dark");
//     document.body.classList.add(`theme-${theme}`);
// }

// document.addEventListener("DOMContentLoaded", () => {
//    document.querySelector("#theme").addEventListener("change", function() {
//         applyTheme(this.value);
//    });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const savedTheme = localStorage.getItem("theme") || "auto";

//     applyTheme(savedTheme);

//     for (const optionElement of document.querySelectorAll("#theme option")) {
//         optionElement.selected = savedTheme === optionElement.value;
//     }

//     document.querySelector("#theme").addEventListener("change", function () {
//         localStorage.setItem("theme", this.value);
//         applyTheme(this.value);
//     });
// });
/////////////////////////////////////////////////

const checkBoxs = document.getElementById('theme-switch-toggle');

checkBoxs.addEventListener('change', (e)=>{
if(e.target.checked){
    document.querySelector('body').classList.add('dark-theme')
    localStorage.setItem('theme', 'dark-theme')
    document.querySelector('body').classList.remove('light-theme')
   
}
else{
    document.querySelector('body').classList.remove('dark-theme')
    localStorage.setItem('theme','light-theme')
    document.querySelector('body').classList.add('light-theme')
}
})

let theme = localStorage.getItem('theme')
if(theme === 'dark-theme'){
    checkBoxs.checked = true
    document.querySelector('body').classList.remove('light-theme')
    document.querySelector('body').classList.add('dark-theme')
}