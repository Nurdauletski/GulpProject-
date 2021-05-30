
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 20,
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,

    navigation: {
        nextEl: '.slider-button--bottom',
        prevEl: '.slider-button--top',
      },
    
});
const swiper_2 = new Swiper('.swiper-container_2', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,

    navigation: {
        nextEl: '.slider-button--bottom',
        prevEl: '.slider-button--top',
      },
    
});


let popup = document.querySelectorAll('.main__item--main');
popup.forEach(element => {
    element.addEventListener('click', () => {
        element.nextElementSibling.classList.toggle('main__item__list--toggle');
    })
});