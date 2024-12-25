const input = document.getElementById('input');
const list = document.getElementById('list');

function addEvent(event) {
    event.preventDefault();

    if (input.value === '') {
        alert('Please write something');
    } else {
        const li = document.createElement('li');
        li.textContent = input.value;

        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-trash"></i>';

        li.appendChild(button);
        list.appendChild(li);

    }
    input.value = '';
    save();
}

document.getElementById('form').addEventListener('submit', addEvent);

list.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
    }else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
        save();
    }
});

function save() {
    localStorage.setItem('list', list.innerHTML);
}

function load() {
    list.innerHTML = localStorage.getItem('list');
}

load();
