var themeToggleButton = document.getElementById('themeToggleBtn');
var body = document.body;
function toggleTheme() {
    localStorage.setItem('body-theme', 'light-theme')
    body.classList.toggle("dark-theme");
    if(body.classList.contains("dark-theme")) {
        localStorage.setItem('body-theme','dark-theme')
    } else {
        localStorage.setItem('body-theme','light-theme')
    }
}
if (localStorage.getItem('body-theme') === 'dark-theme')
{
    body.classList.toggle("dark-theme");
} else {
    body.classList.remove("dark-theme");
}