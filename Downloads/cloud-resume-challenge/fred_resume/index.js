
// JavaScript Code
const counter = document.querySelector(".counter-number"); 
async function updateCounter() {
	let response = await fetch("https://wh6pggpz7ewoaviwnzylv5fpy40ushtx.lambda-url.us-east-1.on.aws/");
	let data = await response.json(); 
	counter.innerHTML = `Views: ${data}`;
}

updateCounter();
