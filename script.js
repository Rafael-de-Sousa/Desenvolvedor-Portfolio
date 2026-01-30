const button = document.getElementById("button");

// Move o botão para uma posição aleatória
function moveButton() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Chama a função moveButton a cada 1 segundo (1000 ms)
setInterval(moveButton, 2000);

// Chama a função imediatamente para definir a posição inicial
moveButton();
