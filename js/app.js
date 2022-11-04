//INPUTS
const inputPlayers = document.getElementById('input-players'),
	inputNumberOfLeaders = document.getElementById('input-number-of-leaders'),
	inputExcludedLeaders = document.getElementById('input-excluded-leaders'),
	inputBannedLeaders = document.getElementById('input-banned-leaders'),
	inputTotalLeaders = document.getElementById('input-total-leaders'),
	templateContainer = document.querySelector('.template-container'),
	templateBeginContainer = document.querySelector('.template-begin-container');


//BUTTONS
const presetButtons = {
	setDuel: document.getElementById('DUEL-button'),
	set2x2: document.getElementById('2x2-button'),
	set3x3: document.getElementById('3x3-button'),
	setFFA4: document.getElementById('FFA4-button'),
	setFFA6: document.getElementById('FFA6-button'),
	setFFA8: document.getElementById('FFA8-button'),
	setFFA10: document.getElementById('FFA10-button'),
	calcDuel() {
		inputPlayers.value = 2
		inputNumberOfLeaders.value = 6
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calc2x2() {
		inputPlayers.value = 4
		inputNumberOfLeaders.value = 4
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calc3x3() {
		inputPlayers.value = 6
		inputNumberOfLeaders.value = 3
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calcFFA4() {
		inputPlayers.value = 4
		inputNumberOfLeaders.value = 4
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calcFFA6() {
		inputPlayers.value = 6
		inputNumberOfLeaders.value = 3
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calcFFA8() {
		inputPlayers.value = 8
		inputNumberOfLeaders.value = 3
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	calcFFA10() {
		inputPlayers.value = 10
		inputNumberOfLeaders.value = 4
		inputExcludedLeaders.value = `${(inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)}`
		inputBannedLeaders.value = 0
		inputTotalLeaders.value = 58
	},
	checkCondition() {
		let valueCalc = (inputTotalLeaders.value - inputBannedLeaders.value) - (inputPlayers.value * inputNumberOfLeaders.value)
		if (valueCalc >= 0) {
			inputExcludedLeaders.value = valueCalc
		}
		if (valueCalc <= 0) {
			inputPlayers.max = inputPlayers.value
		}
		if (valueCalc <= 0) {
			inputNumberOfLeaders.max = inputNumberOfLeaders.value
		}
	}
}

//EVENT LISTENERS
presetButtons.setDuel.addEventListener('click', presetButtons.calcDuel);
presetButtons.set2x2.addEventListener('click', presetButtons.calc2x2);
presetButtons.set3x3.addEventListener('click', presetButtons.calc3x3);
presetButtons.setFFA4.addEventListener('click', presetButtons.calcFFA4);
presetButtons.setFFA6.addEventListener('click', presetButtons.calcFFA6);
presetButtons.setFFA8.addEventListener('click', presetButtons.calcFFA8);
presetButtons.setFFA10.addEventListener('click', presetButtons.calcFFA10);

inputPlayers.addEventListener('change', presetButtons.checkCondition)
inputNumberOfLeaders.addEventListener('change', presetButtons.checkCondition)

//BAN FIELD
const banField = {
	allCheckBox: document.querySelectorAll('.main-content__ban-nations__counties'),
	changeStatus() {
		this.classList.toggle('banned');
		presetButtons.checkCondition();
	}
}
banField.allCheckBox.forEach(elem => {
	elem.onchange = banField.changeStatus;
})

// change number of leadersIsBannedData
const checkboxCivilization = document.querySelectorAll('#checkboxCivilization');
checkboxCivilization.forEach((elem, i) => {
	elem.onchange = () => {
		const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

		inputBannedLeaders.value = checkboxes.length;
		(elem.checked) ? inputExcludedLeaders.value = +inputExcludedLeaders.value + 1 : inputExcludedLeaders.value = +inputExcludedLeaders.value - 1;
		(leadersIsBannedData[i].isBanned === false) ? leadersIsBannedData[i].isBanned = true : leadersIsBannedData[i].isBanned = false;
	}
})

//Arrays of data
const leadersIsBannedData = [
	{ civilization: 'American', leader: 'Teddy Roosevelt (Bull Moose)', isBanned: false },
	{ civilization: 'American', leader: 'Teddy Roosevelt (Rough Rider)', isBanned: false },
	{ civilization: 'Arabian', leader: 'Saladin', isBanned: false },
	{ civilization: 'Australian', leader: 'John Curtin', isBanned: false },
	{ civilization: 'Aztec', leader: 'Montezuma', isBanned: false },
	{ civilization: 'Babylonian', leader: 'Hammurabi', isBanned: false },
	{ civilization: 'Brazilian', leader: 'Pedro II', isBanned: false },
	{ civilization: 'Byzantine', leader: 'Basil II', isBanned: false },
	{ civilization: 'Canadian', leader: 'Wilfrid Laurier', isBanned: false },
	{ civilization: 'Chinese', leader: 'Qin Shi Huang', isBanned: false },
	{ civilization: 'Chinese', leader: 'Kublai Khan_cn', isBanned: false },
	{ civilization: 'Cree', leader: 'Poundmaker', isBanned: false },
	{ civilization: 'Dutch', leader: 'Wilhelmina', isBanned: false },
	{ civilization: 'Egyptian', leader: 'Cleopatra', isBanned: false },
	{ civilization: 'English', leader: 'Victoria', isBanned: false },
	{ civilization: 'English', leader: 'Eleanor of Aquitaine_uk', isBanned: false },
	{ civilization: 'Ethiopian', leader: 'Menelik II', isBanned: false },
	{ civilization: 'French', leader: 'Catherine de Medici (Black Queen)', isBanned: false },
	{ civilization: 'French', leader: 'Catherine de Medici (Magnificence)', isBanned: false },
	{ civilization: 'French', leader: 'Eleanor of Aquitaine_fr', isBanned: false },
	{ civilization: 'Gallic', leader: 'Ambiorix', isBanned: false },
	{ civilization: 'Georgian', leader: 'Tamar', isBanned: false },
	{ civilization: 'German', leader: 'Frederick Barbarossa', isBanned: false },
	{ civilization: 'Gran Colombian', leader: 'Simón Bolívar', isBanned: false },
	{ civilization: 'Greek', leader: 'Gorgo', isBanned: false },
	{ civilization: 'Greek', leader: 'Pericles', isBanned: false },
	{ civilization: 'Hungarian', leader: 'Matthias Corvinus', isBanned: false },
	{ civilization: 'Incan', leader: 'Pachacuti', isBanned: false },
	{ civilization: 'Indian', leader: 'Chandragupta', isBanned: false },
	{ civilization: 'Indian', leader: 'Gandhi', isBanned: false },
	{ civilization: 'Indonesian', leader: 'Gitarja', isBanned: false },
	{ civilization: 'Japanese', leader: 'Hojo Tokimune', isBanned: false },
	{ civilization: 'Khmer', leader: 'Jayavarman VII', isBanned: false },
	{ civilization: 'Kongolese', leader: 'Mvemba a Nzinga', isBanned: false },
	{ civilization: 'Korean', leader: 'Seondeok', isBanned: false },
	{ civilization: 'Macedonian', leader: 'Alexander', isBanned: false },
	{ civilization: 'Malian', leader: 'Mansa Musa', isBanned: false },
	{ civilization: 'Māori', leader: 'Kupe', isBanned: false },
	{ civilization: 'Mapuche', leader: 'Lautaro', isBanned: false },
	{ civilization: 'Mayan', leader: 'Lady Six Sky', isBanned: false },
	{ civilization: 'Mongolian', leader: 'Genghis Khan', isBanned: false },
	{ civilization: 'Mongolian', leader: 'Kublai Khan_mn', isBanned: false },
	{ civilization: 'Norwegian', leader: 'Harald Hardrada', isBanned: false },
	{ civilization: 'Nubian', leader: 'Amanitore', isBanned: false },
	{ civilization: 'Ottoman', leader: 'Suleiman', isBanned: false },
	{ civilization: 'Persian', leader: 'Cyrus', isBanned: false },
	{ civilization: 'Phoenician', leader: 'Dido', isBanned: false },
	{ civilization: 'Polish', leader: 'Jadwiga', isBanned: false },
	{ civilization: 'Portuguese', leader: 'Joāo III', isBanned: false },
	{ civilization: 'Roman', leader: 'Trajan', isBanned: false },
	{ civilization: 'Russian', leader: 'Peter', isBanned: false },
	{ civilization: 'Scottish', leader: 'Robert the Bruce', isBanned: false },
	{ civilization: 'Scythian', leader: 'Tomyris', isBanned: false },
	{ civilization: 'Spanish', leader: 'Philip II', isBanned: false },
	{ civilization: 'Sumerian', leader: 'Gilgamesh', isBanned: false },
	{ civilization: 'Swedish', leader: 'Kristina', isBanned: false },
	{ civilization: 'Vietnamese', leader: 'Bà TriỆu', isBanned: false },
	{ civilization: 'Zulu', leader: 'Shaka', isBanned: false },
];

const leadersImgData = [
	{ leader: 'Teddy Roosevelt (Bull Moose)', civicImg: "001", leaderImg: "Teddy_Roosevelt_29", leaderWiki: "Teddy_Roosevelt_(Civ6)/Bull_Moose" },
	{ leader: 'Teddy Roosevelt (Rough Rider)', civicImg: "001-1", leaderImg: "Teddy_Roosevelt_29_29", leaderWiki: "Teddy_Roosevelt_(Civ6)/Rough_Rider" },
	{ leader: 'Saladin', civicImg: "002", leaderImg: "Saladin_29", leaderWiki: "Saladin_" },
	{ leader: 'John Curtin', civicImg: "003", leaderImg: "John_Curtin_29", leaderWiki: "John_Curtin_" },
	{ leader: 'Montezuma', civicImg: "004", leaderImg: "Montezuma_29", leaderWiki: "Montezuma_" },
	{ leader: 'Hammurabi', civicImg: "048", leaderImg: "Hammurabi_29", leaderWiki: "Hammurabi_" },
	{ leader: 'Pedro II', civicImg: "005", leaderImg: "Pedro_II_29", leaderWiki: "Pedro_II_" },
	{ leader: 'Basil II', civicImg: "006", leaderImg: "Basil_II_29", leaderWiki: "Basil_II_" },
	{ leader: 'Wilfrid Laurier', civicImg: "007", leaderImg: "Wilfrid_Laurier_29", leaderWiki: "Wilfrid_Laurier_" },
	{ leader: 'Qin Shi Huang', civicImg: "008", leaderImg: "Qin_Shi_Huang_29", leaderWiki: "Qin_Shi_Huang_" },
	{ leader: 'Kublai Khan_cn', civicImg: "008-1", leaderImg: "Kublai_Khan_29_29", leaderWiki: "Kublai_Khan_" },
	{ leader: 'Poundmaker', civicImg: "009", leaderImg: "Poundmaker_29", leaderWiki: "Poundmaker_" },
	{ leader: 'Wilhelmina', civicImg: "010", leaderImg: "Wilhelmina_29", leaderWiki: "Wilhelmina_" },
	{ leader: 'Cleopatra', civicImg: "011", leaderImg: "Cleopatra_29", leaderWiki: "Cleopatra_" },
	{ leader: 'Victoria', civicImg: "012", leaderImg: "Victoria_29", leaderWiki: "Victoria_" },
	{ leader: 'Eleanor of Aquitaine_uk', civicImg: "012", leaderImg: "Eleanor_of_Aquitaine_29_29", leaderWiki: "Eleanor_of_Aquitaine_" },
	{ leader: 'Menelik II', civicImg: "013", leaderImg: "Menelik_II_29", leaderWiki: "Menelik_II_" },
	{ leader: 'Catherine de Medici (Black Queen)', civicImg: "014", leaderImg: "Catherine_de_Medici_29", leaderWiki: "Catherine_de_Medici_" },
	{ leader: 'Catherine de Medici (Magnificence)', civicImg: "014", leaderImg: "Catherine_de_Medici_29_29", leaderWiki: "Catherine_de_Medici_" },
	{ leader: 'Eleanor of Aquitaine_fr', civicImg: "014", leaderImg: "Eleanor_of_Aquitaine_29_29-2", leaderWiki: "Eleanor_of_Aquitaine_" },
	{ leader: 'Ambiorix', civicImg: "015", leaderImg: "Ambiorix_29", leaderWiki: "Ambiorix_" },
	{ leader: 'Tamar', civicImg: "016", leaderImg: "Tamar_29", leaderWiki: "Tamar_" },
	{ leader: 'Frederick Barbarossa', civicImg: "017", leaderImg: "Frederick_Barbarossa_29", leaderWiki: "Frederick_Barbarossa_" },
	{ leader: 'Simón Bolívar', civicImg: "018", leaderImg: "Sim3Fvar_29", leaderWiki: "Sim%C3%B3n_Bol%C3%ADvar_" },
	{ leader: 'Gorgo', civicImg: "019", leaderImg: "Gorgo_29", leaderWiki: "Gorgo_" },
	{ leader: 'Pericles', civicImg: "019", leaderImg: "Pericles_29", leaderWiki: "Pericles_" },
	{ leader: 'Matthias Corvinus', civicImg: "020", leaderImg: "Matthias_Corvinus_29", leaderWiki: "Matthias_Corvinus_" },
	{ leader: 'Pachacuti', civicImg: "021", leaderImg: "Pachacuti_29", leaderWiki: "Pachacuti_" },
	{ leader: 'Chandragupta', civicImg: "022", leaderImg: "Chandragupta_29", leaderWiki: "Chandragupta_" },
	{ leader: 'Gandhi', civicImg: "022", leaderImg: "Gandhi_29", leaderWiki: "Gandhi_" },
	{ leader: 'Gitarja', civicImg: "023", leaderImg: "Gitarja_29", leaderWiki: "Gitarja_" },
	{ leader: 'Hojo Tokimune', civicImg: "024", leaderImg: "Hojo_Tokimune_29", leaderWiki: "Hojo_Tokimune_" },
	{ leader: 'Jayavarman VII', civicImg: "025", leaderImg: "Jayavarman_VII_29", leaderWiki: "Jayavarman_VII_" },
	{ leader: 'Mvemba a Nzinga', civicImg: "026", leaderImg: "Mvemba_a_Nzinga_29", leaderWiki: "Mvemba_a_Nzinga_" },
	{ leader: 'Seondeok', civicImg: "027", leaderImg: "Seondeok_29", leaderWiki: "Seondeok_" },
	{ leader: 'Alexander', civicImg: "028", leaderImg: "Alexander_29", leaderWiki: "Alexander_" },
	{ leader: 'Mansa Musa', civicImg: "029", leaderImg: "Mansa_Musa_29", leaderWiki: "Mansa_Musa_" },
	{ leader: 'Kupe', civicImg: "030", leaderImg: "Kupe_29", leaderWiki: "Kupe_" },
	{ leader: 'Lautaro', civicImg: "031", leaderImg: "Lautaro_29", leaderWiki: "Lautaro_" },
	{ leader: 'Lady Six Sky', civicImg: "032", leaderImg: "Lady_Six_Sky_29", leaderWiki: "Lady_Six_Sky_" },
	{ leader: 'Genghis Khan', civicImg: "033", leaderImg: "Genghis_Khan_29", leaderWiki: "Genghis_Khan_" },
	{ leader: 'Kublai Khan_mn', civicImg: "033-1", leaderImg: "Kublai_Khan_29_29-2", leaderWiki: "Kublai_Khan_" },
	{ leader: 'Harald Hardrada', civicImg: "034", leaderImg: "Harald_Hardrada_29", leaderWiki: "Harald_Hardrada_" },
	{ leader: 'Amanitore', civicImg: "035", leaderImg: "Amanitore_29", leaderWiki: "Amanitore_" },
	{ leader: 'Suleiman', civicImg: "036", leaderImg: "Suleiman_29", leaderWiki: "Suleiman_" },
	{ leader: 'Cyrus', civicImg: "037", leaderImg: "Cyrus_29", leaderWiki: "Cyrus_" },
	{ leader: 'Dido', civicImg: "038", leaderImg: "Dido_29", leaderWiki: "Dido_" },
	{ leader: 'Jadwiga', civicImg: "039", leaderImg: "Jadwiga_29", leaderWiki: "Jadwiga_" },
	{ leader: 'Joāo III', civicImg: "Portuguese", leaderImg: "Joao_III", leaderWiki: "Jo%C3%A3o_III_" },
	{ leader: 'Trajan', civicImg: "040", leaderImg: "Trajan_29", leaderWiki: "Trajan_" },
	{ leader: 'Peter', civicImg: "041", leaderImg: "Peter_29", leaderWiki: "Peter_" },
	{ leader: 'Robert the Bruce', civicImg: "042", leaderImg: "Robert_the_Bruce_29", leaderWiki: "Robert_the_Bruce_" },
	{ leader: 'Tomyris', civicImg: "043", leaderImg: "Tomyris_29", leaderWiki: "Tomyris_" },
	{ leader: 'Philip II', civicImg: "044", leaderImg: "Philip_II_29", leaderWiki: "Philip_II_" },
	{ leader: 'Gilgamesh', civicImg: "045", leaderImg: "Gilgamesh_29", leaderWiki: "Gilgamesh_" },
	{ leader: 'Kristina', civicImg: "046", leaderImg: "Kristina_29", leaderWiki: "Kristina_" },
	{ leader: 'Bà TriỆu', civicImg: "Vietnamese_29", leaderImg: "B3Fu_29", leaderWiki: "B%C3%A0_Tri%E1%BB%87u_" },
	{ leader: 'Shaka', civicImg: "047", leaderImg: "Shaka_29", leaderWiki: "Shaka_" },
];

let draftedNonBanned = [],
	draftedIndex = [];

const calcLeadersToDraft = () => {
	let civicCount = 0;

	const checkIsBannedFalse = () => {
		draftedNonBanned = leadersIsBannedData.filter(elem => elem.isBanned === false);
		civicCount = +inputPlayers.value * +inputNumberOfLeaders.value;
		draftedNonBanned.forEach(elem => {
			delete elem.isBanned;
		})
	}

	const calcRandomIndex = () => {
		let array = [];

		for (let i = 0; i <= draftedNonBanned.length - 1; i++) {
			array.push(i)
		}

		for (let countCycles = 1; countCycles <= civicCount; countCycles++) {
			draftedIndex.push(array.splice(Math.random() * array.length, 1)[0])
		}
	}
	checkIsBannedFalse();
	calcRandomIndex();
	getIndexToLeadersNumber();
};

let finalArray = [];
const getIndexToLeadersNumber = () => {
	draftedIndex.forEach(item => {
		return finalArray.push(draftedNonBanned[item])
	})
}

const draftGameButton = document.querySelector('button').addEventListener('click', () => {
	calcLeadersToDraft();
	getIndexToLeadersNumberImgData();
	getCivicValues();
	createTemplate(+inputPlayers.value);
	createClipboardText();
})

let finalArrayCivic = [];
const getIndexToLeadersNumberImgData = () => {
	draftedIndex.forEach(item => {
		return finalArrayCivic.push(leadersImgData[item])
	});
}

let civicValues;
const getCivicValues = () => {
	civicValues = finalArray.map(elem => Object.values(elem));
}

let templateAccum = '',
	resultToCopy = '',
	countPlayers = 1;

const players = () => {
	let players;
	let playersToCopy;
	for (let i = 0; i < 1; i++) {
		players = `
<h3>player <span>${countPlayers}</span></h3>
`
		playersToCopy = `
| Player ${countPlayers} `
		templateAccum += players;
		resultToCopy += playersToCopy;
		countPlayers++;
	}
	return templateAccum;
}

let countCivic = 0;
const civics = (civicNumber) => {
	let civics;
	let civicsToCopy;
	for (let i = 0; i < civicNumber; i++) {
		civics = `
<div class="main-content__ban-nations__counties nation">
	<div class="container1">
		<img src="./images/civ_icons/image_part_${finalArrayCivic[countCivic].civicImg}.png" alt="">
		<p>${civicValues[countCivic][0]}</p>
	</div>
	<div class="container2">
		<img src="./images/leaders_icons/${finalArrayCivic[countCivic].leaderImg}.webp" alt="">
		<p>${civicValues[countCivic][1]}</p>
	</div>
	<a target="_blank" href="https://civilization.fandom.com/wiki/${finalArrayCivic[countCivic].leaderWiki}(Civ6)">More information</a>
</div>
`
		civicsToCopy = ` (${civicValues[countCivic][0]} - ${civicValues[countCivic][1]}) `
		templateAccum += civics;
		resultToCopy += civicsToCopy;
		countCivic++;
	}
	return templateAccum;
}
//TEMPLATE
const createTemplate = (playerNumber) => {
	for (let i = 0; i < playerNumber; i++) {
		players(+inputPlayers.value);
		civics(+inputNumberOfLeaders.value);
	}
	const templateBegin = `
	<div class="hz-line"></div>
	<button class="copy" data-clipboard-text="${resultToCopy}">copy to clipboard</button>
	`
	return templateBeginContainer.innerHTML = templateBegin,
		templateContainer.innerHTML = templateAccum
}
//CLIPBOARD
const createClipboardText = () => {
	new ClipboardJS('.copy');
	return document.querySelector('.copy').addEventListener('click', () => {
		const notif = document.querySelector('.copied-text-notif')
		notif.innerHTML = 'civilizations have been copied'
		notif.style.display = "block";
		setTimeout(() => notif.style.display = "none", 2800)
	});
}