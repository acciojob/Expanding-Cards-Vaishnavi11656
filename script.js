//your JS code here. If required.
const panels = document.querySelectorAll(".panel");

function removeactive(){
	panels.forEach (function(panel) { 
		panel.classList.remove("active");
});
}


	panels.forEach(function (panel) {
		panel.addEventListener("click",function (){
			removeactive();
			panel.classList.add("active");
			
		});
	});

