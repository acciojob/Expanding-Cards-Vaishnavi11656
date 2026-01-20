//your JS code here. If required.
const panels = document.querySelector(".panel");

function removeactive(){
	panels.forEach(panel) => panel.classList.remove("active");
}


	panels.forEach((panel)=>{
		panel.addEvenetListener("click",()=>{
			removeactive();
			panel.classList.add("active");
			
		});
	});

