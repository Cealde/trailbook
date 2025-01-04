function updateContent(element) {
    // Retrieve data attributes
    const titleText = element.getAttribute('data-title');
    const imageUrl = element.getAttribute('data-image');
    const contentText = element.getAttribute('data-text');

    // Update the main box with the title, image, and text
    document.getElementById('content-title').innerText = titleText;
    document.getElementById('content-image').src = imageUrl;
    document.getElementById('content-image').alt = titleText;
    document.getElementById('content-text').innerText = contentText;

    // Remove the expanded class from all buttons
    document.querySelectorAll('.mainer').forEach(button => {
        button.classList.remove('expanded');
    });

    // Add the expanded class to the clicked button
    element.classList.add('expanded');
}
function showContent(content) {
    const mainText = document.getElementById('mainer');
    mainText.innerHTML = content.replace(/\n/g, '<br>');
}

// Set initial content
document.addEventListener('DOMContentLoaded', function() { 
    const mainObjectiveButton = document.querySelector('.mainer');
    mainObjectiveButton.classList.add('expanded');
    updateContent(mainObjectiveButton);
});

// Adjust the length
window.onload = function() {
    const slider = document.getElementById('slider');
    const smallBoxes = slider.getElementsByClassName('mainer');
    if (smallBoxes.length <= 5) {
        slider.style.overflow = 'hidden';
    } else {
        slider.style.overflowY = 'auto';
    }
};

// Only one button expands
document.querySelectorAll('.mainer').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.mainer').forEach(btn => {
            btn.classList.remove('expanded');
        });
        this.classList.add('expanded');
    });
});

