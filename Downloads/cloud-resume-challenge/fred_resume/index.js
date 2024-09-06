
window.onload = async function getVisitCount() {
	const response = await fetch('https://wh6pggpz7ewoaviwnzylv5fpy40ushtx.lambda-url.us-east-1.on.aws/') // Use const instead of let
	const data = await response.json() // Use const instead of let
	document.getElementById('visit-count').innerText = data.value
  }
