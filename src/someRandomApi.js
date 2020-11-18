const fetch = require('node-fetch');
const chalk = require('chalk');

/**
 * The class for https://some-random-api.ml
 * @class
 * @hideconstructor
 */
class someRandomApi {

	/**
	 * Chat to a bot!
	 * @param {string} message The message you wanna send to the chat bot.
	 * @param {string} [apikey] Your api key. (Optional)
	 * @static
	 * @async
	 * @returns {string}
	 */
	static async chat(message, apikey) {
		if (typeof message !== 'string') return console.error(`${chalk.bgRed('Error')} - Message must be a string.`);
		const body = await fetch(`https://some-random-api.ml/chatbot?message=${encodeURIComponent(message)}${apikey ? `&key=${apikey}` : ''}`).then(res => res.json());
		if (body.error !== undefined) return console.error(chalk.bgRed(body.error));
		return body.response;
	}

}

module.exports = someRandomApi;
