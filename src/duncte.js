const fetch = require('node-fetch');
const chalk = require('chalk');

/**
 * The class for https://apis.duncte123.me
 * Documentation for this api is in https://docs.duncte123.com
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

}

module.exports = duncte;
