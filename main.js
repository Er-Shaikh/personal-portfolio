let nav = document.querySelector('nav');
let scrollBtn = document.querySelector('.scroll-up-btn a')

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky');
        scrollBtn.style.display = 'block';
    }else{
        nav.classList.remove('sticky');
        scrollBtn.style.display = 'none';
    }
}

function developmentAlert(){
alert("Unfortunately this section is under development phase kindly contact with the given deatails.") 
}
