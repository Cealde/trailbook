function updateText(text, element) {
    const titleText = element.getAttribute('data-title');
    document.getElementById('mainBox').innerHTML = ` <h1 class="title">${titleText}</h1> <p>${text}</p> `;
    element.classList.add('expanded');
}

function showContent(content) {
    const mainText = document.getElementById('mainBox');
    mainText.innerHTML = content.replace(/\n/g, '<br>');
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.button').forEach(btn => {
            btn.classList.remove('expanded');
        });
        this.classList.add('expanded');
    });
});

let currentIndex = 0;
const itemsPerPage = 5;
const buttons = document.querySelectorAll('.button');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function scrollButtons(direction) {
    const totalItems = buttons.length;
    currentIndex += direction * itemsPerPage;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalItems - itemsPerPage) currentIndex = Math.max(0, totalItems - itemsPerPage); // Corrected this line

    updateButtonVisibility();
    updateArrowVisibility();
}

function updateButtonVisibility() {
    buttons.forEach((button, index) => {
        button.style.display = (index >= currentIndex && index < currentIndex + itemsPerPage) ? 'flex' : 'none';
    });
}

function updateArrowVisibility() {
    const totalItems = buttons.length;

    if (currentIndex === 0) {
        leftArrow.classList.add('disabled');
    } else {
        leftArrow.classList.remove('disabled');
    }

    if (currentIndex >= totalItems - itemsPerPage) {
        rightArrow.classList.add('disabled');
    } else {
        rightArrow.classList.remove('disabled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateButtonVisibility();
    updateArrowVisibility(); // Initialize arrow states

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            scrollButtons(1);
        } else if (event.key === 'ArrowLeft') {
            scrollButtons(-1);
        }
    });
});
