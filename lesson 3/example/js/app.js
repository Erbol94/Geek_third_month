////
const tabs = document.querySelectorAll('.tabheader__item');
const tabParent = document.querySelector('.tabheader__items');
const tabContent = document.querySelectorAll('.tabcontent');


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item)=> {
        item.classList.remove('tabheader__item_active')
    })
}


const showTabContent = (i) => {
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent();
showTabContent(0);

tabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('tabheader__item')){
        tabs.forEach((item, i)=> {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
////// - sliders
let sliderIndex = 0;
const nSlide = (i) => {
    showSlide(sliderIndex = i)
}

const showSlide = (i) => {
    const headerSlide = document.querySelectorAll('.tabheader__item');
    const contentSlide = document.querySelectorAll('.tabcontent');
    if ( i > headerSlide.length && i> contentSlide.length ){
        sliderIndex += 1;
    }
    if (i < 0) {
        sliderIndex = headerSlide.length && sliderIndex == contentSlide.length;
    }
    for (let slide of contentSlide) {
        slide.style.display = 'none';
    }
    contentSlide[sliderIndex].style.display = 'block'
    for (let slide of headerSlide) {
        slide.classList.remove('tabheader__item_active')
    }
    headerSlide[i].classList.add('tabheader__item_active')

}
let timer = setInterval(function (){
    {
        sliderIndex++;
        if (sliderIndex > 3){
            sliderIndex = 0;
        }
    }
    showSlide(sliderIndex)
}, 2000)


////// --- scrolling
const scrollPosition = () => {
    const page = document.documentElement;
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        console.log(page.clientHeight )
        openModal()
        window.removeEventListener('scroll', scrollPosition)
    }
}
window.addEventListener('scroll', scrollPosition)
//// ---
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
};

modalTrigger.addEventListener('click', openModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

closeModalBtn.addEventListener('click', closeModal);

