const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    // 1. Naya element (card) create karein
    const card = document.createElement("div");

    // 2. Random RGB Color generate karein (0-255 range)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    // 3. Random Width aur Height (e.g., 100px se 300px tak)
    const randomWidth = Math.floor(Math.random() * 201) + 100;
    const randomHeight = Math.floor(Math.random() * 201) + 100;

    // 4. Unique data-id set karein
    const uniqueId = "card-" + Math.floor(Math.random() * 1000000);
    card.setAttribute("data-id", uniqueId);

    // 5. Styles apply karein
    card.style.backgroundColor = randomColor;
    card.style.width = randomWidth + "px";
    card.style.height = randomHeight + "px";
    card.style.margin = "10px";
    card.style.display = "inline-block";
    card.style.border = "1px solid #000";
    card.textContent = "ID: " + uniqueId;

    // 6. Screen par append karein
    document.body.appendChild(card);
});
