window.onload = () => {
    const showBox = document.querySelector('.showBox') as HTMLDivElement | null;
    const yes = document.querySelector('#yes') as HTMLButtonElement | null;
    const no = document.querySelector('#no') as HTMLButtonElement | null;
    const showData = document.querySelector('.showData') as HTMLDivElement | null;
    const croseDiv = document.querySelector('.croseDiv') as HTMLDivElement | null;

    if (showBox && no && yes && showData) {
        const showBoxRect = showBox.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();

        yes.addEventListener("click", () => {
            showData.classList.remove('hidden');
        });

        croseDiv?.addEventListener('click', () => {
            showData.classList.toggle('hidden');
        });

        no.addEventListener('mouseover', () => {
            no.style.position = "absolute"; 
            const i = Math.floor(Math.random() * (showBoxRect.width - noRect.width)) + 1;
            const j = Math.floor(Math.random() * (showBoxRect.height - noRect.height)) + 1;

            no.style.left = `${i}px`;
            no.style.top = `${j}px`;
        });
    } else {
        console.error("Elements not found in the DOM.");
    }
};

// Function to check screen width
function checkDevice() {
    const width = window.innerWidth;

    if (width <= 1024) {
        // Block or redirect on mobile and tablets
        document.body.innerHTML = '<h1 class="forPC">This website is only available on PC.</h1>';
    }
}

checkDevice();

window.addEventListener('resize', checkDevice);
