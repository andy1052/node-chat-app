const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it ('Should generate the correct message object', () => {
		var from = 'Jen';
		var text = 'some message';
		var message = generateMessage(from, text);


		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from,
			text
		});
		//store res in variable
		//assert from is correct
		//assert text match
		//assert createdAt value is a number toBeA('number');
	});
});