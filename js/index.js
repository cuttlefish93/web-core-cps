import './sliders.js'

/** LOAD MORE BUTTONS  */
const loadBtns = document.querySelectorAll('.load-btn')
const height = {
	brandsHeight: 0,
	servicesHeight: 0,
	repairHeight: 0,
}

function showMoreItems(e) {
	const btn = e.currentTarget
	const btnIcon = btn.querySelector('.load-btn__icon')
	const btnText = btn.querySelector('.load-btn__text')
	const id = btn.id
	const wrapper = [...btn.parentNode.children].find(
		el => el.id === `${id}-section`
	)

	height[`${id}Height`] = wrapper.clientHeight

	btn.classList.add('active')
	wrapper.style.overflowY = 'visible'
	wrapper.style.height = 'fit-content'

	btnText.textContent = 'Скрыть'
	btnIcon.style.backgroundImage = "url('./assets/images/icons/arrow-up.svg')"
}

function hideItems(e) {
	const btn = e.currentTarget
	const btnIcon = btn.querySelector('.load-btn__icon')
	const btnText = btn.querySelector('.load-btn__text')
	const id = btn.id
	const wrapper = [...btn.parentNode.children].find(
		el => el.id === `${id}-section`
	)
	const defaultHeight = height[`${id}Height`]

	btn.classList.remove('active')
	wrapper.style.overflowY = 'hidden'
	wrapper.style.height = `${defaultHeight}px`

	btnText.textContent = btnText.dataset.defaultText
	btnIcon.style.backgroundImage = "url('./assets/images/icons/arrow-down.svg')"
}

loadBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		if (btn.classList.contains('active')) {
			hideItems(e)
			return
		}

		if (!btn.classList.contains('active')) {
			showMoreItems(e)
			return
		}
	})
})

/** MODALS */
const callBtns = document.querySelectorAll('.link-round--phone')
const messageBtns = document.querySelectorAll('.link-round--message')
const menuBtn = document.querySelector('.btn-round--burger')
const closeBtns = document.querySelectorAll('.btn-round--close')
const bodyEl = document.body
const modalBg = document.querySelector('.modal-bg')
const mobileMenu = document.querySelector('#mobile-menu')

function showModal(modalId) {
	const modal = document.querySelector(`#${modalId}`)
	modal.classList.add('active')
	modalBg.classList.add('active')
	bodyEl.classList.add('no-scroll')
	mobileMenu.classList.remove('active')
}

menuBtn.addEventListener('click', e => {
	mobileMenu.classList.add('active')
	modalBg.classList.add('active')
	bodyEl.classList.add('no-scroll')
})

closeBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		const id = e.currentTarget.dataset.for
		const activeEl = document.querySelector(`#${id}`)
		activeEl.classList.remove('active')
		modalBg.classList.remove('active')
		bodyEl.classList.remove('no-scroll')
	})
})

callBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault()
		const id = e.currentTarget.dataset.for
		showModal(id)
	})
})

messageBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault()
		const id = e.currentTarget.dataset.for
		showModal(id)
	})
})
