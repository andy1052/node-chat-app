const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Deb';
		var latitude = 15;
		var longitude = 19;
		var url = 'https://www.google.com/maps?=15,19';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from,
			url
		});
	});
});