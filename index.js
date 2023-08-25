// click function 
const menuButton = document.getElementById('menubutton')
const dropDownContent = document.getElementById('dropdown-content')

function dropDownMenu(){
    if (dropDownContent.style.display === 'none'){
        dropDownContent.style.display = "block"
    } else{
        dropDownContent.style.display = "none"
    }

}