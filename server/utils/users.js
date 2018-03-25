[{
	id: '/#123lkoasidnf',
	name: 'Andre',
	room: 'The Office Fans'
}]
//Methods********************

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)


class Users {
	constructor() {
		this.users = [];
	}
	
	addUser(id, name, room) {
		let user = {id, name, room};
		this.users.push(user);
		return user;
	}

	removeUser(id) {
		//return user that was removed
	var user = this.users.filter((user) => user.id === id)[0];
	if (user) {
		this.users = this.users.filter((user) => user.id !== id);
	} 
	return user;
	}

	getUser(id) {
		//return user object
		return this.users.filter((user) => user.id === id)[0];
	}

	getUserList(room) {
		//iterate through array and return all users of that room
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => {
			return user.name;

		});
	return namesArray;
	}
};

module.exports = {Users};

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription() {
// 		return `${this.name} is ${this.age} year(s) old`;
// 	}
// };

// var me = new Person('Andre', 34);
// var description = me.getUserDescription();
// console.log(description);