const ballImg = document.querySelector('.ball-img img')
const inputQuestion = document.querySelector('input')
const answer = document.querySelector('p.answer')
const error = document.querySelector('p.error')

const randomAnswers = [
	'Tak!',
	'Nie!',
	'To nie najlepszy pomysł',
	'Chyba nie',
	'Raczej tak',
	'Poważnie się zastanów!',
	'Nigdy!!!',
	'Śmiało!',
	'Nie powinienieś tego robić',
]

const shakeAnimation = () => {
	ballImg.classList.add('shake-animation')

	const reset = () => {
		ballImg.classList.remove('shake-animation')
	}

	setTimeout(reset, 1200)
}

ballImg.addEventListener('click', shakeAnimation)
