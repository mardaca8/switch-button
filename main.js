var right = document.getElementsByClassName('right')[0];
var left = document.getElementsByClassName('left')[0];

right.addEventListener('click', function(){
	toggleElement(right);
});

left.addEventListener('click', function(){
	toggleElement(right);

})

left.addEventListener('click', function(){
	toggleElement(left);
});

right.addEventListener('click', function(){
	toggleElement(left);

})


function toggleElement(element) {
	if (element.classList.contains("hidden")){	
		element.classList.remove("hidden");
	} 
	else {
		element.classList.add("hidden");
	}
}

