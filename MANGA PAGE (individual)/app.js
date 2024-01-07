// bars button pop up
const barsBtn = document.querySelector('.bars_btn');
const barsBtnImg = document.querySelector('.bars_btn img');
const dropDownMenu = document.querySelector('.dropdown_menu');

barsBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    // const isOpen = dropDownMenu.classList.contains('open');
}


// NO PAGE
function noPage() {
    alert('The page does not currently exist.');
}