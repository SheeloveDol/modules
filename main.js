const firstButton = document.getElementById('first');
const hiddenButton = document.getElementById('hidden');

const toggleButton = element => {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }

}

firstButton.addEventListener('click', () => {toggleButton(hiddenButton)})


