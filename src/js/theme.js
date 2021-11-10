function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);

}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        applyTheme(this.value);
   });
});