'use strict';

// function
const showPlayerTurn = function (element) {
   element.textContent = '';
   if (player === 'X') {
      element.insertAdjacentHTML('beforeend', `<p>O's Turn</p>`);
   } else if (player === 'O') {
      element.insertAdjacentHTML('beforeend', `<p>X's Turn</p>`);
   }
};

const switchPlayer = para =>
   para === 'X'
      ? (player = 'O')
      : para === 'O'
      ? (player = 'X')
      : console.log('error');

const showXox = function (element, player) {
   element.target.textContent = player;
   board[element.target.dataset.row] = player;
   switchPlayer(player);
};

const checkRow = function (element) {
   if (board[0] == board[1] && board[1] == board[2] && board[(0, 1, 2)] != '') {
      document.querySelector('.p1').style.backgroundColor = 'yellow';
      document.querySelector('.p2').style.backgroundColor = 'yellow';
      document.querySelector('.p3').style.backgroundColor = 'yellow';
      runEngine = false;
   } else if (
      board[3] == board[4] &&
      board[4] == board[5] &&
      board[(3, 4, 5)] != ''
   ) {
      document.querySelector('.p4').style.backgroundColor = 'yellow';
      document.querySelector('.p5').style.backgroundColor = 'yellow';
      document.querySelector('.p6').style.backgroundColor = 'yellow';
      runEngine = false;
   } else if (
      board[6] == board[7] &&
      board[7] == board[8] &&
      board[(6, 7, 8)] != ''
   ) {
      document.querySelector('.p7').style.backgroundColor = 'yellow';
      document.querySelector('.p8').style.backgroundColor = 'yellow';
      document.querySelector('.p9').style.backgroundColor = 'yellow';
      runEngine = false;
   }
};

const checkCol = function (element) {
   if (board[0] == board[3] && board[3] == board[6] && board[(0, 3, 6)] != '') {
      document.querySelector('.p1').style.backgroundColor = 'yellow';
      document.querySelector('.p4').style.backgroundColor = 'yellow';
      document.querySelector('.p7').style.backgroundColor = 'yellow';
      runEngine = false;
   } else if (
      board[1] == board[4] &&
      board[4] == board[7] &&
      board[(1, 4, 7)] != ''
   ) {
      document.querySelector('.p2').style.backgroundColor = 'yellow';
      document.querySelector('.p5').style.backgroundColor = 'yellow';
      document.querySelector('.p8').style.backgroundColor = 'yellow';
      runEngine = false;
   } else if (
      board[2] == board[5] &&
      board[5] == board[8] &&
      board[(2, 5, 8)] != ''
   ) {
      document.querySelector('.p3').style.backgroundColor = 'yellow';
      document.querySelector('.p6').style.backgroundColor = 'yellow';
      document.querySelector('.p9').style.backgroundColor = 'yellow';
      runEngine = false;
   }
};

const checkSlop = function (element) {
   if (board[0] == board[4] && board[4] == board[8] && board[(0, 4, 8)] != '') {
      document.querySelector('.p1').style.backgroundColor = 'yellow';
      document.querySelector('.p5').style.backgroundColor = 'yellow';
      document.querySelector('.p9').style.backgroundColor = 'yellow';
      runEngine = false;
   } else if (
      board[2] == board[4] &&
      board[4] == board[6] &&
      board[(0, 2, 6)] != ''
   ) {
      document.querySelector('.p3').style.backgroundColor = 'yellow';
      document.querySelector('.p5').style.backgroundColor = 'yellow';
      document.querySelector('.p7').style.backgroundColor = 'yellow';
      runEngine = false;
   }
};

function checkWin(element) {
   checkRow(element);
   checkCol(element);
   checkSlop(element);
}

const inp = document.querySelectorAll('.inp');
const p1 = document.querySelector('.p1').textContent;
const p2 = document.querySelector('.p2').textContent;
const p3 = document.querySelector('.p3').textContent;
const p4 = document.querySelector('.p4').textContent;
const p5 = document.querySelector('.p5').textContent;
const p6 = document.querySelector('.p6').textContent;
const p7 = document.querySelector('.p7').textContent;
const p8 = document.querySelector('.p8').textContent;
const p9 = document.querySelector('.p9').textContent;

const infoBox = document.querySelector('.info-box');
const board = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

// global variable
let player = 'X';
let runEngine = true;

// ===========
// main engine
// ===========
inp.forEach(input => {
   input.addEventListener('click', function (el) {
      if (runEngine) {
         if (el.target.textContent == 'X') {
            console.log('choose another');
            return;
         }
         if (el.target.textContent === 'O') {
            console.log('choose another');
            return;
         }
         showPlayerTurn(infoBox);
         showXox(el, player);
         checkWin(el);
      }
   });
});

// reset button
const resBtn = document.querySelector('.res-btn');
resBtn.onclick = () => {
   for (let i = 0; i < board.length; i++) {
      board[i] = '';
   }
   inp.forEach(data => {
      data.textContent = '';
      data.style.backgroundColor = 'white';
   });
   runEngine = true;
};
