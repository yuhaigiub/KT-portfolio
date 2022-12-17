/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// default
let numberOfParticle = 80;
let particleSize = 7;
let particleOpacity = 0.8;
let particleSpeed = 6;

const screenWidth = screen.width;
if (screenWidth < 630) {
	numberOfParticle = 60;
	particleSize = 4;
	particleOpacity = 0.6;
	particleSpeed = 3;
} else if (screenWidth < 550) {
	numberOfParticle = 50;
	particleSize = 3;
	particleOpacity = 0.5;
	particleSpeed = 2;
}

particlesJS(
	"particle",

	{
		particles: {
			number: {
				value: numberOfParticle,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			shape: {
				type: "star",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: particleOpacity,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: particleSize,
				random: true,
				anim: {
					enable: false,
					speed: 8,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: particleSpeed,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "out",
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 100,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#b61924",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	}
);
