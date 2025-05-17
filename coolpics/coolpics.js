
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".navbar");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("hide");
});

function handleResize() {
    if (window.innerWidth > 860) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


const gallery = document.querySelector('.gallery');
const dialog = document.createElement('dialog');
const closeButton = document.createElement('button');
const modalImg = document.createElement('img');


dialog.className = 'image-modal';
closeButton.className = 'close-viewer';
closeButton.innerHTML = 'X';
closeButton.setAttribute('aria-label', 'Cerrar visor');

dialog.appendChild(modalImg);
dialog.appendChild(closeButton);
document.body.appendChild(dialog);


gallery.addEventListener('click', (e) => {
    const clickedImg = e.target.closest('img');
    if (!clickedImg) return;

    modalImg.src = clickedImg.src.replace('-sm.', '-full.');
    modalImg.alt = clickedImg.alt;
    dialog.showModal();
});


closeButton.addEventListener('click', () => {
    dialog.close();
});


dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});