function showContent(content) {
    document.getElementById('content-box').textContent = content;
}

window.onload = function() {
    const slider = document.getElementById('slider');
    const smallBoxes = slider.getElementsByClassName('mainer');
    if (smallBoxes.length <= 5) {
        slider.style.overflow = 'hidden';
    } else {
        slider.style.overflowY = 'auto';
    }
}
document.addEventListener('DOMContentLoaded', function() { 
    const mainObjectiveButton = document.getElementById('mainObjective');
    mainObjectiveButton.classList.add('expanded');
    showContent('Trail has two teams, Red and Blue.\nEach team is randomly assigned one of two roles: Guards or Piflers.\nThe game begins with the Piflers being released onto the map, followed by the Guards 30 seconds later.\nA 5-minute timer starts once the Guards are released.\n\nThe Piflers objective is to mine as much Iron, Gold, and Diamond Blocks as possible, while the Guards must eliminate the Piflers before the timer runs out.\nDuring this period players can use the items chosen by them to eliminate the other team.\nOnce killed Guards will respsawn after 30 seconds but Piflers will never respawn.\n\nOnce all Piflers are dead or the timer expires, the roles switch between the teams.\nThe game continues with the new Piflers mining and the new Guards hunting them.\nAfter the second round, all players are sent to the lobby, where a Gold Count takes place.\nThe team with the most Gold collected during the game wins.');
 }
);
function showContent(content) {
    const mainText = document.getElementById('content-box');
    mainText.innerHTML = content.replace(/\n/g, '<br>');
}

document.querySelectorAll('.mainer').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.mainer').forEach(btn => {
        btn.classList.remove('expanded');
      });
      this.classList.add('expanded');
    });
  });
  