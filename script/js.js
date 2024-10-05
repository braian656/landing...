const toggleBtn = document.querySelector('.hamburguer')
const showContainer = document.querySelector('.glass-nav')
const Xmark = document.querySelector('.x-mark')
const itemNav = document.querySelectorAll('.item-nav')



toggleBtn.addEventListener(('click'), ()=>{

	showContainer.classList.toggle('active')

})

Xmark.addEventListener(('click'), ()=>{
	showContainer.classList.remove('active')
})

itemNav.forEach((item)=>{
	item.addEventListener(('click'), ()=>{
		showContainer.classList.remove('active')
	})
})
