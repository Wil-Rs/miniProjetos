let valores = document.querySelectorAll('input')
let divCss = document.querySelector('#css')
let checkCss = document.querySelector('#css1')
let checkMoz = document.querySelector('#moz')
let checkWeb = document.querySelector('#web')
valores[0] = document.querySelector('#v').onkeyup = () => {
	// valores[0].style.border-radius = '40px'

	divCss.style.borderTopLeftRadius = `${ valores[0].value }px`
	divCss.style.borderTopRightRadius = `${ valores[1].value }px`
	divCss.style.borderBottomLeftRadius = `${ valores[2].value }px`
	divCss.style.borderBottomRightRadius = `${ valores[3].value }px`
	if (checkCss.checked){
		divCss.innerHTML = ''
		divCss.innerHTML += `${valores[0].value} &space`
	}
}