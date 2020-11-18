const fetch = require('node-fetch');
const chalk = require('chalk');

/**
 * The class for https://apis.duncte123.me
 * @class
 * @hideconstructor
 */
class duncte {

	/**
	 * Get a random string!
	 * @param {number} length The length of the random string.
	 * @static
	 * @async
	 * @returns {string}
	 */
	static async randomString(length) {
		if (typeof length !== 'number') return console.error(`${chalk.bgRed('Error')} - Length must be a number.`);
		const body = await fetch(`https://apis.duncte123.me/random-string/${length}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		return body.data;
	}

	/**
	 * Creates a loveship for two people!
	 * @param {string} name1 The name of the first person.
	 * @param {string} name2 The name of the second person.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async love(name1, name2) {
		if (typeof name1 !== 'string' || typeof name2 !== 'string') return console.error(`${chalk.bgRed('Error')} - The names must be a number.`);
		const body = await fetch(`https://apis.duncte123.me/love/${name1}/${name2}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			names: body.data.names,
			score: body.data.score,
			message: body.data.message
		};
		return data;
	}

	/**
	 * Searches for some npm meanings.
	 * @param {number} count The amount of results to return.
	 * @static
	 * @async
	 * @returns {array}
	 */
	static async npm(count) {
		if (typeof count !== 'number') return console.error(`${chalk.bgRed('Error')} - Count must be a number.`);
		const body = await fetch(`https://apis.duncte123.me/npm?count=${count}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		return body.data;
	}

}

module.exports = duncte;
