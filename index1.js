function addElement(pageUrl){
}
function checkquantity(){
	let input = document.getElementById("votesInp");
	input.value = '';
}

function inputvotes(){
	let radioButtons = document.getElementsByName("electionquantity");
	
	for (let i = 0; i < radioButtons.length; i++) {
                radioButtons[i].checked = false;
        }
}
