//Mouse Events

const hoverButton = document.getElementById("hover-button");
const mouseMessage = document.getElementById('mouse-message');

hoverButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Hovering over the button!';
    mouseMessage.style.color = 'red';
});

hoverButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Not hovering over the button!';
    mouseMessage.style.color = 'black';
});

//Keyboard Events

const keyInput = document.getElementById('keyboard-input');
const keyMessage = document.getElementById('keyboard-message');

keyInput.addEventListener('keyup', () => {
    keyMessage.textContent = `Key pressed: ${event.key}`;
    keyMessage.style.color = 'red';
})

// Form & Focus Events
const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input focused..';
    focusMessage.style.color ='red';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input lost focus..';
    focusMessage.style.color = 'black';
});

// Event Delegation

const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `Clicked on button: ${event.target.textContent}`;
        delegationMessage.style.color ='red';
    }
});
