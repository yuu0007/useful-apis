const fetch = require('node-fetch');
const chalk = require('chalk');

/**
 * The class for http://api.somecool.repl.co
 * @class
 * @hideconstructor
 */
class someCoolApi {

	/**
	 * Get a random emoji!
	 * @static
	 * @async
	 * @returns {string}
	 */
	static async randomEmoji() {
		const body = await fetch('http://api.somecool.repl.co/random-emoji').then(res => res.json());
		return body.emoji;
	}

	/**
	 * Translate text!
	 * @param {string} text The text to translate.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async translate(text) {
		if (typeof text !== 'string') return console.error(`${chalk.bgRed('ERROR')} - Text must be a string.`);
		const body = await fetch(`http://api.somecool.repl.co/translate?text=${text}`).then(res => res.json());
		const data = {
			text: body.text,
			translated: body.translated,
			translatedFrom: body.translated_from
		};
		return data;
	}

}

module.exports = someCoolApi;
