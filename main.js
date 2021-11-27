const firstButton = document.getElementById('first');
const hiddenButton = document.getElementById('hidden');



firstButton.addEventListener('click', () => {toggleButton(hiddenButton)});


import { toggleButton } from "./modules/dom-functions";