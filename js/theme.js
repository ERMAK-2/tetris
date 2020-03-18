
let page = document.querySelector('.page');
let canva = document.querySelector('.canvas');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');

  canva.classList.toggle('light');
  canva.classList.toggle('dark');
};

function showhide(obj){
    if(obj == 'none') return 'inline';
    else return 'none';
}