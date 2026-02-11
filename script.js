//your JS code here. If required.
function removeSelectedColor() {
    // 1. Get the dropdown element by its ID
    const dropdown = document.getElementById("colorSelect");

    // 2. Get the index of the currently selected option
    const selectedIndex = dropdown.selectedIndex;

    // 3. Remove the option if something is actually selected
    if (selectedIndex !== -1) {
        dropdown.remove(selectedIndex);
    } else {
        alert("Please select a color to remove.");
    }
}