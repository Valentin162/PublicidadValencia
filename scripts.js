'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
	let products = document.querySelector('#products'),
	dropdown = document.querySelector('#dropdown'),
	lastProduct = document.querySelector('#last-product'),
	index = document.querySelector('#index');
	
	let links = document.querySelectorAll('#dropdown li a');

	function toggleTabIndex(action = 'add') {
		if (action === 'add') {
			links.forEach(function(item) {
				item.tabIndex = '0';
			});
		} else {
			links.forEach(function(item) {
				item.tabIndex = '-1';
			})
		}
	}

	function toggleDropdown(action) {
		if (action === 'show') {
			dropdown.style.zIndex = '4';
			toggleTabIndex('add');
		} else {
			dropdown.style.zIndex = '-14';
			toggleTabIndex('remove');
		}
	}
	
	toggleDropdown('hide');

	products.addEventListener('mouseover', function() {
		toggleDropdown('show');

	});

	products.addEventListener('focusout', function(event) {
		if (event.relatedTarget === index) {
			toggleDropdown('hide')
		}
	});

	products.addEventListener('mouseout', function(event) {
		if (event.relatedTarget !== links[0]) {
			toggleDropdown('hide');
		}
	});

	products.addEventListener('focus', function() {
		toggleDropdown('show');
	});

	lastProduct.addEventListener('focusout', function(event) {
		if (event.relatedTarget.dataset.product !== 'product') {
			toggleDropdown('hide');
		}
	});

	dropdown.addEventListener('mouseleave', function() {
		toggleDropdown('remove');
	});

	products.addEventListener('click', function(event) {
		event.preventDefault();
	});

	document.addEventListener('click', function(event) {
		if (event.relatedTarget !== products) {
			toggleDropdown('hide');
		}
	});

});