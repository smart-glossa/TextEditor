
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


function ChangeTextAlign (selectTag) {
    // Returns the index of the selected option
    var whichSelected = selectTag.selectedIndex;

    // Returns the text of the selected option
    var alignValue = selectTag.options[whichSelected].text;

    var div = document.getElementById ("editor1");
    div.style.textAlign = alignValue;
}