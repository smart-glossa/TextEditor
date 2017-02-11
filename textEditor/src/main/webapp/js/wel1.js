
function ChangeFont(selectTag) {
		var whichSelected = selectTag.selectedIndex;
		var selectState = selectTag.options[whichSelected].text;
		var fontTest = document.getElementById("editor1");
		fontTest.style.textTransform =selectState; 
		 
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('blah').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

