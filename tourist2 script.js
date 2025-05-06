var infoBox = document.getElementById('infoBox');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var leftButton = document.getElementById('leftButton');
var centerButton = document.getElementById('centerButton');
var rightButton = document.getElementById('rightButton');

function leftClick(){
	infoBox.style.gridTemplateColumns = 'auto';
	
	left.style.display = 'grid';
	center.style.display = 'none';
	right.style.display = 'none';
	
	left.classList.add('clicked');
	leftButton.innerHTML = 'Close';
	leftButton.onclick = closeDiv;
}
function centerClick(){
	infoBox.style.gridTemplateColumns = 'auto';
	
	left.style.display = 'none';
	center.style.display = 'grid';
	right.style.display = 'none';
	
	center.classList.add('clicked');
	centerButton.innerHTML = 'Close';
	centerButton.onclick = closeDiv;
}
function rightClick(){
	infoBox.style.gridTemplateColumns = 'auto';
	
	left.style.display = 'none';
	center.style.display = 'none';
	right.style.display = 'grid';
	
	right.classList.add('clicked');
	rightButton.innerHTML = 'Close';
	rightButton.onclick = closeDiv;
}
function closeDiv(){
	infoBox.style.gridTemplateColumns = '30% auto 30%';
	
	left.style.display = 'grid';
	center.style.display = 'grid';
	right.style.display = 'grid';
	
	left.classList.remove = 'clicked';
	center.classList.remove = 'clicked';
	right.classList.remove = 'clicked';
	
	leftButton.innerHTML = 'Read More';
	centerButton.innerHTML = 'Read More';
	rightButton.innerHTML = 'Read More';
	
	leftButton.onclick = leftClick;
	centerButton.onclick = centerClick;
	rightButton.onclick = rightClick;
}
