const primaryheader = document.querySelector('.primaryheader')
const secondaryheader = document.querySelector('.secondaryheader')
document.getElementById('year').textContent = new Date().getFullYear();
const mainElement = document.querySelector('main')

let lastScrollTop = 0;

window.addEventListener('scroll', () =>{
    let scrollTop = window.pageYOffset || documentElement.scrollTop;

    if(scrollTop > primaryheader.offsetHeight){
        secondaryheader.classList.add('visible');
        mainElement.classList.add('secondary-header-visible')
    }else{
        secondaryheader.classList.remove('visible');
        mainElement.classList.remove('secondary-header-visible')
    }

    if(scrollTop > lastScrollTop && scrollTop > primaryheader){
        primaryheader.style.transform = 'translateY(-100%)';
    }else{
        primaryheader.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
})

