// const api = require('./api')
// const user_events = require('../auth/ui')

// const size = 2
// let data = {}
// let game = {}
//
//
// const printSession = () => {
//   //resetGame();
//   session = {};
//   data = {};
//   // create game in database and in client
//   api.create()
//     .then((result) => {
//       session = result;
//       console.log(result)
//       let parent = document.querySelector('.col-md-8')
//       // separate div for game that can be independently manipulated to show and hide
//       let board = parent.querySelector('.session')
//       // start creation of table
//       let table = '<table>';
//       // create rows with outer loop. After each row is created,
//       // the inner loop creates 3 td's (cells) in the row.
//       for (let i = 0; i < size; i++) {
//         table += '<tr>'
//         for (let j = 0; j < size; j++) {
//           table += '<td row="' + i + '" column="' + j + '"></td>'
//         }
//         table += '</tr>'
//       }
//       // in div with class .session, render table
//       session.innerHTML = table;
//     })
//     .catch((err) => {
//       $("#message").text('There is an error ' + err);
//     })
//
// }

const resetMessage = () => {
  // game = {};
  // data = {};
  // moves = 0;
  setTimeout(function () {
    $('#message').fadeOut();
  }, 3000);
}

const resetSignInMessage = () => {
  setTimeout(function () {
    $('.initial-view').fadeOut();
  }, 500);
}

module.exports = {

  resetMessage,
  resetSignInMessage
}
