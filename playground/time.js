//Jan 1st 1970 00:00:00 am Unix epic

const moment = require('moment');

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);


let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));