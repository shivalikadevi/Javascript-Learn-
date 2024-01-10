
const buttons = document.querySelectorAll('.buttons');
let body = document.querySelector('.body');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        console.log(e);
        // Use camelCase for style properties, and use '=' for assignment
        body.style.backgroundColor = e.target.id;
        console.log(body.style.backgroundColor);
        console.log(e.target.id, typeof e.target.id);
    });
}
