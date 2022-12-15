const icon = document.querySelector(".icon");
const images = icon.querySelectorAll(".img");
const middle = document.querySelector(".middle");

let currentHighlight = 0;

(() => {
	images[currentHighlight].style.setProperty("filter", "grayscale(0)");
	middle.style.setProperty(
		"border",
		`5px solid ${window
			.getComputedStyle(images[currentHighlight])
			.getPropertyValue("border-color")}`
	);
	Array.from(images).map((image, index) => {
		image.style.setProperty("background-image", `url('./images1/image${index + 1}.jpg')`);
		image.addEventListener("mouseover", (e) => {
			images[currentHighlight].style.setProperty("filter", "grayscale(1)");
			currentHighlight = index;
			images[index].style.setProperty("filter", "grayscale(0)");

			icon.style.setProperty("animation-play-state", "paused");
			const borderColor = window.getComputedStyle(images[index]).getPropertyValue("border-color");
			middle.style.setProperty("border", `5px solid ${borderColor}`);

			// middle.style.setProperty(
			// 	"background-color",
			// 	window.getComputedStyle(image).getPropertyValue("background-color")
			// );
			middle.style.setProperty("background-image", `url('./images1/image${index + 1}.jpg')`);
		});
		image.addEventListener("mouseout", (e) => {
			icon.style.setProperty("animation-play-state", "running");
		});
	});
})();
