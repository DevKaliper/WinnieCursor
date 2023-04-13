const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");


let cursorPos = { x: 0, y: 0 };

let windowsWidth = window.innerWidth;
let windowsHeight = window.innerHeight;



function mouseMove(e) {
	cursorPos = { x: e.clientX, y: e.clientY };
    followElement()
}

const followCursor = (element, xRelation, yRelation) => {
	const elementOffset = element.getBoundingClientRect();
	const centerX = elementOffset.x + elementOffset.width / 2;
	const centerY = elementOffset.y + elementOffset.height / 2;

	const distanceX = Math.round((cursorPos.x - centerX) * 100) / window.innerWidth;
	const distanceY = Math.round((cursorPos.y - centerY) * 100) / window.innerHeight;

	element.style.transform = `translate(${distanceX / xRelation}px, ${
		distanceY / yRelation
	}px)`;

};

const followElement = () => {
	if (ears) followCursor(ears, 0, 0);
	if (snout) followCursor(snout, 1.5, 1.5);
	if (eyes) followCursor(eyes, 1.5, 1.5);
	if (head) followCursor(head, 6, 6);
	if (nose) followCursor(nose, 1, 1);
};



window.addEventListener("mousemove", mouseMove);
