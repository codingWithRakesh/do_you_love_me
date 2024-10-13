"use strict";
window.onload = () => {
    const showBox = document.querySelector('.showBox');
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const showData = document.querySelector('.showData');
    const croseDiv = document.querySelector('.croseDiv');
    if (showBox && no && yes && showData) {
        const showBoxRect = showBox.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();
        yes.addEventListener("click", () => {
            showData.classList.remove('hidden');
        });
        croseDiv === null || croseDiv === void 0 ? void 0 : croseDiv.addEventListener('click', () => {
            showData.classList.toggle('hidden');
        });
        no.addEventListener('mouseover', () => {
            no.style.position = "absolute";
            const i = Math.floor(Math.random() * (showBoxRect.width - noRect.width)) + 1;
            const j = Math.floor(Math.random() * (showBoxRect.height - noRect.height)) + 1;
            no.style.left = `${i}px`;
            no.style.top = `${j}px`;
        });
    }
    else {
        console.error("Elements not found in the DOM.");
    }
};
function checkDevice() {
    const width = window.innerWidth;
    if (width <= 1024) {
        document.body.innerHTML = '<h1 class="forPC">This website is only available on PC.</h1>';
    }
}
checkDevice();
window.addEventListener('resize', checkDevice);
