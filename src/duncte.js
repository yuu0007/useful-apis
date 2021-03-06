'use strict';

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
	 * @returns {Array}
	 */
	static async npm(count) {
		if (typeof count !== 'number') return console.error(`${chalk.bgRed('Error')} - Count must be a number.`);
		const body = await fetch(`https://apis.duncte123.me/npm?count=${count}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		return body.data;
	}

	/**
	 * Returns a random meme.
	 * @param {boolean} nsfw If we allow the response to be nsfw.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async getMeme(nsfw) {
		if (typeof nsfw !== 'boolean') return console.error(`${chalk.bgRed('Error')} - NSFW must be a boolean.`);
		const body = await fetch(`https://apis.duncte123.me/meme?nsfw=${nsfw}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			title: body.data.title,
			body: body.data.body,
			url: body.data.url,
			image: body.data.image
		};
		return data;
	}

	/**
	 * Returns a random joke.
	 * @param {boolean} nsfw If we allow the response to be nsfw.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async getJoke(nsfw) {
		if (typeof nsfw !== 'boolean') return console.error(`${chalk.bgRed('Error')} - NSFW must be a boolean.`);
		const body = await fetch(`https://apis.duncte123.me/joke?nsfw=${nsfw}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			title: body.data.title,
			body: body.data.body,
			url: body.data.url
		};
		return data;
	}

	/**
	 * Decode tokens for a discord bot.
	 * @param {string} token The bot token.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async decodeToken(token) {
		if (typeof token !== 'string') return console.error(`${chalk.bgRed('Error')} - Token must be a string.`);
		const botToken = {
			token: token
		};
		const body = await fetch('https://apis.duncte123.me/token', {
			method: 'post',
			body: JSON.stringify(botToken),
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			id: body.data.id,
			timestamp: body.data.timestamp
		};
		return data;
	}

	/**
	 * Fetch the view and sub count from a youtube channel.
	 * @param {string} apiKey Your youtube api key.
	 * @param {string} channelId The channel id for the channel that you wanna view.
	 * @static
	 * @async
	 * @returns {Object}
	 */
	static async ytChannel(apiKey, channelId) {
		if (typeof apiKey !== 'string') return console.error(`${chalk.bgRed('Error')} - Api key must be a string.`);
		else if (typeof channelId !== 'string') return console.error(`${chalk.bgRed('Error')} - Channel id must be a string.`);
		const body = await fetch(`https://apis.duncte123.me/youtube/${apiKey}/${channelId}`).then(res => res.json());
		if (body.success === false) return console.error(`${chalk.bgRed(`${body.error.type}`)} - ${body.error.message}`);
		const data = {
			subs: body.data.subs,
			channel: body.data.channel,
			views: body.data.views,
			videos: body.data.videos
		};
		return data;
	}

}

module.exports = duncte;
