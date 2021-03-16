/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// Add functions to disable sections 

function disableSections() {
	sections.forEach((element)=>{
		element.classList.remove('your-active-class', 'active');
	});
}

function disableNavLinks() {
	let navAnchors = document.querySelectorAll('.nav__hyperlink');
	navAnchors.forEach((element)=> {
		element.classList.remove('active-nav');
	});
}

// Add class 'active' to section when near top of viewport

function activateSection(currSection) {
	currSection.classList.add('your-active-class', 'active');

	disableNavLinks();
	enableNavLinks(currSection.getAttribute('id'));
}

function enableNavLinks(curSectionId) {
	let navAnchors = document.querySelectorAll('.nav__hyperlink');
	navAnchors.forEach((element)=> {
		if (element.getAttribute('href')== `#${curSectionId}`) {
			element.classList.add('active-nav');
		}
	});
}

function inViewport(element) {
	var coordinate = element.getBoundingClientRect();

	return (
		distance.top >= -300 &&
		distance.left >= 0 &&
		distance.bottom <= (1.3 * window.innerHeight || document.documentElement.clientHeight)
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// Build menu 

function createNavBar() {
	sections.forEach((element)=>{
	    let navItem = document.createElement("li");
	    navItem.classList.add("navbar__list__item");
    	let sectionName = element.getAttribute("data-nav");
    	let curSectionId = element.getAttribute("id");
        navItem.innerHTML = `<a href="#${curSectionId}" class="nav__hyperlink">${sectionName}</a>`;
        navList.appendChild(navItem);
        console.log(sectionName);
    });
}

// Scroll to anchor ID using scrollTO event

function scrollToAnchorClick() {
	let navAnchors = document.querySelectorAll('.nav__hyperlink');
	navAnchors.forEach((element) => {
		element.addEventListener('click', function(event) {
			event.preventDefault();
			document.querySelector(element.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});	
	});
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

window.addEventListener('load', createNavBar ()) 

// Scroll to section on link click

scrollToAnchorClick();

// Set sections as active

window.addEventListener('scroll', function (event) {
	event.preventDefault();

	sections.forEach((element) => {
		if(inViewport(element)) {
			disableSections();
			activateSection(element);
		} else if(window.scrollY==0) {
			disableSections();
			disableNavLinks();
		}
	}, false);
});

/**
 * End Main Functions
 * Begin Events
 * 
*/













