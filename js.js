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
	'Nie powinienieś tego robić!',
]

const shakeAnimation = () => {
	ballImg.classList.add('shake-animation')

	const reset = () => {
		ballImg.classList.remove('shake-animation')
	}

	setTimeout(reset, 1200)
}

const randomAnswer = () => {
	const random = Math.floor(Math.random() * 9)
	answer.textContent = randomAnswers[random]
}

const inputCheck = () => {
	const question = inputQuestion.value
	if (question === '') {
		error.textContent = 'Musisz podać pytanie!'
	} else if (question.indexOf('?') === -1) {
		error.textContent = 'Brak znaku zapytania na końcu!'
	} else if (question.length <= 2) {
		error.textContent = 'Za krótkie pytanie!'
	} else {
		error.textContent = ''
		shakeAnimation()
		setTimeout(randomAnswer, 1000)
	}
}

ballImg.addEventListener('click', inputCheck)
