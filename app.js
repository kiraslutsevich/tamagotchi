class Pet {
	constructor(name) {
		this.name = name;
		this.age = 0;
		this.petStatus = {
			hunger: 100,
			health: 100,
			happy: 100,
		}
	}
	seeStatus() {
		console.log(`${this.name}:
		Сытость: ${this.petStatus.hunger}
		Здоровье: ${this.petStatus.health}
		Счастье: ${this.petStatus.happy}
		Возраст: ${this.age}`)
	}
	feed(portion) {
		if (this.petStatus.hunger < (100 - portion)) {

			this.petStatus.hunger += portion;

			return console.log(`${this.name} 'покушал!'`)
		}
		else return (`${this.name} 'сыт'`)
	}

	cleenUp() {
		this.petStatus.happy += 5;
		return console.log(`${this.name} 'чистенький'`)
	}

	callVet() {
		this.petStatus.health = 100;
		return console.log('Спасибо! Мне намного лучше!');
	}

	#gettingOlder() {
		return this.age += 0.2;
	}

	#changingPetStatus() {
		this.petStatus.hunger--;
		this.petStatus.health -= 0.1;
		this.petStatus.happy -= 0.5;
	}
	#timerId = setInterval(() => {
		this.#changingPetStatus();
		this.#gettingOlder();
	}, 5000)
	#timerHello = setTimeout(() => {
		console.log(`Привет! Я ${this.name}. Позаботься обо мне!
		Чтобы посмотреть на то, как я себя чувствую - напиши "${this.name.toLowerCase()}.seeStatus()"
		Чтобы покормить меня - напиши "${this.name.toLowerCase()}.feed(порция)"
		Чтобы помыть - напиши "${this.name.toLowerCase()}.cleenUp()"
		Если мое здоровье ухудшается - ты можешь позвать ветеринара.
		Для этого напиши "${this.name.toLowerCase()}.callVet()"`)
	}, 0)

	#sayProblem = setInterval(() => {
		switch (this.petStatus.hunger) {
			case 70:
				console.log('Хозяин, я бы перекусил');
				break;
			case 50:
				console.log('Хозяин, я хочу кушать!');
				break;
			case 30:
				console.log('ПОКОРМИ МЕНЯ');
				break;
			case 10:
				console.log('Я скоро умру от голода!!!!!!');
				break;
			case 0:
				console.log(`${this.name} умер от голода.`);
				break;
		}
		switch (this.petStatus.happy) {
			case 70:
				console.log('Хозяин, может поиграем?');
				break;
			case 50:
				console.log('Хозяин, мне скучно!');
				break;
			case 30:
				console.log(`${this.name} в депрессии.`);
				break;
			case 10:
				console.log(`${this.name} не хочет так жить.`);
				break;
			case 0:
				console.log(`${this.name} умер от тоски`);
				break;
		}
	}, 5000
	)
}

class Fish extends Pet {
	admire() {
		this.petStatus.happy += 5;
		return (`${this.name} красуется`)
	}
	regulateTemperature() {
		this.petStatus.happy += 10;
		return (`${this.name} нравится водичка!`)
	}
	#timerHello = setTimeout(() => {
		console.log(`Для того, чтобы полюбоваться мной - напиши 
		${this.name.toLowerCase()}.admire()
		А для регулировки воды в аквариуме используй
		${this.name.toLowerCase()}.regulateTemperature()`)
	}, 0)
}

class Bird extends Pet {
	learnToSpeak(a) {
		this.petStatus.happy += 5;
		return console.log(`${this.name} говорит: ${a}`)
	}
	letFly() {
		this.petStatus.happy += 10;
		return console.log(`${this.name} порхает`)
	}
	#timerHello = setTimeout(() => {
		console.log(`Для того, чтобы я выучил новую фразу - напиши 
		${this.name.toLowerCase()}.learnToSpeak('фраза')
		Чтобы отпустить меня полетать - 
		${this.name.toLowerCase()}.letFly()`)
	}, 0)
}

class Mammal extends Pet {
	toPlay() {
		this.petStatus.happy += 10;
		return console.log(`${this.name} бегает за вашей рукой`)
	}
	pat() {
		this.petStatus.happy += 5;
		return console.log(`${this.name} замурчал от удовольствия`)
	}
	#timerHello = setTimeout(() => {
		console.log(`Если хочешь меня погладить - напиши 
		${this.name.toLowerCase()}.pat()
		Для того чтобы мы поиграли вместе - 
		${this.name.toLowerCase()}.toPlay()`)
	}, 0)
}
class Cat extends Mammal {
	toPlayWithMouse() {
		this.petStatus.happy += 20;
		return console.log(`${this.name} бегает за мышкой как сумасшедший!`)
	}
	#timerHello = setTimeout(() => {
		console.log(`А может быть, у тебя для меня есть игрушка?
		Я очень люблю мышей! Напиши: 
		${this.name.toLowerCase()}.toPlayWithMouse()`)
	}, 0)
}
class Dog extends Mammal {
	toTrain() {
		this.petStatus.happy += 5;
		return console.log(`${this.name} Выполняет новый трюк! Он очень гордится собой!`)
	}
	giveBone() {
		this.petStatus.happy += 10;
		return console.log(`${this.name} грызет косточку`)
	}
	#timerHello = setTimeout(() => {
		console.log(`Настало время для тренировки? Тогда пиши
		${this.name.toLowerCase()}.toTrain()
		А если у тебя есть для меня косточка, скажи
		${this.name.toLowerCase()}.giveBone()`)
	}, 0)
}

const timerHello = setTimeout(() => {
	console.log(`Чтобы выбрать питомца, введите в консоль:
	let name = new class('name').
	*class - Fish, Bird, Cat  или Dog.`)
}, 0)