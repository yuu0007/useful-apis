const fetch = require('node-fetch');
const chalk = require('chalk');

/**
 * The class for https://apis.duncte123.me
 * Documentation for this api is in https://docs.duncte123.com
 * @class
 */
class duncte {

	/**
	 * Get a random string!
	 * @param {number} length The length of the random string.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async randomString(length) {
		if (typeof length !== 'string') return console.error(`${chalk.bgRed('Error')} - Length must be a number.`);
		const body = await fetch(`https://apis.duncte123.me/random-string/${length}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			string: body.data
		};
		return data;
	}

}

module.exports = duncte;
