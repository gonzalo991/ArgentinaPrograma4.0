const dark_button = document.getElementById('dark');
const light_button = document.getElementById('light');

dark_button.addEventListener('click', ev => {
    ev.preventDefault();
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
});

light_button.addEventListener('click', ev => {
    ev.preventDefault();
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
});

