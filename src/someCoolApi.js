'use strict';

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
		const body = await fetch('http://api.somecool.repl.co/random-emoji').then(
			res => res.json()
		);
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
		if (typeof text !== 'string') { return console.error(`${chalk.bgRed('ERROR')} - Text must be a string.`); }
		const body = await fetch(
			`http://api.somecool.repl.co/translate?text=${encodeURIComponent(text)}`
		).then(res => res.json());
		const data = {
			text: body.text,
			translated: body.translated,
			translatedFrom: body.translated_from
		};
		return data;
	}

	/**
	 * Search for an image!
	 * @param {string} query The image you want to search for.
	 * @static
	 * @async
	 * @returns {string}
	 */
	static async imageSearch(query) {
		if (typeof query !== 'string') { return console.error(`${chalk.bgRed('ERROR')} - Query must be a string.`); }
		const body = await fetch(
			`http://api.somecool.repl.co/image-search?query=${encodeURIComponent(
				query
			)}`
		).then(res => res.json());
		return body.result;
	}

	/**
	 * Search for a video in youtube!
	 * @param {string} query The video you want to search for.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async ytSearch(query) {
		if (typeof query !== 'string') { return console.error(`${chalk.bgRed('ERROR')} - Query must be a string.`); }
		const body = await fetch(`http://api.somecool.repl.co/yt-search?search=${encodeURIComponent(query)}`).then(res => res.json());
		if (body.message !== undefined) return console.error(chalk.bgRed(body.message));
		const data = {
			title: body.title,
			url: body.url,
			thumbnail: body.thumbnail,
			duration: body.duration,
			timeUploaded: body.uploaded,
			views: Number(body.views).toLocaleString(),
			uploaderName: body.uploader_name,
			uploaderUrl: body.uploader_url
		};
		return data;
	}

}

module.exports = someCoolApi;
