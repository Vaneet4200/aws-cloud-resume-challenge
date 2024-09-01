const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://pojwkd744bohbccwfxw24w5m7y0mffjr.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();