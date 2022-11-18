//DATA
const link1 = await fetch('./data/leadersIsBannedData.json');
const leadersIsBannedData = await link1.json();

const link2 = await fetch('./data/leadersImgData.json');
const leadersImgData = await link2.json();

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
    inputPlayers.value = 2;
    inputNumberOfLeaders.value = 6;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calc2x2() {
    inputPlayers.value = 4;
    inputNumberOfLeaders.value = 4;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calc3x3() {
    inputPlayers.value = 6;
    inputNumberOfLeaders.value = 3;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calcFFA4() {
    inputPlayers.value = 4;
    inputNumberOfLeaders.value = 4;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calcFFA6() {
    inputPlayers.value = 6;
    inputNumberOfLeaders.value = 3;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calcFFA8() {
    inputPlayers.value = 8;
    inputNumberOfLeaders.value = 3;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  calcFFA10() {
    inputPlayers.value = 10;
    inputNumberOfLeaders.value = 4;
    inputExcludedLeaders.value = `${
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value
    }`;
    inputBannedLeaders.value = 0;
    inputTotalLeaders.value = 58;
  },
  checkCondition() {
    let valueCalc =
      inputTotalLeaders.value -
      inputBannedLeaders.value -
      inputPlayers.value * inputNumberOfLeaders.value;
    if (valueCalc >= 0) {
      inputExcludedLeaders.value = valueCalc;
    }
    if (valueCalc <= 0) {
      inputPlayers.max = inputPlayers.value;
    }
    if (valueCalc <= 0) {
      inputNumberOfLeaders.max = inputNumberOfLeaders.value;
    }
  },
};

//EVENT LISTENERS
presetButtons.setDuel.addEventListener('click', presetButtons.calcDuel);
presetButtons.set2x2.addEventListener('click', presetButtons.calc2x2);
presetButtons.set3x3.addEventListener('click', presetButtons.calc3x3);
presetButtons.setFFA4.addEventListener('click', presetButtons.calcFFA4);
presetButtons.setFFA6.addEventListener('click', presetButtons.calcFFA6);
presetButtons.setFFA8.addEventListener('click', presetButtons.calcFFA8);
presetButtons.setFFA10.addEventListener('click', presetButtons.calcFFA10);

inputPlayers.addEventListener('change', presetButtons.checkCondition);
inputNumberOfLeaders.addEventListener('change', presetButtons.checkCondition);

//BAN FIELD
const banField = {
  allCheckBox: document.querySelectorAll(
    '.main-content__ban-nations__counties'
  ),
  changeStatus() {
    this.classList.toggle('banned');
    presetButtons.checkCondition();
  },
};
banField.allCheckBox.forEach((elem) => {
  elem.onchange = banField.changeStatus;
});

// change number of leadersIsBannedData
const checkboxCivilization = document.querySelectorAll('#checkboxCivilization');
checkboxCivilization.forEach((elem, i) => {
  elem.onchange = () => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    inputBannedLeaders.value = checkboxes.length;
    elem.checked
      ? (inputExcludedLeaders.value = +inputExcludedLeaders.value + 1)
      : (inputExcludedLeaders.value = +inputExcludedLeaders.value - 1);
    leadersIsBannedData[i].isBanned === false
      ? (leadersIsBannedData[i].isBanned = true)
      : (leadersIsBannedData[i].isBanned = false);
  };
});

let draftedNonBanned = [],
  draftedIndex = [];

const calcLeadersToDraft = () => {
  let civicCount = 0;

  const checkIsBannedFalse = () => {
    draftedNonBanned = leadersIsBannedData.filter(
      (elem) => elem.isBanned === false
    );
    civicCount = +inputPlayers.value * +inputNumberOfLeaders.value;
    draftedNonBanned.forEach((elem) => {
      delete elem.isBanned;
    });
  };

  const calcRandomIndex = () => {
    let array = [];

    for (let i = 0; i <= draftedNonBanned.length - 1; i++) {
      array.push(i);
    }

    for (let countCycles = 1; countCycles <= civicCount; countCycles++) {
      draftedIndex.push(array.splice(Math.random() * array.length, 1)[0]);
    }
  };
  checkIsBannedFalse();
  calcRandomIndex();
  getIndexToLeadersNumber();
};

let finalArray = [];
const getIndexToLeadersNumber = () => {
  draftedIndex.forEach((item) => {
    return finalArray.push(draftedNonBanned[item]);
  });
};

const draftGameButton = document
  .querySelector('button')
  .addEventListener('click', () => {
    calcLeadersToDraft();
    getIndexToLeadersNumberImgData();
    getCivicValues();
    createTemplate(+inputPlayers.value);
    createClipboardText();
  });

let finalArrayCivic = [];
const getIndexToLeadersNumberImgData = () => {
  draftedIndex.forEach((item) => {
    return finalArrayCivic.push(leadersImgData[item]);
  });
};

let civicValues;
const getCivicValues = () => {
  civicValues = finalArray.map((elem) => Object.values(elem));
};

let templateAccum = '',
  resultToCopy = '',
  countPlayers = 1;

const players = () => {
  let players;
  let playersToCopy;
  for (let i = 0; i < 1; i++) {
    players = `
<h3>player <span>${countPlayers}</span></h3>
`;
    playersToCopy = `
| Player ${countPlayers} `;
    templateAccum += players;
    resultToCopy += playersToCopy;
    countPlayers++;
  }
  return templateAccum;
};

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
`;
    civicsToCopy = ` (${civicValues[countCivic][0]} - ${civicValues[countCivic][1]}) `;
    templateAccum += civics;
    resultToCopy += civicsToCopy;
    countCivic++;
  }
  return templateAccum;
};
//TEMPLATE
const createTemplate = (playerNumber) => {
  for (let i = 0; i < playerNumber; i++) {
    players(+inputPlayers.value);
    civics(+inputNumberOfLeaders.value);
  }
  const templateBegin = `
	<button class="reset-page" onclick="location.reload()">reset page</button>
	<div class="hz-line"></div>
	<button class="copy" data-clipboard-text="${resultToCopy}">copy to clipboard</button>
	`;
  return (
    (templateBeginContainer.innerHTML = templateBegin),
    (templateContainer.innerHTML = templateAccum)
  );
};
//CLIPBOARD
const createClipboardText = () => {
  new ClipboardJS('.copy');
  return document.querySelector('.copy').addEventListener('click', () => {
    const notif = document.querySelector('.copied-text-notif');
    notif.innerHTML = 'civilizations have been copied';
    notif.style.display = 'block';
    setTimeout(() => (notif.style.display = 'none'), 2800);
  });
};
