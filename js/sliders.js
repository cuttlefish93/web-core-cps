import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import Pagination from 'https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs'

const breakpoint = window.matchMedia('(min-width: 768px)')

//brands slider
const brandsSlider = document.querySelector('.brands-slider')
const brandsSliderWrapper = document.querySelector('.brands-slider__wrapper')
const brandsSlides = document.querySelectorAll('.brand-card')
const brandsPagination = document.querySelector('.brands-slider__pagination')
let brandsSwiper

//repair slider
const repairSlider = document.querySelector('.repair-slider')
const repairSliderWrapper = document.querySelector('.repair-slider__wrapper')
const repairSlides = document.querySelectorAll('.repair-card')
const repairPagination = document.querySelector('.repair-slider__pagination')
let repairSwiper

//prices slider
const pricesSlider = document.querySelector('.prices-slider')
const pricesSliderWrapper = document.querySelector('.prices-slider__wrapper')
const pricesSlides = document.querySelectorAll('.service-card')
const pricesPagination = document.querySelector('.prices-slider__pagination')
let pricesSwiper

function initSwiperStyles(slider, sliderWrapper, slides, pagination) {
	const sliderClass = slider.dataset.slider
	slider.classList.add('swiper')
	slider.classList.add(`${sliderClass}`)
	sliderWrapper.classList.add('swiper-wrapper')
	slides.forEach(slide => slide.classList.add('swiper-slide'))
	pagination.classList.add('swiper-pagination')
	pagination.style.display = 'block'
}

function removeSwiperStyles(slider, sliderWrapper, slides, pagination) {
	const sliderClass = slider.dataset.slider
	slider.classList.remove('swiper')
	slider.classList.remove(`${sliderClass}`)
	sliderWrapper.classList.remove('swiper-wrapper')
	slides.forEach(slide => slide.classList.remove('swiper-slide'))
	pagination.classList.remove('swiper-pagination')
	pagination.style.display = 'none'
}

function newSwiper(className) {
	return new Swiper(`${className}`, {
		modules: [Pagination],
		mousewheel: {
			forceToAxis: true,
		},
		slidesPerView: 1.4,
		centeredSlides: false,
		grabCursor: true,
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		speed: 400,
		spaceBetween: 16,
	})
}

function destroySwipers() {
	brandsSwiper.destroy(true, true)
	repairSwiper.destroy(true, true)
	pricesSwiper.destroy(true, true)
	brandsSwiper = undefined
	repairSwiper = undefined
	pricesSwiper = undefined
}

//Realization
window.addEventListener('resize', e => {
	const windowWidth = window.innerWidth

	if (windowWidth >= 768 && brandsSwiper && repairSwiper && pricesSwiper) {
		destroySwipers()
		removeSwiperStyles(
			brandsSlider,
			brandsSliderWrapper,
			brandsSlides,
			brandsPagination
		)
		removeSwiperStyles(
			repairSlider,
			repairSliderWrapper,
			repairSlides,
			repairPagination
		)
		removeSwiperStyles(
			pricesSlider,
			pricesSliderWrapper,
			pricesSlides,
			pricesPagination
		)
		return
	}

	if (windowWidth < 768 && !brandsSwiper && !repairSwiper && !pricesSwiper) {
		initSwiperStyles(
			brandsSlider,
			brandsSliderWrapper,
			brandsSlides,
			brandsPagination
		)
		initSwiperStyles(
			repairSlider,
			repairSliderWrapper,
			repairSlides,
			repairPagination
		)
		initSwiperStyles(
			pricesSlider,
			pricesSliderWrapper,
			pricesSlides,
			pricesPagination
		)
		brandsSwiper = newSwiper('.mySwiper')
		repairSwiper = newSwiper('.mySwiper2')
		pricesSwiper = newSwiper('.mySwiper3')
		brandsSwiper.init()
		repairSwiper.init()
		pricesSwiper.init()
		return
	}

	if (windowWidth < 768 && brandsSwiper && repairSwiper && pricesSwiper) {
		return
	}
})

if (!breakpoint.matches) {
	initSwiperStyles(
		brandsSlider,
		brandsSliderWrapper,
		brandsSlides,
		brandsPagination
	)
	initSwiperStyles(
		repairSlider,
		repairSliderWrapper,
		repairSlides,
		repairPagination
	)
	initSwiperStyles(
		pricesSlider,
		pricesSliderWrapper,
		pricesSlides,
		pricesPagination
	)
	brandsSwiper = newSwiper('.mySwiper')
	repairSwiper = newSwiper('.mySwiper2')
	pricesSwiper = newSwiper('.mySwiper3')
	brandsSwiper.init()
	repairSwiper.init()
	pricesSwiper.init()
}
