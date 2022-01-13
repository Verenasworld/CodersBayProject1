const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const slidesLength = document.querySelectorAll('div').length

let activeSlideIndex = 0;

// slideLeft.style.top = `-${(slidesLength -1) * 100}vh`

// add Eventlistener to translate images to show the next img on click
upButton.addEventListener('click', () => changeSlide('up'))
upButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight)
    if (direction == 'up'){
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength){
            activeSlideIndex=0
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}
