'use strict';

class Player {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi my name is ${this.name}`);
  }
}

class Cpu {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi i am cpu ${this.name}`);
  }

  coreCpu() {
    let cpuChoose = Math.trunc(Math.random(2) * 7);

    if (cpuChoose <= 2) {
      return 'BATU';
    } else if (cpuChoose > 2 && cpuChoose < 5) {
      return 'GUNTING';
    } else {
      return 'KERTAS';
    }
  }
}

class Machine {
  constructor(name) {
    this.name = name;
  }

  checkWin(player, cpu) {
    if (player === cpu) return 'Draw';
    if (player === 'BATU')
      return cpu === 'GUNTING' ? 'Pemain Maju' : 'Musuh Maju';
    if (player === 'GUNTING')
      return cpu === 'KERTAS' ? 'Pemain Maju' : 'Musuh Maju';
    if (player === 'KERTAS')
      return cpu === 'BATU' ? 'Pemain Maju' : 'Musuh Maju';
  }

  printResult(player, cpu, condition, playerObj, cpuObj) {
    return `${player}(${playerObj.name}) ketemu ${cpu} (${cpuObj.name}), ${condition}`;
  }

  showUpdate(checkWin, playerScreen, cpuScreen) {
    if (checkWin === 'Draw') {
    } else if (checkWin === 'Pemain Maju') {
      playerScreen.children[score[0]].textContent = '';
      playerScreen.children[score[0] + 1].textContent = 'P';
      score[0] += 1;
    } else {
      cpuScreen.children[score[1]].textContent = '';
      cpuScreen.children[score[1] + 1].textContent = 'C';
      score[1] += 1;
    }
  }

  isGameContinue(player, infoBox) {
    if (score[0] === 9) {
      let isAgain = prompt(
        `Congratulation ${player.name} You win \nTry Again?`
      );
      isAgain === null ? (runGame = false) : this.resetGame(infoBox);
    } else if (score[1] === 9) {
      let isAgain = prompt(`You Lose.. Try Again ? `);
      isAgain === null ? (runGame = false) : this.resetGame(infoBox);
    }
  }

  resetGame(infoBox) {
    score = [0, 0];
    infoBox.textContent = '';
    runGame = true;
    const nodeList = document.querySelectorAll('.main-board');
    nodeList.forEach(node => (node.innerHTML = ''));
    nodeList[0].textContent = 'C';
    nodeList[10].textContent = 'P';
  }
}

// ===========
// all player
const play0 = new Player(prompt('Hi !! please enter your name...') || 'player');
const play1 = new Cpu('com');
const machine = new Machine('Machine 01');

// Global variable
let score = [0, 0];
let runGame = true;

// function

// Main Engine
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.btn');
  const infoBox = document.querySelector('.info-box');

  const cpuScreen = document.querySelector('.cpu-screen');
  const playerScreen = document.querySelector('.player-screen');

  // controller
  btn.forEach(button => {
    button.addEventListener('click', function () {
      if (runGame) {
        const playerChoose = this.textContent;
        const cpuChoose = play1.coreCpu();
        const checkWin = machine.checkWin(playerChoose, cpuChoose);
        const printRes = machine.printResult(
          playerChoose,
          cpuChoose,
          checkWin,
          play0,
          play1
        );
        infoBox.insertAdjacentHTML('afterbegin', `<p>${printRes}</p>`);
        machine.showUpdate(checkWin, playerScreen, cpuScreen);
        machine.isGameContinue(play0, infoBox);
      }
    });
  });
});

// if (checkWin === 'Draw') {
//   console.log('test draw');
// } else if (checkWin === 'Pemain Maju') {
//   console.log('test pemain maju');
//   playerScreen.children[score[0]].textContent = '';
//   playerScreen.children[score[0] + 1].textContent = 'P';
//   score[0] += 1;
// } else {
//   console.log('test musuh maju');
//   cpuScreen.children[score[1]].textContent = '';
//   cpuScreen.children[score[1] + 1].textContent = 'C';
//   score[1] += 1;
// }

// const showUpdate = function (checkWin, playerScreen, cpuScreen) {
//   if (checkWin === 'Draw') {
//     console.log('test draw');
//   } else if (checkWin === 'Pemain Maju') {
//     console.log('test pemain maju');
//     playerScreen.children[score[0]].textContent = '';
//     playerScreen.children[score[0] + 1].textContent = 'P';
//     score[0] += 1;
//   } else {
//     console.log('test musuh maju');
//     cpuScreen.children[score[1]].textContent = '';
//     cpuScreen.children[score[1] + 1].textContent = 'C';
//     score[1] += 1;
//   }
// };

// const isGameContinue = function (player) {
//   if (score[0] === 9) {
//     let isAgain = prompt(`Congratulation ${player.name} You win \nTry Again?`);
//     isAgain === null ? (runGame = false) : (runGame = true);
//   } else if (score[1] === 9) {
//     let isAgain = prompt(`You Lose.. Try Again ? `);
//     isAgain === null ? (runGame = false) : (runGame = true);
//   }
// };

// console.log(playerChoose);
// console.log(cpuChoose);
// console.log(checkWin);
// console.log(printRes);

// console.log('test draw');
// console.log('test pemain maju');
// console.log('test musuh maju');
// console.log(nodeList);
