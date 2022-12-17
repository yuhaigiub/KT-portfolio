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
	Array.from(images).map((image, index, arr) => {
		image.style.setProperty("background-image", `url('./images1/image${index + 1}.jpg')`);
		image.addEventListener("mouseover", (e) => {
			document.documentElement.style.setProperty("--small-color", "red");
			document.documentElement.style.setProperty("--large-color", "teal");

			arr.map((img) => {
				img.style.setProperty("animation-play-state", "paused");
			});

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
			document.documentElement.style.setProperty("--small-color", "chartreuse");
			document.documentElement.style.setProperty("--large-color", "white");

			arr.map((img) => {
				img.style.setProperty("animation-play-state", "running");
			});
			icon.style.setProperty("animation-play-state", "running");
		});
	});
})();

const introContainer = document.querySelector('.intro-container');
