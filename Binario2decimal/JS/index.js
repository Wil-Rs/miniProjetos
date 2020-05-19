const result = document.querySelector('#result')

const bt = document.querySelector('#bt').onclick = () => {
	const elementValores = document.querySelector('#bina')
	let valores = elementValores.value
	let cont = 0
	let soma = 0
	for(let i = valores.length -1; i >= 0; i--){
		if(valores[i] == 0 || valores[i] == 1){
			soma += valores[i] * (2 ** cont)
			cont +=1
		}else {
			elementValores.focus()
			alert('Apenas 0s e 1s')
			return
		}
	}
	result.value = soma
}