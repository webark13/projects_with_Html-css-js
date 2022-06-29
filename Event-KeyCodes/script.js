const box = document.querySelector(".box");

document.addEventListener("keydown", (event) => {
    box.innerHTML = `
    <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>Key typed</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>ASCII Code</small>
        </div>
        <div class="key">
            ${event.code}
            <small>KeyCode</small>
        </div>
    `;
});
