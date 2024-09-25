let body_theme = document.querySelector('.body')
let change_button = document.querySelector('.mode_button')

change_button.onclick =  function(){
    body_theme.classList.toggle('light_theme')
    body_theme.classList.toggle('dark_theme')
    console.log("BUTTON IS WORKING")
}
