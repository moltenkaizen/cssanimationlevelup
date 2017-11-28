// tooltips.js

var anchors = document.querySelectorAll('.anchor-tooltip')

anchors.forEach(function(anchor) {
	var tooltipText = anchor.getAttribute('title');
	var tooltip = document.createElement('span');
	tooltip.className = 'title-tooltip';
	tooltip.innerHTML = tooltipText;
	anchor.appendChild(tooltip)
});