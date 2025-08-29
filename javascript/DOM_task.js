function changeBackground(color){
    document.body.style.backgroundColor = color;
}

const darkbutton = document.getElementById('dark-mode-button');

darkbutton.addEventListener('click',function(){
    console.log('i got clicked');
    changeBackground('black');    
});

darkbutton.addEventListener('click',function(){
    console.log("Storing value in DB");
});

const themeButton = document.getElementById('theme-Button');

themeButton.addEventListener('click',() =>{
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;
    
    if (!currentColor || currentColor=='white') {
        changeBackground('black');
        themeButton.innerText='Light Mode';
    } else{ 
        changeBackground('white');
        themeButton.innerText = "Dark Mode";
    }
});