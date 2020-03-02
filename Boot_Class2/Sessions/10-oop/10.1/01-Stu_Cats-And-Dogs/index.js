const dogs = {
	raining: true,
	noise: 'Woof!',
	makeNoise: function() {
		if (this.raining) console.log(({ noise } = dogs));
	}
};

const cats = {
	raining: false,
	noise: 'Meow!',
	makeNoise: function() {
		if (this.raining) console.log(({ noise } = cats));
	}
};

dogs.makeNoise(true);
cats.raining = true;
cats.makeNoise();

const massHysteria = (animal, animal2) => {
	if (dogs.raining === true && cats.raining === true) {
		console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA');
	}
};

massHysteria(dogs, cats);
